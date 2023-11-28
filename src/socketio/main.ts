import http from "http";
import { Server } from "socket.io";

import { prismaClient } from "../../prisma/client";

import {
  InterServerEvents,
  ClientToServerEvents,
  ServerToClientEvents,
  SocketData,
} from "./types";

const httpServer = http.createServer();

const PORT = process.env.PORT || 3030;

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

async function updateProductsLoop() {
  const products: Product[] = await prismaClient.product.findMany({
    include: { shots: {}, winner: {} },
    orderBy: [{ active: "desc" }, { id: "desc" }],
  });
  products.forEach(async (p) => {
    if (p.active && p.countdown > 0) {
      await prismaClient.product.update({
        data: { countdown: p.countdown - 1 },
        where: { id: p.id },
      });
    }

    if (p.active && p.countdown === 0) {
      const latestShoot = await prismaClient.shot.findFirst({
        where: { Product: { id: p.id } },
      });

      if (latestShoot !== null) {
        await prismaClient.product.update({
          data: {
            active: false,
            winner: { connect: { id: latestShoot.userId } },
          },
          where: { id: p.id },
        });
      } else {
        await prismaClient.product.update({
          data: {
            countdown: 30,
          },
          where: { id: p.id },
        });
      }
    }
  });
  io.emit("update-products", products);
}

async function addShotToProduct(productId: number, email: string) {
  await prismaClient.shot.create({
    data: {
      Product: { connect: { id: productId } },
      User: { connect: { email } },
    },
  });
  await prismaClient.user.update({
    data: { shot: { decrement: 1 } },
    where: { email },
  });
  await prismaClient.product.update({
    data: { countdown: 30, price: { increment: 1 } },
    where: { id: productId },
  });
  await updateProductsLoop();
}

setInterval(() => {
  updateProductsLoop();
}, 1000);

io.on("connection", async (socket) => {
  console.log(`${socket.id} conectou-se.`);

  socket.on("shot", (productId: number, email: string) => {
    addShotToProduct(productId, email);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} saiu.`);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

type Product = {
  winner: {
    id: number;
    username: string;
    email: string;
    password: string;
    shot: number;
  } | null;
  shots: {
    id: number;
    createdAt: Date;
    userId: number;
    productId: number;
  }[];
} & {
  id: number;
  name: string;
  active: boolean;
  price: number | null;
  countdown: number;
  winnerId: number | null;
};

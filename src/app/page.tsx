"use client";

import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Reviews from "@/components/Reviews";
import  Produtos  from "@/components/Products";
import {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from "@/socketio/types";
import { Card, Spinner } from "flowbite-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Socket } from "socket.io";
import { io } from "socket.io-client";
import useSWR, { Fetcher } from "swr";

export type LeilaoSocket = Socket<
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData
>;

type Product = {
  id: number;
  active: boolean;
  countdown: number;
  name: string;
  price: number;
  shots: { id: number; createdAt: string }[];
  winner: { id: number; username: string };
};

const fetcher: Fetcher<number, string> = (...args) =>
  fetch(...args).then((res) => res.json());

export default function Home() {
  const BRLFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const { data, status } = useSession();
  const { data: userShots, mutate } = useSWR(
    `/api/userShots?username=${data?.user.name}`,
    fetcher,
    { refreshInterval: 5 }
  );

  const [products, setProducts] = useState<Product[]>([]);
  const [socket, setSocket] = useState<LeilaoSocket | undefined>();

  async function joinRoom() {
    const sock = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`);
    setSocket(sock as unknown as LeilaoSocket);
    sock.on("update-products", (products) => {
      setProducts(products);
    });
  }

  async function shot(productId: number) {
    socket?.emit("shot", productId, data?.user?.email!);
    mutate();
  }

  useEffect(() => {
    joinRoom();
  }, []);

  if (status !== "authenticated") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <main className="flex flex-col">
      {userShots !== undefined ? (
        <Header username={data.user.name!} shots={userShots} />
      ) : null}

      <section className="flex flex-col max-w-4xl w-full m-auto">
        <h1 className="text-red-900 text-2xl font-bold mb-4 mt-5">
          
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {products?.map(
            ({ id, name, active, shots, price, winner, countdown }) => (
              <Card
                key={id}
                imgAlt="iFome 15"
                imgSrc="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150"
              >
                <p className="text-6xl text-center">{countdown}</p>

                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  <p>{name}</p>
                </h5>
                <span className="w-fit mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                  <p>{shots.length} lances</p>
                </span>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {BRLFormatter.format(price / 100)}
                  </span>
                  {active && (
                    <button
                      type="button"
                      onClick={() => shot(id)}
                      disabled={userShots === 0}
                      className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    >
                      {userShots === 0 ? "Você não tem lances" : "Lance"}
                    </button>
                  )}
                </div>

                {winner ? <p>Ganhador: {winner.username}</p> : null}
              </Card>
            )
          )}
        </div>

        <Carousel />
      </section>
      <Produtos/>              
      <Reviews />
      
      <Footer />
    </main>
  );
}

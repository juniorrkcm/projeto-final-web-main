import { NextResponse } from "next/server";

import { prismaClient } from "../../../../prisma/client"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: { message: "Usuário não informado" } },
      { status: 400 }
    );
  }

  const userShots = await prismaClient.user.findUnique({ where: { username } });
  if (userShots) return Response.json(userShots.shot);

  return NextResponse.json(
    { error: { message: "Usuário não encontrado" } },
    { status: 404 }
  );
}

type AddShotsDTO = {
  username: string;
  shots: string;
};

export async function POST(request: Request) {
  try {
    const { username, shots }: AddShotsDTO = await request.json();
    const user = await prismaClient.user.update({
      data: { shot: { increment: Number(shots) } },
      where: { username },
    });
    return Response.json(user);
  } catch (err) {
    return NextResponse.json(
      { error: { message: String(err) } },
      { status: 400 }
    );
  }
}

import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { prismaClient } from "../../../../prisma/client"

type SignUpDTO = {
  username: string;
  email: string;
  password: string;
};

export async function POST(request: Request) {
  try {
    const { email, username, password }: SignUpDTO = await request.json();
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = await prismaClient.user.create({
      data: { email, password: passwordHash, username },
    });
    return Response.json(user);
  } catch (err) {
    return NextResponse.json(
      { error: { message: String(err) } },
      { status: 400 }
    );
  }
}

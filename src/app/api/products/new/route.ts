import { prismaClient } from "../../../../../prisma/client"
import { NextResponse } from "next/server";

type NewProductDTO = {
  name: string;
};

export async function POST(request: Request) {
  try {
    const { name }: NewProductDTO = await request.json();
    const product = await prismaClient.product.create({ data: { name } });
    return Response.json(product);
  } catch (err) {
    return NextResponse.json(
      { error: { message: String(err) } },
      { status: 400 }
    );
  }
}

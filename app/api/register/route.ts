import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next/types";

const prisma = new PrismaClient();

export async function POST(request: NextApiRequest) {
  const body = await request.json();
  //   console.log(body);
  const { name, email, password } = body.user;
  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
    return NextResponse.json({ user });
  } catch (e) {
    throw new Error(e);
  }
}

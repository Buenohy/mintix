import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";

export type UserResponse = {
  name: string;
  role: string;
  avatarUrl: string;
};

export async function GET() {
  try {
    const allUsers = await db.select().from(users).limit(1);

    if (allUsers.length === 0) {
      return NextResponse.json({
        name: "Hailey Carter",
        role: "Master Admin",
        avatarUrl: "/images/smiling-woman-looking-front-delighted.png",
      });
    }

    return NextResponse.json(allUsers[0]);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar usuário" },
      { status: 500 },
    );
  }
}

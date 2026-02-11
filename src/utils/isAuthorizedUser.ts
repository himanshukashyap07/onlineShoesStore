"use server"

import { authOptions } from "@/app/api/(Auth)/auth/[...nextauth]/option"
import { getServerSession } from "next-auth"
import { handleApiError } from "./apiError";

export async function isUser(){
    const session = await getServerSession(authOptions);

    if (!session) {
        return handleApiError(400,"session not found")
    }

    return session.user.role === "user"
}
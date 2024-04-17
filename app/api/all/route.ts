import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export const GET = async () => {
    const data = await prisma.image.findMany()
    return NextResponse.json({
        data
    })
}
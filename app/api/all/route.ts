import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export const GET = async () => {
    console.log("database call")
    const data = await prisma.image.findMany()
    return NextResponse.json({
        data
    })
}
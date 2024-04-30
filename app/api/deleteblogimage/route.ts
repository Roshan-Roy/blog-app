import { NextRequest, NextResponse } from "next/server"
import { deleteImage } from "@/lib/delete-image"

export const DELETE = async (req: NextRequest) => {
    const blogId = req.nextUrl.searchParams.get("blogId")
    const imagePublicId = req.nextUrl.searchParams.get("imagePublicId")
    try {
        console.log("loading")
        await deleteImage(imagePublicId as string)
        console.log("deleted")
    } catch (e) {
        console.log(e)
    }
    return NextResponse.json({
        message: "Hello"
    })
}
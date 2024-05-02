import { NextRequest, NextResponse } from "next/server"
import { deleteImage } from "@/lib/delete-image"
import { prisma } from "@/lib/db"

export const DELETE = async (req: NextRequest) => {
    const blogId = req.nextUrl.searchParams.get("blogId")
    const imagePublicId = req.nextUrl.searchParams.get("imagePublicId")
    try {
        await deleteImage(imagePublicId as string)
        await prisma.blog.delete({
            where: {
                id: blogId as string
            }
        })
        console.log("deleted")
        return NextResponse.json({
            message: "Blog deleted successfully"
        })
    } catch (e) {
        console.log(e)
        return NextResponse.json({
            message: e
        }, {
            status: 500
        })
    }
}
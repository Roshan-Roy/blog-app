import { NextRequest, NextResponse } from "next/server"
import { uploadImage } from "@/lib/upload-image"
import { prisma } from "@/lib/db"

export const POST = async (req: NextRequest) => {
    const formData = await req.formData()

    const title = formData.get("title") as string
    const image = formData.get("image") as File
    const content = formData.get("content") as string
    const category = formData.get("category") as string
    const userId = formData.get("userId") as string
    try {
        let imageUrl: string | null = null
        if (image) {
            const response: any = await uploadImage(image, "blogging-app")
            imageUrl = response.secure_url
        }
        await prisma.blog.create({
            data: {
                title,
                content,
                category,
                userId,
                image: imageUrl
            }
        })
        return NextResponse.json({
            message: "Blog added"
        })
    } catch (e) {
        return NextResponse.json({
            message: "An Error occurred"
        })
    }
}
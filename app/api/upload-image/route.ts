import { uploadImage } from "@/lib/upload-image"
import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"


export const POST = async (req: NextRequest) => {
    const formData = await req.formData()
    const image = formData.get("image") as unknown as File
    const userId = formData.get("userid") as string
    try {
        const response: any = await uploadImage(image, "blogging-app")
        await prisma.image.create({
            data: {
                src: response.secure_url,
                userId
            }
        })
        return NextResponse.json({
            message: "Image uploaded"
        }, {
            status: 201
        })
    } catch (e) {
        return NextResponse.json({
            message: "An Error Occurred"
        }, {
            status: 400
        })
    }
}
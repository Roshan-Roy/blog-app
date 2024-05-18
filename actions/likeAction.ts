"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/db"

export const LikeAction = async (blogId: string, userId: string | undefined) => {
    const blog = await prisma.blog.findUnique({
        where: {
            id: blogId
        }
    })
    if (!blog) {
        revalidatePath("/")
    }
    const like = await prisma.like.findFirst({
        where: {
            userId,
            blogId
        }
    })
    if (like) {
        await prisma.like.delete({
            where: {
                id: like.id
            }
        })
        revalidatePath("/")
        return false
    }
    await prisma.like.create({
        data: {
            userId,
            blogId
        }
    })
    revalidatePath("/")
    return true
}
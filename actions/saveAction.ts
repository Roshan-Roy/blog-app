"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/db"

export const saveAction = async (blogId: string, userId: string | undefined) => {
    const blog = await prisma.blog.findUnique({
        where: {
            id: blogId
        }
    })
    if (!blog) {
        revalidatePath("/")
    }
    const saved = await prisma.save.findFirst({
        where: {
            userId,
            blogId
        }
    })
    if (saved) {
        await prisma.save.delete({
            where: {
                id: saved.id
            }
        })
        revalidatePath("/")
        return false
    }
    await prisma.save.create({
        data: {
            userId,
            blogId
        }
    })
    revalidatePath("/")
    return true
}
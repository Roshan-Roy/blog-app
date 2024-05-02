"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const updateBlog = async (title: string, content: string, blogId: string) => {
    await prisma.blog.update({
        where: {
            id: blogId
        },
        data: {
            title,
            content
        }
    })
    revalidatePath("/")
}
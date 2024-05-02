"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const deleteBlogAction = async (blogId: string) => {
    await prisma.blog.delete({
        where: {
            id: blogId
        }
    })
    revalidatePath("/")
}
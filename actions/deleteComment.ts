"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const deleteComment = async (commentId: string) => {
    const commentExists = await prisma.comment.findUnique({
        where: {
            id: commentId
        }
    })
    if (!commentExists) {
        revalidatePath("/")
    } else {
        await prisma.comment.delete({
            where: {
                id: commentId
            }
        })
        revalidatePath("/")
    }
}
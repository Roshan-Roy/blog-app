"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const addComment = async (data: string, userId: string | undefined, blogId: string) => {
   await prisma.comment.create({
      data: {
         comment: data,
         userId,
         blogId
      }
   })
   revalidatePath("/")
}
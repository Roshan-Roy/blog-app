"use server"

import { prisma } from "@/lib/db"

export const addComment = async (data: string, userId: string | undefined, blogId: string) => {
   await prisma.comment.create({
      data: {
         comment: data,
         userId,
         blogId
      }
   })
   console.log("added")
}
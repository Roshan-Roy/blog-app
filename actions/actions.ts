"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const addBlog = async (formData: FormData) => {
    try {
        await prisma.blog.create({
            data: {
                title: formData.get("title") as string,
                body: formData.get("body") as string
            }
        })
    } catch (e) {
        return {
            error: "Something went wrong"
        }
    } finally {
        revalidatePath("/")
    }
}
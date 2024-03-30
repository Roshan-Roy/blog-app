"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"


const blogSchema = z.object({
    title: z.string().trim().min(3, {
        message: "Minimum length for title is 3"
    }).max(10, {
        message: "maximum length for title is 10"
    }),
    body: z.string().trim().min(3, {
        message: "minimum length for body is 3"
    }).max(100, {
        message: "maximum length for body is 100"
    })
})

export const addBlog = async (prevState: any, formData: FormData) => {
    const result = blogSchema.safeParse({
        title: formData.get("title"),
        body: formData.get("body")
    })
    if (!result.success) {
        const field = result.error.issues[0].path[0]
        const message = result.error.issues[0].message
        if (field === "title") {
            return {
                titleError: message,
                bodyError: ""
            }
        }
        else {
            return {
                titleError: "",
                bodyError: message
            }
        }
    }
    await prisma.blog.create({
        data: { ...result.data }
    })
    revalidatePath("/")
}
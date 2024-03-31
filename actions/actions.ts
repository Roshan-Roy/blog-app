"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { blogSchema } from "@/lib/validate"

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
}
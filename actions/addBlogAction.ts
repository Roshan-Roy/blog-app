"use server"

import { prisma } from "@/lib/db"

export const addBlogAction = async ({ title, content, category, userId }: {
    title: string;
    content: string;
    category: string;
    userId: string | undefined;
}) => {
    console.log("loading")
    await prisma.blog.create({
        data: {
            title,
            content,
            category,
            userId
        }
    })
    console.log("Blog created")
}
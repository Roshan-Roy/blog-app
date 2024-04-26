"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache";

export const addBlogAction = async ({ title, content, category, userId, image }: {
    title: string;
    content: string;
    category: string;
    userId: string | undefined;
    image: string | null;
}) => {
    await prisma.blog.create({
        data: {
            title,
            content,
            category,
            userId,
            image
        }
    })
    revalidatePath("/")
}
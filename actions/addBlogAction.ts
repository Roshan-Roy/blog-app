"use server"

import { prisma } from "@/lib/db";

export const addBlogAction = async ({ title, content, category }: {
    title: string;
    content: string;
    category: string;
}) => {
   await prisma.blog.create({
    
   })
}
"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

type editProfileSchema = {
    name: string | undefined,
    about: string | undefined
}

export const editProfile = async ({ name, about }: editProfileSchema, userId: string) => {
    await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            name,
            about
        }
    })
    revalidatePath("/profile")
}
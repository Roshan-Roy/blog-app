"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

type editProfileSchema = {
    name: string | undefined,
    bio: string | undefined,
    instagram: string | undefined,
    facebook: string | undefined,
    linkedIn: string | undefined,
    whatsapp: string | undefined,
    image: string | undefined
}

export const editProfile = async ({ name, bio, instagram, facebook, linkedIn, whatsapp, image }: editProfileSchema, userId: string) => {
    await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            name,
            bio,
            instagram,
            facebook,
            linkedIn,
            whatsapp,
            image
        }
    })
    revalidatePath("/profile")
}
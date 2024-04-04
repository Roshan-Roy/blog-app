"use server"

import { prisma } from "@/lib/db"
import { hash } from "bcrypt"

export const resetPasswordAction = async (userId: string, password: string) => {
    const hashedPassword = await hash(password, 10)
    await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            password: hashedPassword,
            changePasswordToken: null
        }
    })
}
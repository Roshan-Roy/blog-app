"use server"

import { z } from "zod"
import { prisma } from "@/lib/db"

const changePasswordSchema = z.object({
    email: z.string().min(1, "Email is required").email()
})

export const changePasswordAction = async (prevState: any, formData: FormData) => {
    const errors = {
        emailError: "",
        emailMessage: ""
    }
    const validation = changePasswordSchema.safeParse({
        email: formData.get("email")
    })
    if (!validation.success) {
        const { message } = validation.error.issues[0]
        return { ...errors, emailError: message }
    }
    const user = await prisma.user.findUnique({
        where: { ...validation.data }
    })
    if (!user || !user.emailVerified) {
        return {
            emailError: "User not found",
            emailMessage: ""
        }
    }
    return { ...errors, emailMessage: "An Email is sent" }
}
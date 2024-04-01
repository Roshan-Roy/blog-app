"use server"

import { prisma } from "@/lib/db"

export const signupAction = (prevState: any, formData: FormData) => {
    return {
        emailError: "",
        passwordError: ""
    }
}
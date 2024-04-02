"use server"

import { z } from "zod"
import { hash } from "bcrypt"
import { prisma } from "@/lib/db"
import { Resend } from 'resend'
import { EmailTemplate } from '@/components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

const signUpSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(20, "Maximum 20 characters"),
    email: z.string().min(1, "Email is required").email(),
    password: z.string().min(1, "Password is required").refine(data => data.length >= 4, "minimum 4 characters required"),
    cpassword: z.string()
}).refine(data => data.password === data.cpassword, {
    message: "Passwords do not match",
    path: ["cpassword"]
})

const sendEmail = async () => {
    await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: 'roshanroy2911@gmail.com',
        subject: 'This is your email',
        react: EmailTemplate({
            heading: "Signup success",
            text: "HI there"
        }) as React.ReactElement
    })
}

export const signupAction = async (prevState: any, formData: FormData) => {
    const errors = {
        nameError: "",
        emailError: "",
        passwordError: "",
        cPasswordError: "",
        emailMessage: false
    }
    const validation = signUpSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        cpassword: formData.get("cpassword")
    })
    if (!validation.success) {
        const { message, path } = validation.error.issues[0]
        if (path[0] === "name") return { ...errors, nameError: message }
        else if (path[0] === "email") return { ...errors, emailError: message }
        else if (path[0] === "password") return { ...errors, passwordError: message }
        else return { ...errors, cPasswordError: message }
    }
    const { name, email, password } = validation.data
    const existingUser = await prisma.user.findUnique({
        where: {
            email
        }
    })
    if (existingUser) {
        if (existingUser.emailVerified)
    }
}
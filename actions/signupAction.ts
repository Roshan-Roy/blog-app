"use server"

import { hash } from "bcrypt"
import { prisma } from "@/lib/db"
import { Resend } from 'resend'
import { VerifyEmailTemplate } from "@/components/VerifyEmailTemplate"
import crypto from "crypto"

const resend = new Resend(process.env.RESEND_API_KEY)

const sendEmail = async (email: string, emailVerificationToken: string) => {
    await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: email,
        subject: 'Verify your Email',
        react: VerifyEmailTemplate({
            email,
            emailVerificationToken
        }) as React.ReactElement
    })
}

export const signupAction = async (name: string, email: string, password: string) => {
    console.log(name, email, password)
    const hashedPassword = await hash(password, 10)
    const emailVerificationToken = crypto.randomBytes(32).toString("base64url")
    const existingUser = await prisma.user.findUnique({
        where: {
            email
        }
    })
    if (existingUser) {
        if (!existingUser.emailVerified) {
            await prisma.user.update({
                where: {
                    email
                },
                data: {
                    name,
                    password: hashedPassword,
                    emailVerificationToken
                }
            })
            await sendEmail(email, emailVerificationToken)
            return true
        }
        return false
    }
    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            emailVerificationToken
        }
    })
    await sendEmail(email, emailVerificationToken)
    return true
}
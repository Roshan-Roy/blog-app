"use server"

import { prisma } from "@/lib/db"
import crypto from "crypto"
import { Resend } from "resend"
import { ChangePasswordTemplate } from "@/components/ChangePasswordTemplate"

const resend = new Resend(process.env.RESEND_API_KEY)

export const changePasswordAction = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })
    if (!user || !user.emailVerified) {
        return false
    }
    const changePasswordToken = crypto.randomBytes(32).toString("base64url")
    await prisma.user.update({
        where: {
            email
        },
        data: {
            changePasswordToken
        }
    })
    await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: email,
        subject: 'Change your Password',
        react: ChangePasswordTemplate({
            email,
            changePasswordToken
        }) as React.ReactElement
    })
    return true
}
"use server"

import { Resend } from 'resend'
import { EmailTemplate } from '@/components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async () => {
    const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: 'roshanroy2911@gmail.com',
        subject: 'This is your email',
        react: EmailTemplate({
            heading: "My Blogs",
            text: "This is from your app"
        }) as React.ReactElement
    })
    console.log(data)
}
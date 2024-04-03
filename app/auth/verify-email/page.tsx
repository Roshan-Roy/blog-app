type searchParamsType = {
    searchParams: { [key: string]: string | string[] | undefined }
}

import { prisma } from "@/lib/db"
import Link from "next/link"

const VerifyEmailPage = async ({ searchParams }: searchParamsType) => {
    const { token } = searchParams
    if (!token) {
        return <h2>No Token Provided</h2>
    }
    const user = await prisma.user.findUnique({
        where: {
            emailVerificationToken: token as string
        }
    })
    if (!user) {
        return <h1>Invalid token</h1>
    }
    await prisma.user.update({
        where: {
            emailVerificationToken: token as string
        },
        data: {
            emailVerified: true,
            emailVerificationToken: null
        }
    })
    return (
        <div>
            <h2>Email verified successfully</h2>
            <Link href="/signin" replace>Sign In</Link>
        </div>
    )
}

export default VerifyEmailPage
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/db"
import { compare } from "bcrypt"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })
                if (!user || !user.emailVerified) {
                    throw new Error("Incorrect credentials provided")
                }
                const passwordMatching = await compare(credentials?.password || "", user.password)
                if (!passwordMatching) {
                    throw new Error("Incorrect credentials provided")
                }
                return user
            }
        })
    ]
}


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
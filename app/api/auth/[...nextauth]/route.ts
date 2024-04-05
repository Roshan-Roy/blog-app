import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/db"
import { compare } from "bcrypt"

const handler = NextAuth({
    session: {
        strategy: "jwt"
    },
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
    ],
    pages:{
        signIn:"/signin"
    }
})

export { handler as GET, handler as POST }
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "./db"
import { compare } from "bcrypt"

export const authOptions: NextAuthOptions = {
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
    pages: {
        signIn: "/signin"
    },
    callbacks: {
        async jwt({ user, token, session, trigger }) {
            if (trigger === "update") {
                if (session.name)
                    token.name = session.name
                if (session.image)
                    token.picture = session.image
            }
            if (user) {
                return {
                    ...token,
                    id: user.id
                }
            }
            return token
        },
        async session({ token, session }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id
                }
            }
        }
    }
}
"use client"

import { useState } from "react"
import styles from "./form.module.css"
import { useRef } from "react"
import { signIn } from "next-auth/react"
import { z } from "zod"
import { useRouter } from "next/navigation"
import Link from "next/link"

const signinSchema = z.object({
    email: z.string().min(1, "Email is required").email(),
    password: z.string().min(1, "Password is required").refine(data => data.length >= 4, "Invalid password")
})

const SigninForm = () => {
    const router = useRouter()
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const [errors, uptErrors] = useState({
        emailError: "",
        passwordError: "",
        credentialsError: ""
    })
    const [pending, uptPending] = useState(false)
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        uptErrors({
            emailError: "",
            passwordError: "",
            credentialsError: ""
        })
        const validation = signinSchema.safeParse({
            email: email.current?.value,
            password: password.current?.value
        })
        if (!validation.success) {
            const { message, path } = validation.error.issues[0]
            if (path[0] === "email") uptErrors({
                emailError: message,
                passwordError: "",
                credentialsError: ""
            })
            else uptErrors({
                emailError: "",
                passwordError: message,
                credentialsError: ""
            })
        } else {
            uptPending(true)
            const response = await signIn("credentials", {
                ...validation.data,
                redirect: false
            })
            if (response?.error) {
                uptErrors({
                    emailError: "",
                    passwordError: "",
                    credentialsError: response.error
                })
                uptPending(false)
            } else {
                router.push("/dashboard")
                router.refresh()
            }
        }
    }
    return (
        <form onSubmit={handleFormSubmit} className={styles.form}>
            <input type="text" placeholder="Email" name="email" ref={email} />
            <p>{errors.emailError}</p>
            <input type="password" placeholder="Password" name="password" ref={password} />
            <p>{errors.passwordError}</p>
            <p>{errors.credentialsError}</p>
            <button type="submit" disabled={pending}>{pending ? "Submitting" : "Submit"}</button>
            <br /><br />
            <Link href="/auth/forgot-password">Forgot Password?</Link>
        </form>
    )
}

export default SigninForm
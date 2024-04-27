"use client"

import { resetPasswordAction } from "@/actions/resetPasswordAction"
import { z } from "zod"
import Link from "next/link"
import { useState } from "react"
import { useRef } from "react"

const resetPasswordSchema = z.object({
    password: z.string().min(1, "Password is required").refine(data => data.length >= 4, "Minimum 4 characters required"),
    cpassword: z.string()
}).refine(data => data.password === data.cpassword, {
    message: "Passwords do not match",
    path: ["cpassword"]
})

const ResetPasswordForm = ({ userId }: { userId: string }) => {
    const password = useRef<HTMLInputElement>(null)
    const cPassword = useRef<HTMLInputElement>(null)
    const [passwordChanged, uptPasswordChanged] = useState(false)
    const [errors, uptErrors] = useState({
        passwordError: "",
        cPasswordError: ""
    })
    const [pending, uptPending] = useState(false)
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const validation = resetPasswordSchema.safeParse({
            password: password.current?.value,
            cpassword: cPassword.current?.value
        })
        if (!validation.success) {
            const { message, path } = validation.error.issues[0]
            if (path[0] === "password") uptErrors({
                passwordError: message,
                cPasswordError: ""
            })
            else uptErrors({
                passwordError: "",
                cPasswordError: message,
            })
        } else {
            uptErrors({
                passwordError: "",
                cPasswordError: ""
            })
            uptPending(true)
            await resetPasswordAction(userId, validation.data.password)
            uptPasswordChanged(true)
        }
    }
    if (passwordChanged) {
        return (
            <>
                <h2>Password Changed</h2>
                <Link href="/signin">Sign In</Link>
            </>
        )
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="password" placeholder="Password" name="password" ref={password} />
            <p>{errors.passwordError}</p>
            <input type="password" placeholder="Confirm Password" name="cpassword" ref={cPassword} />
            <p>{errors.cPasswordError}</p>
            <button disabled={pending}>{pending ? "Submitting" : "Submit"}</button>
        </form>
    )
}

export default ResetPasswordForm
"use client"

import styles from "./form.module.css"
import { z } from "zod"
import { useState } from "react"
import { useRef } from "react"
import { signupAction } from "@/actions/signupAction"

const signupSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(20, "Maximum 20 characters"),
    email: z.string().min(1, "Email is required").email(),
    password: z.string().min(1, "Password is required").refine(data => data.length >= 4, "minimum 4 characters required"),
    cpassword: z.string()
}).refine(data => data.password === data.cpassword, {
    message: "Passwords do not match",
    path: ["cpassword"]
})

const SignupForm = () => {
    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const cPassword = useRef<HTMLInputElement>(null)
    const [errors, uptErrors] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
        cPasswordError: ""
    })
    const [emailSent, uptEmailSent] = useState(false)
    const [pending, uptPending] = useState(false)
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const defaultErrors = {
            nameError: "",
            emailError: "",
            passwordError: "",
            cPasswordError: ""
        }
        const validation = signupSchema.safeParse({
            name: name.current?.value,
            email: email.current?.value,
            password: password.current?.value,
            cpassword: cPassword.current?.value
        })
        if (!validation.success) {
            const { message, path } = validation.error.issues[0]
            if (path[0] === "name") uptErrors({ ...defaultErrors, nameError: message })
            else if (path[0] === "email") uptErrors({ ...defaultErrors, emailError: message })
            else if (path[0] === "password") uptErrors({ ...defaultErrors, passwordError: message })
            else uptErrors({ ...defaultErrors, cPasswordError: message })
        } else {
            uptPending(true)
            uptEmailSent(false)
            uptErrors({ ...defaultErrors })
            const { name, email, password } = validation.data
            const response = await signupAction(name, email, password)
            if (!response) {
                uptErrors({ ...defaultErrors, emailError: "User already exists" })
                uptPending(false)
            } else {
                uptEmailSent(true)
                uptPending(false)
            }
        }
    }
    return (
        <form onSubmit={handleFormSubmit} className={styles.form}>
            <input type="name" placeholder="Name" name="name" ref={name} />
            <p>{errors.nameError}</p>
            <input type="text" placeholder="Email" name="email" ref={email} />
            <p>{errors.emailError}</p>
            <input type="password" placeholder="Password" name="password" ref={password} />
            <p>{errors.passwordError}</p>
            <input type="password" placeholder="Confirm Password" name="cpassword" ref={cPassword} />
            <p>{errors.cPasswordError}</p>
            <button disabled={pending}>{pending ? "Submitting" : "Submit"}</button>
            <p>{emailSent && "An Email is sent"}</p>
        </form>
    )
}

export default SignupForm
"use client"

import styles from "./form.module.css"
import { signupAction } from "@/actions/authActions"
import { useFormState } from "react-dom"

const initialState = {
    emailError: "",
    passwordError: ""
}

const SignupForm = () => {
    const [state, formAction] = useFormState(signupAction, initialState)
    return (
        <form action={formAction} className={styles.form}>
            <input type="text" placeholder="Email" name="email" />
            <br />
            {state?.emailError && <p>{state.emailError}</p>}
            <input type="password" placeholder="Password" name="password" />
            <br />
            {state?.passwordError && <p>{state.passwordError}</p>}
            <button type="submit">Signup</button>
        </form>
    )
}

export default SignupForm
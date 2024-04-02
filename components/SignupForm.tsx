"use client"

import styles from "./form.module.css"
import { signupAction } from "@/actions/authActions"
import { useFormState } from "react-dom"
import SignupBtn from "./SignupBtn"

const initialState = {
    nameError: "",
    emailError: "",
    passwordError: "",
    cPasswordError: "",
    emailMessage: false
}

const SignupForm = () => {
    const [state, formAction] = useFormState(signupAction, initialState)
    return (
        <form action={formAction} className={styles.form}>
            <input type="name" placeholder="Name" name="name" />
            {<p>{state.nameError}</p>}
            <input type="text" placeholder="Email" name="email" />
            {<p>{state.emailError}</p>}
            <input type="password" placeholder="Password" name="password" />
            {<p>{state.passwordError}</p>}
            <input type="password" placeholder="Confirm Password" name="cpassword" />
            {<p>{state.cPasswordError}</p>}
            <SignupBtn/>
            {<p>{state.emailMessage && "An Email has been sent"}</p>}
        </form>
    )
}

export default SignupForm
"use client"

import styles from "./form.module.css"

const SigninForm = () => {
    return (
        <form className={styles.form}>
            <input type="text" placeholder="Email" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <button type="submit">SignIn</button>
        </form>
    )
}

export default SigninForm
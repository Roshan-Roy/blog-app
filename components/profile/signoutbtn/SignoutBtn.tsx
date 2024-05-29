"use client"

import { signOut } from "next-auth/react"
import styles from "./signoutbtn.module.css"
import { useState } from "react"
import Spinner from "./spinner/Spinner"

const SignoutBtn = () => {
    const [loading, uptLoading] = useState(false)
    const handleBtnClick = () => {
        uptLoading(true)
        signOut()
    }
    return (
        <div className={styles.container}>
            <button disabled={loading} className={loading ? styles.disabled : undefined} onClick={handleBtnClick}>Log out</button>
            {loading && <Spinner />}
        </div>
    )
}

export default SignoutBtn
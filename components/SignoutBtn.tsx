"use client"

import { signOut } from "next-auth/react"

const SignoutBtn = () => {
    const handleBtnClick = () => {
       signOut()
    }
    return (
        <button onClick={handleBtnClick}>Log out</button>
    )
}

export default SignoutBtn
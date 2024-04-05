"use client"

import Link from "next/link"
import styles from "./navbar.module.css"

const Navbar = async () => {
    return (
        <div className={styles.container}>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/signin">Signin</Link>
            <Link href="/signup">Signup</Link>
        </div>
    )
}

export default Navbar
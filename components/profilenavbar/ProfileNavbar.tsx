"use client"

import styles from "./profilenavbar.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"

const ProfileNavbar = () => {
    const pathName = usePathname()
    return (
        <div className={styles.container}>
            <Link className={pathName==="/profile/blogs" ? styles.active : undefined} href="/profile/blogs">Blogs</Link>
            <button>+</button>
            <Link className={pathName==="/profile/saved" ? styles.active : undefined} href="/profile/saved">Saved</Link>
        </div>
    )
}

export default ProfileNavbar
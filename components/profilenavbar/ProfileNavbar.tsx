"use client"

import styles from "./profilenavbar.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import AddBlog from "../addblog/AddBlog"
import AddBlogBtnProfile from "../addBlogBtnProfile/AddBlogBtnProfile"

const ProfileNavbar = () => {
    const pathName = usePathname()
    return (
        <div className={styles.container}>
            <Link className={pathName === "/profile/blogs" ? styles.active : undefined} href="/profile/blogs">Blogs</Link>
            <AddBlog>
                <AddBlogBtnProfile />
            </AddBlog>
            <Link className={pathName === "/profile/saved" ? styles.active : undefined} href="/profile/saved">Saved</Link>
        </div>
    )
}

export default ProfileNavbar
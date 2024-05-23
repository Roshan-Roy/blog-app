"use client"

import styles from "./profilenavbar.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import AddBlog from "@/components/addblog/AddBlog"
import AddBlogBtnProfile from "@/components/addblogbtnprofile/AddBlogBtnProfile"


const ProfileNavbar = () => {
    const pathName = usePathname()
    return (
        <div className={styles.container}>
            <Link className={pathName === "/myprofile/blogs" ? styles.active : undefined} href="/myprofile/blogs">Blogs</Link>
            <AddBlog>
                <AddBlogBtnProfile/>
            </AddBlog>
            <Link className={pathName === "/myprofile/saved" ? styles.active : undefined} href="/myprofile/saved">Saved</Link>
        </div>
    )
}

export default ProfileNavbar
"use client"

import styles from "./save.module.css"
import Spinner from "./spinner/Spinner"
import { GoBookmark } from "react-icons/go"
import { GoBookmarkFill } from "react-icons/go"
import { useState } from "react"
import { saveAction } from "@/actions/saveAction"

const Save = ({ userId, blogId, savedOrNot }: {
    userId: string | undefined;
    blogId: string;
    savedOrNot: boolean;
}) => {
    const [saved, uptSaved] = useState(savedOrNot)
    const [loading, uptLoading] = useState(false)
    const handleClick = async () => {
        uptLoading(true)
        const response = await saveAction(blogId, userId)
        uptSaved(response)
        uptLoading(false)
    }
    return (
        <div className={saved ? `${styles.container} ${styles.saved}` : styles.container} onClick={handleClick}>
            {loading ? <Spinner dark={saved} /> : saved ? <GoBookmarkFill className={styles.heart} /> : <GoBookmark />}
        </div>
    )
}

export default Save
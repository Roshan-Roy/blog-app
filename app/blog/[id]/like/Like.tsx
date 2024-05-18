"use client"

import { LikeAction } from "@/actions/likeAction"
import { useState } from "react"
import { GoHeartFill } from "react-icons/go"
import { GoHeart } from "react-icons/go"
import styles from "./like.module.css"
import Spinner from "./spinner/Spinner"

const Like = ({ userId, blogId, likedOrNot }: {
    userId: string | undefined;
    blogId: string;
    likedOrNot: boolean;
}) => {
    const [liked, uptLiked] = useState(likedOrNot)
    const [loading, uptLoading] = useState(false)
    const handleClick = async () => {
        uptLoading(true)
        const response = await LikeAction(blogId, userId)
        uptLiked(response)
        uptLoading(false)
    }
    return (
        <div className={liked ? `${styles.container} ${styles.liked}` : styles.container} onClick={handleClick}>
            {loading ? <Spinner pink={liked}/> : liked ? <GoHeartFill className={styles.heart} /> : <GoHeart />}
        </div>
    )
}

export default Like
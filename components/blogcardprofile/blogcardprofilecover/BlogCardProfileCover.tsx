import React from 'react'
import styles from "./blogcardprofilecover.module.css"
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"

type BlogType = {
    title: string;
    content: string;
    category: string;
    createdAt: Date;
}

const BlogCardProfileCover = ({
    title,
    content,
    category,
    createdAt
}: BlogType) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src="/profile/fam.jpg" alt="cover-image" objectFit="cover" fill unoptimized />
                <p className={styles.category}>Family</p>
            </div>
            <p className={styles.date}>02 May 2024</p>
            <h2>This is the title</h2>
            <p className={styles.description}>This is the content inside the specified blog with title above the overflow thing is almost done now yeah !!!</p>
            <div className={styles.footer}>
                <div className={styles.readmore_btn}>
                    <button>Read More</button>
                    <FaArrowRight />
                </div>
                <p className={styles.landc}>23 Likes, 35 Comments</p>
            </div>
        </div>
    )
}

export default BlogCardProfileCover
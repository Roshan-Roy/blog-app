import React from 'react'
import styles from "./blogcardprofilenocover.module.css"
import { FaArrowRight } from "react-icons/fa6"
import formatDate from '@/lib/fomatDate'

type BlogType = {
    title: string;
    content: string;
    category: string;
    createdAt: Date;
}

const BlogCardProfileNoCover = ({
    title,
    content,
    category,
    createdAt
}: BlogType) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.date}>{formatDate(createdAt)}</p>
                <p className={styles.category}>{category}</p>
            </div>
            <h2>{title}</h2>
            <p className={styles.description}>{content}</p>
            <div className={styles.footer}>
                <div className={styles.readmore_btn}>
                    <button>Read More</button>
                    <FaArrowRight />
                </div>
                <p className={styles.landc}>
                    23 Likes, 35 Comments
                </p>
            </div>
        </div >
    )
}

export default BlogCardProfileNoCover
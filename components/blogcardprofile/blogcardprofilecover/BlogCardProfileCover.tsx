import React from 'react'
import styles from "./blogcardprofilecover.module.css"
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"
import formatDate from '@/lib/fomatDate'

type BlogType = {
    title: string;
    content: string;
    category: string;
    createdAt: Date;
    image: string | null
}

const BlogCardProfileCover = ({
    title,
    content,
    category,
    createdAt,
    image
}: BlogType) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src={image as string} alt="featured-image" objectFit="cover" fill unoptimized />
                <p className={styles.category}>{category}</p>
            </div>
            <p className={styles.date}>{formatDate(createdAt)}</p>
            <h2>{title}</h2>
            <p className={styles.description}>{content}</p>
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
import React from 'react'
import styles from "./blogcardnocover.module.css"
import { FaArrowRight } from "react-icons/fa6"
import formatDate from '@/lib/fomatDate'
import Link from 'next/link'

type BlogType = {
    id: string;
    title: string;
    name: string;
    content: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
    noOfComments: number | undefined;
    noOfLikes: number | undefined;
}

const BlogCardNoCover = ({
    id,
    title,
    name,
    content,
    category,
    createdAt,
    updatedAt,
    noOfComments,
    noOfLikes
}: BlogType) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.category}>{category}</p>
            </div>
            <div className={styles.dates}>
                <p className={styles.date}>Published On : {formatDate(createdAt)}</p>
                <p className={styles.date}>Last Updated : {formatDate(updatedAt)}</p>
            </div>
            <p className={styles.author}>By {name}</p>
            <h2>{title}</h2>
            <p className={styles.description}>{content}</p>
            <div className={styles.footer}>
                <Link className={styles.readmore_btn} href={`/blogs/${id}`}>
                    <button>Read Post</button>
                    <FaArrowRight />
                </Link>
                <p className={styles.landc}>
                    {noOfLikes} Likes, {noOfComments} Comments
                </p>
            </div>
        </div >
    )
}

export default BlogCardNoCover
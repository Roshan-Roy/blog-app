import React from 'react'
import styles from "./blogcardprofilenocover.module.css"
import { FaArrowRight } from "react-icons/fa6"
import formatDate from '@/lib/fomatDate'
import DeleteBtn from './deletebtn/DeleteBtn'
import EditBtn from './editbtn/EditBtn'

type BlogType = {
    id: string;
    title: string;
    content: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
}

const BlogCardProfileNoCover = ({
    id,
    title,
    content,
    category,
    createdAt,
    updatedAt
}: BlogType) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.dlt_edit}>
                    <DeleteBtn blogId={id} />
                    <EditBtn title={title} content={content} blogId={id} />
                </div>
                <p className={styles.category}>{category}</p>
            </div>
            <div className={styles.dates}>
                <p className={styles.date}>Published On : {formatDate(createdAt)}</p>
                <p className={styles.date}>Last Updated : {formatDate(updatedAt)}</p>
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
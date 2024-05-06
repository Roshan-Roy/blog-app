import React from 'react'
import styles from "./blogcardprofilecover.module.css"
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"
import formatDate from '@/lib/fomatDate'
import DeleteBtn from './deletebtn/DeleteBtn'
import EditBtn from './editbtn/EditBtn'
import Link from 'next/link'

type BlogType = {
    id: string;
    title: string;
    content: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
    image: string | null;
    imagePublicId: string | null;
}

const BlogCardProfileCover = ({
    id,
    title,
    content,
    category,
    createdAt,
    updatedAt,
    image,
    imagePublicId
}: BlogType) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src={image as string} alt="featured-image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill />
                <div className={styles.dlt_edit}>
                    <DeleteBtn blogId={id} imagePublicId={imagePublicId as string} />
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
                <Link className={styles.readmore_btn} href={`/blog/${id}`}>
                    <button>Read Post</button>
                    <FaArrowRight />
                </Link>
                <p className={styles.landc}>23 Likes, 35 Comments</p>
            </div>
        </div>
    )
}

export default BlogCardProfileCover
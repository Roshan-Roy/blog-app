import React from 'react'
import styles from "./blogcardprofilecover.module.css"
import Image from 'next/image'
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
    image: string;
    imagePublicId: string;
}

const BlogCardProfileCover = ({
    id,
    title,
    content,
    category,
    createdAt,
    image,
    imagePublicId
}: BlogType) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src={image} alt="featured-image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill />
                <div className={styles.dlt_edit}>
                    <DeleteBtn blogId={id} imagePublicId={imagePublicId} />
                    <EditBtn />
                </div>
                <p className={styles.category}>{category}</p>
            </div>
            <div className={styles.dates}>
                <p className={styles.date}>Published On : {formatDate(createdAt)}</p>
                <p className={styles.date}>Last Updated : {formatDate(createdAt)}</p>
            </div>
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
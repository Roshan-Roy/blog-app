import React from 'react'
import styles from "./blogcardprofilenocover.module.css"
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"

const BlogCardProfileNoCover = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.date}>02 May 2024</p>
                <p className={styles.category}>Personal devlopment</p>
            </div>
            <h2>This is the title</h2>
            <p className={styles.description}>This is the content inside the specified blog with title above the overflow thing is almost done now yeah !!!
            This is the content</p>
            <div className={styles.footer}>
                <div className={styles.readmore_btn}>
                    <button>Read More</button>
                    <FaArrowRight />
                </div>
                <div className={styles.landc}>
                    <p>23 Likes, 35 Comments</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCardProfileNoCover
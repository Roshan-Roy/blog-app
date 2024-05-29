import styles from "./blogleftprofileskeleton.module.css"

const BlogLeftProfileSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}></div>
            <div className={styles.details}>
                <div className={styles.name}></div>
                <div className={styles.author}></div>
            </div>
        </div>
    )
}

export default BlogLeftProfileSkeleton
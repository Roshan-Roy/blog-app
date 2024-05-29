import styles from "./commentskeleton.module.css"

const CommentSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ni_container}>
                <div className={styles.image}></div>
                <div className={styles.name}></div>
            </div>
            <div className={styles.comments}>
                <div></div>
                <div></div>
            </div>
            <div className={styles.date_container}>
                <div></div>
            </div>
        </div>
    )
}

export default CommentSkeleton
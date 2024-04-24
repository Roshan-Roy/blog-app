import styles from "./profileblogskeleton.module.css"

const ProfileBlogSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <p className={styles.category}></p>
            </div>
            <p className={styles.date}></p>
            <h2></h2>
            <p className={styles.description}></p>
            <div className={styles.footer}>
                <button></button>
                <p></p>
            </div>
        </div>
    )
}

export default ProfileBlogSkeleton
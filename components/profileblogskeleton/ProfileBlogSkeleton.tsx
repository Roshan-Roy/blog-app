import styles from "./profileblogskeleton.module.css"

const ProfileBlogSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <div className={styles.dlt_edit}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.category}></div>
            </div>
            <div className={styles.date}></div>
            <div className={styles.heading}></div>
            <p className={styles.description}></p>
            <div className={styles.footer}>
                <div className={styles.btn}></div>
                <div className={styles.landc}></div>
            </div>
        </div>
    )
}

export default ProfileBlogSkeleton
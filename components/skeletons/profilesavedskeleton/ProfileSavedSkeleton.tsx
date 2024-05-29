import styles from "./profilesavedskeleton.module.css"

const ProfileSavedSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <div className={styles.category}></div>
            </div>
            <div className={styles.date}></div>
            <div className={styles.heading}></div>
            <div className={styles.description}></div>
            <div className={styles.footer}>
                <div className={styles.btn}></div>
                <div className={styles.landc}></div>
            </div>
        </div>
    )
}

export default ProfileSavedSkeleton
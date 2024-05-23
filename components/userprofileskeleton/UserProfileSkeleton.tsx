import styles from "./userprofileskeleton.module.css"

const UserProfileSkeleton = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.profile_pic}></div>
                    <div className={styles.details_one}>
                        <div className={styles.name}></div>
                        <div className={styles.email}></div>
                        <div className={styles.bio}>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className={styles.details_two}>
                        <div className={styles.countboard_container}>
                            <div className={styles.countboard}>
                                <div></div>
                                <div></div>
                            </div>
                            <div className={styles.countboard}>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className={styles.links}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.header}>
                <div></div>
            </div>
        </>
    )
}

export default UserProfileSkeleton
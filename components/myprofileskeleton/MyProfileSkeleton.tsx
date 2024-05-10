import styles from "./myprofileskeleton.module.css"

const MyProfileSkeleton = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.profile_pic}></div>
                    <div className={styles.details_one}>
                        <div className={styles.name}></div>
                        <div className={styles.bio}>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={styles.links}>
                            <div></div>
                            <div></div>
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
                        <div className={styles.button}></div>
                    </div>
                </div>
            </div>
            <div className={styles.nav_container}>
                <div className={styles.link}></div>
                <div className={styles.add_btn}></div>
                <div className={styles.link}></div>
            </div>
        </>
    )
}

export default MyProfileSkeleton
import ProfileBlogSkeleton from "@/components/profileblogskeleton/ProfileBlogSkeleton"
import styles from "./page.module.css"

const Loading = () => {
    return (
        <div className={styles.container}>
            <ProfileBlogSkeleton />
            <ProfileBlogSkeleton />
            <ProfileBlogSkeleton />
        </div>
    )
}

export default Loading
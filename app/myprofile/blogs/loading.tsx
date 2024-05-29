import ProfileBlogSkeleton from "@/components/skeletons/profileblogskeleton/ProfileBlogSkeleton"
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
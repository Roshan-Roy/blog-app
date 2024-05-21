import styles from "./loading.module.css"
import BlogLeftProfileSkeleton from "@/components/blogleftprofileskeleton/BlogLeftProfileSkeleton"
import CommentSkeleton from "@/components/comment_skeleton/CommentSkeleton"

const Loading = () => {
    return (
        <>
            <div className={styles.headers_wrapper}>
                <div className={styles.headers_container}>
                    <div className={styles.content_header}>
                        <BlogLeftProfileSkeleton />
                        <div className={styles.landc}>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className={styles.comment_header}>
                        <div className={styles.comment_heading}></div>
                        <div className={styles.comment_count}></div>
                    </div>
                </div>
            </div>
            <div className={styles.body_container}>
                <div className={styles.content_body}>
                    <div className={styles.category}></div>
                    <div className={styles.title}></div>
                    <div className={styles.image}></div>           
                    <div className={styles.content}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.dates}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className={styles.comment_body}>
                    <div className={styles.addcomment}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.comments_container}>
                      <CommentSkeleton/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading
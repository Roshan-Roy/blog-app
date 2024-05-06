import styles from "./page.module.css"

const Blog = ({ params }: {
  params: any
}) => {
  return (
    <>
      <div className={styles.headers_wrapper}>
        <div className={styles.headers_container}>
          <div className={styles.content_header}>

          </div>
          <div className={styles.comment_header}>

          </div>
        </div>
      </div>
      <div className={styles.body_container}>
        <div className={styles.content_body}>

        </div>
        <div className={styles.comment_body}>

        </div>
      </div>
    </>
  )
}

export default Blog
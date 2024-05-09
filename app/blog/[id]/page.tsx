import styles from "./page.module.css"
import Image from "next/image"
import { prisma } from "@/lib/db"
import formatDate from "@/lib/fomatDate"
import AddComment from "@/components/addcomment/AddComment"
import Comment from "@/components/comment/Comment"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { Suspense } from "react"

const Blog = async ({ params }: {
  params: any
}) => {
  const session = await getServerSession(authOptions)
  const blog = await prisma.blog.findUnique({
    where: {
      id: params.id
    },
    include: {
      comments: true
    }
  })
  console.log(blog)
  if (!blog) {
    return <h1>No Blog found</h1>
  }

  return (
    <>
      <div className={styles.headers_wrapper}>
        <div className={styles.headers_container}>
          <div className={styles.content_header}>

          </div>
          <div className={styles.comment_header}>
            <p>Comments</p>
            <p>{blog.comments.length}</p>
          </div>
        </div>
      </div>
      <div className={styles.body_container}>
        <div className={styles.content_body}>
          <p className={styles.category}>{blog.category}</p>
          <h1 className={styles.title}>{blog.title}</h1>
          {blog.image && <div className={styles.image}>
            <Image src={blog.image} alt="Featured Image" fill />
          </div>
          }
          <p className={styles.content}>{blog.content}</p>
          <div className={styles.dates}>
            <p>Published On : {formatDate(blog.createdAt)}</p>
            <p>Last Updated : {formatDate(blog.updatedAt)}</p>
          </div>
        </div>
        <div className={styles.comment_body}>
          <AddComment userId={session?.user.id} blogId={blog.id} />
          <div className={styles.comments_container}>
            {blog.comments.filter(e => session?.user.id === e.userId).map(e => <Suspense key={e.id} fallback={<p>Loading...</p>}><Comment {...e} deleteBtn={true} /></Suspense>)}
            {blog.comments.filter(e => session?.user.id !== e.userId).map(e => <Suspense key={e.id} fallback={<p>Loading...</p>}><Comment {...e} deleteBtn={false} /></Suspense>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
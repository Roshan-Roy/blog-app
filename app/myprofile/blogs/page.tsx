import styles from "./page.module.css"
import { prisma } from "@/lib/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import BlogCardProfileCover from "@/components/blogcardprofile/blogcardprofilecover/BlogCardProfileCover"
import BlogCardProfileNoCover from "@/components/blogcardprofile/blogcardprofilenocover/BlogCardProfileNoCover"
import { BsPostcard } from "react-icons/bs"

const BlogsPage = async () => {
  const session = await getServerSession(authOptions)
  const blogs = await prisma.blog.findMany({
    where: {
      userId: session?.user.id
    },
    include: {
      comments: true,
      likes: true
    }
  })
  if (blogs.length === 0) return (
    <div className={styles.no_blogs_container}>
      <div className={styles.no_blogs}>
          <BsPostcard />
          <h2>No Blogs Yet</h2>
          <p>Click &apos; + &apos; To Create Your First Blog </p>
      </div>
    </div>
  )
  return (
    <div className={styles.container}>
      {
        blogs.map(e => {
          if (e.image) return <BlogCardProfileCover key={e.id} noOfLikes={e.likes.length} noOfComments={e.comments.length} {...e} />
          return <BlogCardProfileNoCover key={e.id} noOfLikes={e.likes.length} noOfComments={e.comments.length} {...e} />
        })
      }
    </div>
  )
}

export default BlogsPage
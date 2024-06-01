import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"
import BlogCardCover from "@/components/blogcard/blogcardcover/BlogCardCover"
import BlogCardNoCover from "@/components/blogcard/blogcardnocover/BlogCardNoCover"
import styles from "./page.module.css"

const Blogs = async () => {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/signin")
  const blogs = await prisma.blog.findMany({
    orderBy: [
      {
        createdAt: "desc"
      }
    ],
    include: {
      likes: true,
      comments: true,
      User: true
    }
  })
  console.log(blogs)
  return (
    <div className={styles.container}>
      {
        blogs.map(e => {
          if (e.image) return <BlogCardCover key={e.id} noOfLikes={e.likes.length} noOfComments={e.comments.length} name={e.User?.name as string} {...e} />
          return <BlogCardNoCover key={e.id} noOfLikes={e.likes.length} noOfComments={e.comments.length} name={e.User?.name as string} {...e} />
        })
      }
    </div>
  )
}

export default Blogs
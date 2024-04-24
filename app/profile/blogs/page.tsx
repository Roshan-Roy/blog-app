import styles from "./page.module.css"
import { prisma } from "@/lib/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import BlogCardProfileCover from "@/components/blogcardprofile/blogcardprofilecover/BlogCardProfileCover"
import BlogCardProfileNoCover from "@/components/blogcardprofile/blogcardprofilenocover/BlogCardProfileNoCover"

const BlogsPage = async () => {
  const session = await getServerSession(authOptions)
  const blogs = await prisma.blog.findMany({
    where: {
      userId: session?.user.id
    }
  })
  console.log(blogs)
  return (
    <div className={styles.container}>
      {
        blogs.map(e => {
          if (e.image) return <BlogCardProfileCover {...e} />
          return <BlogCardProfileNoCover {...e} />
        })
      }
    </div>
  )
}

export default BlogsPage
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
    }
  })
  if (blogs.length === 0) return (
    <div className={styles.no_blogs_container}>
      <div className={styles.no_blogs}>
        <div>
          <BsPostcard />
          <h2>No Blogs Yet</h2>
          <p>Click ' + ' To Create Your First Blog </p>
        </div>
      </div>
    </div>
  )
  return (
    <div className={styles.container}>
      {
        blogs.map((e, i) => {
          if (e.image) return <BlogCardProfileCover key={`${i}${e.title}`} {...e} />
          return <BlogCardProfileNoCover key={`${i}${e.title}`} {...e} />
        })
      }
    </div>
  )
}

export default BlogsPage
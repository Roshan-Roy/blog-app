import { prisma } from "@/lib/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import styles from "./page.module.css"
import BlogCardCover from "@/components/blogcard/blogcardcover/BlogCardCover"
import BlogCardNoCover from "@/components/blogcard/blogcardnocover/BlogCardNoCover"
import { GoBookmarkSlash } from "react-icons/go"

const SavedPage = async () => {
  const session = await getServerSession(authOptions)
  const saved = await prisma.save.findMany({
    where: {
      userId: session?.user.id
    },
    include: {
      Blog: {
        include: {
          User: true,
          likes: true,
          comments: true
        }
      }
    }
  })
  if (saved.length === 0) return (
    <div className={styles.no_blogs_container}>
      <div className={styles.no_blogs}>
        <GoBookmarkSlash />
        <h2>No Saved Blogs Yet</h2>
      </div>
    </div>
  )

  return (
    <div className={styles.container}>
      {
        saved.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).map(e => {
          if (e.Blog?.image && e.Blog.User) return <BlogCardCover key={e.id} noOfLikes={e.Blog.likes.length} noOfComments={e.Blog.comments.length} name={e.Blog.User.name} {...e.Blog} />
          else if (e.Blog && e.Blog.User) return <BlogCardNoCover key={e.id} noOfLikes={e.Blog.likes.length} noOfComments={e.Blog.comments.length} name={e.Blog.User.name} {...e.Blog} />
        })
      }
    </div>
  )
}

export default SavedPage
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"
import BlogCardCover from "@/components/blogcard/blogcardcover/BlogCardCover"
import BlogCardNoCover from "@/components/blogcard/blogcardnocover/BlogCardNoCover"

const Blogs = async () => {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/signin")
  const blogs = await prisma.blog.findMany({
    orderBy: [
      {
        createdAt: "desc"
      }
    ]
  })
  console.log(blogs)
  return (
    <p>Blogs</p>
  )
}

export default Blogs
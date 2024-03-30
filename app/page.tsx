import TodoComponent from "@/components/TodoComponent"
import { prisma } from "@/lib/db"
import Link from "next/link"

const Home = async () => {
  const blogs = await prisma.blog.findMany()
  return (
    <>
      <h2>Blog App</h2>
      <Link href="/about">About</Link>
      <TodoComponent blogs={blogs} />
    </>
  )
}

export default Home
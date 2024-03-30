import TodoComponent from "@/components/TodoComponent"
import { prisma } from "@/lib/db"

const Home = async () => {
  const blogs = await prisma.blog.findMany()
  return (
    <>
      <h2>Blog App</h2>
      <TodoComponent blogs={blogs} />
    </>
  )
}

export default Home
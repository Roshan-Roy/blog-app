import TodoComponent from "@/components/TodoComponent"
import { prisma } from "@/lib/db"

const getData = async() => {
  try{
    const blogs = await prisma.blog.findMany()
    return blogs
  }catch(e){
    throw new Error("something went wrong")
  }

}
const Home = async () => {
  const data = await getData()
  return (
    <>
      <h2>Blog App</h2>
      <TodoComponent blogs={data} />
    </>
  )
}

export default Home
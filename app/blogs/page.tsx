import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"

const Blogs = async () => {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/signin")
  return (
    <>
      <div>All blogs</div>
    </>
  )
}

export default Blogs
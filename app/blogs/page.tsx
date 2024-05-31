import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"

const Blogs = async () => {
  const session = await getServerSession(authOptions)
  console.log(session)
  if (!session) redirect("/signin")
  return (
    <p>{JSON.stringify(session)}</p>
  )
}

export default Blogs
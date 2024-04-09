import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"

const Dashboard = async () => {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/signin")
  return (
    <>
      <div>Dashboard</div>
      {JSON.stringify(session)}
    </>
  )
}

export default Dashboard
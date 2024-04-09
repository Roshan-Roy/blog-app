import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


const Dashboard = async () => {
  const session = await getServerSession()
  if (!session) redirect("/signin")
  return (
    <>
      <div>Dashboard</div>
      {JSON.stringify(session)}
    </>
  )
}

export default Dashboard
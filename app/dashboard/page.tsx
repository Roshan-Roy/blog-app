import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import SignoutBtn from "@/components/SignoutBtn"

const Dashboard = async () => {
  const session = await getServerSession(authOptions)
  return (
    <>
      <p>{JSON.stringify(session)}</p>
      <div>Dashboard</div>
      <SignoutBtn/>
    </>
  )
}

export default Dashboard
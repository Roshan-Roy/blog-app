import { getServerSession } from "next-auth"
import SignoutBtn from "@/components/SignoutBtn"

const Dashboard = async () => {
  const session = await getServerSession()
  return (
    <>
      <p>{JSON.stringify(session)}</p>
      <div>Dashboard</div>
      <SignoutBtn/>
    </>
  )
}

export default Dashboard
import SignupForm from "@/components/SignupForm"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const Signup = async () => {
  const session = await getServerSession()
  if (session) redirect("/")
  return (
    <div>
      <h2>Signup</h2>
      <SignupForm />
    </div>
  )
}

export default Signup
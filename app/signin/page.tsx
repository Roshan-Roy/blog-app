import SigninForm from "@/components/SigninForm"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const Signin = async () => {
  const session = await getServerSession()
  if (session) redirect("/")
  return (
    <div>
      <h2>SignIn</h2>
      <SigninForm />
    </div>
  )
}

export default Signin
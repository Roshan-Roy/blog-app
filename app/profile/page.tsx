import SignoutBtn from "@/components/SignoutBtn"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"

const ProfilePage = async () => {
    const session = await getServerSession(authOptions)
    if (!session) redirect("/")
    return (
        <>
            <p>{JSON.stringify(session)}</p>
            <SignoutBtn />
        </>
    )
}

export default ProfilePage
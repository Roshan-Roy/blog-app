import SignoutBtn from "@/components/SignoutBtn"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const ProfilePage = async () => {
    const session = await getServerSession()
    if (!session) redirect("/signin")
    return (
        <>
            <p>{JSON.stringify(session)}</p>
            <SignoutBtn />
        </>
    )
}

export default ProfilePage
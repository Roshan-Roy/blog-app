import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import Profile from "@/components/profile/Profile"
import { Suspense } from "react"

const ProfilePage = async () => {
    const session = await getServerSession(authOptions)
    if (!session) redirect("/")
    return (
        <div>
            <Suspense fallback={<p>Loading</p>}>
                <Profile userId={session.user.id} />
            </Suspense>
        </div>
    )
}

export default ProfilePage
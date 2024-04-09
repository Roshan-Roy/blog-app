import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import Profile from "@/components/profile/Profile"
import { Suspense } from "react"
import styles from "./page.module.css"
import Spinner from "@/components/spinner/Spinner"

const ProfilePage = async () => {
    const session = await getServerSession(authOptions)
    if (!session) redirect("/")
    return (
        <>
            <Suspense fallback={
                <div className={styles.profile_suspense}>
                    <Spinner />
                </div>
            }>
                <Profile userId={session.user.id} />
            </Suspense>
        </>
    )
}

export default ProfilePage
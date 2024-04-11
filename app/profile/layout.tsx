import { Suspense } from "react"
import Profile from "@/components/profile/Profile"
import styles from "./page.module.css"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import Spinner from "@/components/spinner/Spinner"
import { redirect } from "next/navigation"

const layout = async ({ children }: { children: React.ReactNode }) => {
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
            {children}
        </>
    )
}

export default layout
import { Suspense } from "react"
import Profile from "@/components/profile/Profile"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import MyProfileSkeleton from "@/components/myprofileskeleton/MyProfileSkeleton"

const layout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession(authOptions)
    if (!session) redirect("/")
    return (
        <>
            <Suspense fallback={<MyProfileSkeleton/>}>
                <Profile userId={session.user.id} />
            </Suspense>
            {children}
        </>
    )
}

export default layout
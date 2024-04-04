import ChangePasswordFrom from "@/components/ChangePasswordFrom"
import ResetPasswordForm from "@/components/ResetPasswordForm"
import { prisma } from "@/lib/db"

type searchParamsType = {
    searchParams: { [key: string]: string | string[] | undefined }
}

const ForgotPasswordPage = async ({ searchParams }: searchParamsType) => {
    const { token } = searchParams
    if (token) {
        const user = await prisma.user.findFirst({
            where: {
                changePasswordToken: token as string
            }
        })
        if (!user) {
            return <h2>Invalid Token</h2>
        }
        return <ResetPasswordForm userId={user.id}/>
    }
    return <ChangePasswordFrom />
}

export default ForgotPasswordPage
import ChangePasswordFrom from "@/components/ChangePasswordFrom"

type searchParamsType = {
    searchParams: { [key: string]: string | string[] | undefined }
}

const ForgotPasswordPage = ({ searchParams }: searchParamsType) => {
    return <ChangePasswordFrom/>
}

export default ForgotPasswordPage
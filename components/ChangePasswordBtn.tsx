import { useFormStatus } from "react-dom"

const ChangePasswordBtn = () => {
    const { pending } = useFormStatus()
    return (
        <button disabled={pending}>{pending ? "Submitting" : "submit"}</button>
    )
}

export default ChangePasswordBtn
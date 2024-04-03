import { useFormStatus } from "react-dom"

const ChangePasswordBtn = () => {
    const { pending } = useFormStatus()
    return (
        <button>{pending ? "Submitting" : "submit"}</button>
    )
}

export default ChangePasswordBtn
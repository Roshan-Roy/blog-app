import { useFormStatus } from "react-dom"

const SignupBtn = () => {
    const { pending } = useFormStatus()
    return <button disabled={pending}>{pending ? "Creating account" : "Submit"}</button>
}

export default SignupBtn
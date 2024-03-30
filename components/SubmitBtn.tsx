"use client"

import { useFormStatus } from "react-dom"

const SubmitBtn = () => {
    const { pending } = useFormStatus()
    return (
        <button type="submit">{pending ? "Submitting" : "Submit"}</button>
    )
}

export default SubmitBtn
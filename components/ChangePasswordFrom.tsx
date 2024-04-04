"use client"

import { z } from "zod"
import { useRef } from "react"
import { useState } from "react"
import { changePasswordAction } from "@/actions/changePasswordAction"

const changePasswordSchema = z.object({
  email: z.string().min(1, "Email is required").email()
})

const ChangePasswordFrom = () => {
  const [emailError, uptEmailError] = useState("")
  const [emailSent, uptEmailSent] = useState(false)
  const [pending, uptPending] = useState(false)
  const email = useRef<HTMLInputElement>(null)

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validation = changePasswordSchema.safeParse({
      email: email.current?.value
    })
    if (!validation.success) {
      const { message } = validation.error.issues[0]
      uptEmailError(message)
    } else {
      uptPending(true)
      uptEmailError("")
      const response = await changePasswordAction(validation.data.email)
      if (!response) {
        uptEmailError("User not found")
        uptPending(false)
      } else uptEmailSent(true)
    }
  }
  if (emailSent) {
    return (
      <>
        <h2>An Email is sent</h2>
      </>
    )
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Email" name="email" ref={email} />
      <p>{emailError}</p>
      <button disabled={pending}>{pending ? "Submitting" : "Submit"}</button>
    </form>
  )
}

export default ChangePasswordFrom
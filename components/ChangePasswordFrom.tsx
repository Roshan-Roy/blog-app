"use client"

import ChangePasswordBtn from "./ChangePasswordBtn"
import { changePasswordAction } from "@/actions/changePasswordAction"
import { useFormState } from "react-dom"

const initialState = {
  emailError: "",
  emailMessage: ""
}

const ChangePasswordFrom = () => {
  const [state, formAction] = useFormState(changePasswordAction, initialState)
  return (
    <form action={formAction}>
      <input type="text" placeholder="Email" name="email" />
      {<p>{state.emailError}</p>}
      <br />
      <ChangePasswordBtn />
      {<p>{state.emailMessage}</p>}
    </form>
  )
}

export default ChangePasswordFrom
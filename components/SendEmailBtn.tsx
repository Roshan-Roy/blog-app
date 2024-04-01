"use client"

import { sendEmail } from "@/actions/sendEmail"

const SendEmailBtn = () => {
    const handleBtnClick = () => {
        sendEmail()
    }
    return (
        <button onClick={handleBtnClick}>Send Email</button>
    )
}

export default SendEmailBtn
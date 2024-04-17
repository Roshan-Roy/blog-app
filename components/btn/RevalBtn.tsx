"use client"

import { reval } from "@/actions/revalidate"

const RevalBtn = () => {
    const handleBtnClick = () => {
        reval()
    }
    return (
        <button onClick={handleBtnClick}>
            Revalidate
        </button>
    )
}

export default RevalBtn
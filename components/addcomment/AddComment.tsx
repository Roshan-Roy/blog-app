"use client"

import styles from "./addcomment.module.css"
import { addComment } from "@/actions/addComment"
import { useState, useEffect } from "react"
import { LuSendHorizonal } from "react-icons/lu"

const AddComment = ({ userId, blogId }: {
    userId: string | undefined;
    blogId: string;
}) => {
    const [data, uptData] = useState("")
    const [disabled, uptDisabled] = useState(true)
    const [loading, uptLoading] = useState(false)
    const handleSubmitBtnClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addComment(data, userId, blogId)
    }
    useEffect(() => {
        if (data === "") uptDisabled(true)
        else uptDisabled(false)
    }, [data])
    return (
        <form onSubmit={handleSubmitBtnClick} className={styles.container}>
            <input type="text" name="comment" value={data} onChange={elm => uptData(elm.target.value)} placeholder="Add Comment" />
            <button disabled={disabled} className={disabled ? styles.disabled : undefined}><LuSendHorizonal /></button>
        </form>
    )
}

export default AddComment
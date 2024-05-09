"use client"

import styles from "./addcomment.module.css"
import { addComment } from "@/actions/addComment"
import { useState, useEffect } from "react"
import { LuSendHorizonal } from "react-icons/lu"
import Spinner from "./spinner/Spinner"

const AddComment = ({ userId, blogId }: {
    userId: string | undefined;
    blogId: string;
}) => {
    const [data, uptData] = useState("")
    const [disabled, uptDisabled] = useState(true)
    const [loading, uptLoading] = useState(false)
    const handleSubmitBtnClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        uptLoading(true)
        await addComment(data.trim(), userId, blogId)
        uptLoading(false)
        uptData("")
    }
    useEffect(() => {
        if (data.trim() === "") uptDisabled(true)
        else uptDisabled(false)
    }, [data])
    return (
        <form onSubmit={handleSubmitBtnClick} className={styles.container}>
            <input type="text" name="comment" value={data} onChange={elm => uptData(elm.target.value)} placeholder="Add Comment" />
            {loading ? <Spinner /> : <button disabled={disabled} className={disabled ? styles.disabled : undefined}><LuSendHorizonal /></button>}
        </form>
    )
}

export default AddComment
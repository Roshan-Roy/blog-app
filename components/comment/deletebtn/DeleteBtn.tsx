"use client"

import styles from "./deletebtn.module.css"
import { AiOutlineDelete } from "react-icons/ai"
import { deleteComment } from "@/actions/deleteComment"
import Spinner from "./spinner/Spinner"
import { useState } from "react"

const DeleteBtn = ({ commentId }: {
    commentId: string;
}) => {
    const [loading, uptLoading] = useState(false)
    const handleDeleteBtnClick = async () => {
        uptLoading(true)
        await deleteComment(commentId)
    }
    if (loading) return <Spinner />
    return <button className={styles.delete_btn} onClick={handleDeleteBtnClick}><AiOutlineDelete /></button>

}

export default DeleteBtn
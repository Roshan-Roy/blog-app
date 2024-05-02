"use client"

import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useRef } from 'react'
import styles from "./deletebtn.module.css"
import { deleteBlogAction } from '@/actions/deleteBlogAction'

const DeleteBtn = ({ blogId }: {
    blogId: string;
}) => {
    console.log(blogId)
    const modal = useRef<HTMLDialogElement>(null)
    const handleShowModal = () => {
        modal.current?.showModal()
    }
    const handleCloseModal = () => {
        modal.current?.close()
    }
    const handleDelete = async () => {
        await deleteBlogAction(blogId)
    }
    return (
        <>
            <dialog ref={modal} className={styles.modal}>
                <h3>Delete Blog</h3>
                <p>Are you sure you want to delete this blog ?</p>
                <div className={styles.footer}>
                    <button className={styles.cancel_btn} onClick={handleCloseModal}>Cancel</button>
                    <button className={styles.ok_btn} onClick={handleDelete}>Delete</button>
                </div>
            </dialog>
            <button onClick={handleShowModal} className={styles.dlt_btn}>
                <AiOutlineDelete />
            </button>
        </>
    )
}

export default DeleteBtn
"use client"

import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useRef, useState } from 'react'
import styles from "./deletebtn.module.css"
import { useRouter } from 'next/navigation'
import Spinner from './spinner/Spinner'

const DeleteBtn = ({ blogId, imagePublicId }: {
    blogId: string,
    imagePublicId: string;
}) => {
    const router = useRouter()
    const [error, uptError] = useState(false)
    const [loading, uptLoading] = useState(false)
    const modal = useRef<HTMLDialogElement>(null)
    const handleShowModal = () => {
        modal.current?.showModal()
    }
    const handleCloseModal = () => {
        modal.current?.close()
    }
    const handleDelete = async () => {
        uptLoading(true)
        uptError(false)
        const response = await fetch(`/api/deleteblogimage?blogId=${blogId}&imagePublicId=${imagePublicId}`, {
            method: "DELETE"
        })
        if (response.ok) {
            router.refresh()
            handleCloseModal()
        } else {
            uptLoading(false)
            uptError(true)
        }
    }
    return (
        <>
            <dialog ref={modal} className={styles.modal}>
                <h3>Delete Blog</h3>
                <p>Are you sure you want to delete this blog ?</p>
                {error && <p className={styles.error}>An error occurred !</p>}
                <div className={loading ? `${styles.footer} ${styles.disabled}` : styles.footer}>
                    <button disabled={loading} className={styles.cancel_btn} onClick={handleCloseModal}>Cancel</button>
                    <button disabled={loading} className={styles.ok_btn} onClick={handleDelete}>Delete</button>
                    {loading && <Spinner />}
                </div>
            </dialog>
            <button onClick={handleShowModal} className={styles.dlt_btn}>
                <AiOutlineDelete />
            </button>
        </>
    )
}

export default DeleteBtn
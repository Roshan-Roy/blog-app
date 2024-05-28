import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useRef, useState } from 'react'
import styles from "./deletebtn.module.css"
import { deleteBlogAction } from '@/actions/deleteBlogAction'
import Spinner from './spinner/Spinner'

const DeleteBtn = ({ blogId }: {
    blogId: string;
}) => {
    const modal = useRef<HTMLDialogElement>(null)
    const [loading, uptLoading] = useState(false)
    const handleShowModal = () => {
        modal.current?.showModal()
    }
    const handleCloseModal = () => {
        modal.current?.close()
    }
    const handleDelete = async () => {
        uptLoading(true)
        await deleteBlogAction(blogId)
    }
    return (
        <>
            <dialog ref={modal} className={styles.modal}>
                <h3>Delete Blog</h3>
                <p>Are you sure you want to delete this blog ?</p>
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
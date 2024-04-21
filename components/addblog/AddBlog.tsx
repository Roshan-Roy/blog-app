"use client"

import { useRef } from "react"

const AddBlog = ({ children }: {
    children: React.ReactNode
}) => {
    const modal = useRef<HTMLDialogElement>(null)

    const handleShowModal = () => {
        modal.current?.showModal()
    }
    const handleCloseModal = () => {
        modal.current?.close()
    }
    return (
        <>
            <dialog ref={modal}>
                Hello
                <button onClick={handleCloseModal}>Close</button>
            </dialog>
            <span onClick={handleShowModal}>
                {children}
            </span>
        </>
    )
}

export default AddBlog
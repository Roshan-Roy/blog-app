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
                <button onClick={handleCloseModal}>Close</button>
                <form>
                    <textarea placeholder="Title"></textarea>
                    <textarea placeholder="Content"></textarea>
                    <button type="submit">Add Blog</button>
                </form>
            </dialog>
            <span onClick={handleShowModal}>
                {children}
            </span>
        </>
    )
}

export default AddBlog
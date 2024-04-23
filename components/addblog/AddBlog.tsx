import { useRef, useState, useEffect } from "react"
import styles from "./addblog.module.css"
import { IoMdClose } from "react-icons/io"
import { z } from "zod"

const addBlogSchema = z.object({
    title: z.string().trim().min(1),
    content: z.string().trim().min(1)
})

const AddBlog = ({ children }: {
    children: React.ReactNode
}) => {
    const [data, uptData] = useState({
        title: "",
        content: ""
    })
    const [disabled, uptDisabled] = useState(false)
    const modal = useRef<HTMLDialogElement>(null)

    const handleShowBtnClick = () => {
        modal.current?.showModal()
    }
    const handleCloseBtnClick = () => {
        modal.current?.close()
    }
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    useEffect(() => {
        const validation = addBlogSchema.safeParse({
            title: data.title,
            content: data.content
        })
        if (!validation.success) uptDisabled(true)
        else uptDisabled(false)
    }, [data])
    return (
        <>
            <dialog className={styles.modal} ref={modal}>
                <div className={styles.addblog_heading}>
                    <h3>New Blog</h3>
                    <button onClick={handleCloseBtnClick}><IoMdClose /></button>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className={styles.addblog}>
                        <h3><label htmlFor="title">Title</label></h3>
                        <input type="text" id="title" placeholder="Title" value={data.title} onChange={elm => uptData(e => ({ ...e, title: elm.target.value }))} />
                        <h3><label htmlFor="content">Content</label></h3>
                        <textarea id="content" placeholder="Content" value={data.content} onChange={elm => uptData(e => ({ ...e, content: elm.target.value }))}></textarea>
                    </div>
                    <div className={styles.change_container}>
                        <button className={disabled ? styles.disabled : undefined}>Add Blog</button>
                    </div>
                </form>
            </dialog>
            <span onClick={handleShowBtnClick}>
                {children}
            </span>
        </>
    )
}

export default AddBlog
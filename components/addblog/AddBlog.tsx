"use client"

import { useRef, useState, useEffect } from "react"
import styles from "./addblog.module.css"
import { IoMdClose } from "react-icons/io"
import categories from "./categories/categories"
import Category from "./categories/Category"
import { useSession } from "next-auth/react"
import Spinner from "./spinner/Spinner"
import { MdDeleteOutline } from "react-icons/md"
import { useRouter } from "next/navigation"

const AddBlog = ({ children }: {
    children: React.ReactNode
}) => {
    const { data: session } = useSession()
    const router = useRouter()
    const [data, uptData] = useState({
        title: "",
        content: "",
        category: "Books"
    })
    const [image, uptImage] = useState<File | null>(null)
    const [disabled, uptDisabled] = useState(false)
    const [loading, uptLoading] = useState(false)
    const [error,uptError] = useState(false)
    const modal = useRef<HTMLDialogElement>(null)
    const handleShowBtnClick = () => {
        modal.current?.showModal()
    }
    const handleCloseBtnClick = () => {
        modal.current?.close()
        uptData({
            title: "",
            content: "",
            category: "Books"
        })
        uptImage(null)
        uptLoading(false)
        uptError(false)
    }
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", data.title.trim())
        formData.append("content", data.content.trim())
        formData.append("category", data.category)
        if (image) formData.append("image", image)
        if (session?.user.id) formData.append("userId", session.user.id);
        uptLoading(true)
        uptError(false)
        const response = await fetch("/api/addblog", {
            method: "POST",
            body: formData
        })
        if (response.ok) {
            handleCloseBtnClick()
            router.refresh()
        } else {
            uptError(true)
            uptLoading(false)
        }
    }
    const handleChangeCategory = (name: string) => {
        uptData(e => ({ ...e, category: name }))
    }
    useEffect(() => {
        if (!data.title.trim() || !data.content.trim())
            uptDisabled(true)
        else
            uptDisabled(false)
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
                        <div className={styles.image}>
                            {image && <p>{image.name}</p>}
                            <div className={styles.deletebtn_container}>
                                <label htmlFor="image" className={image ? styles.added : undefined}>{image ? "Image Added" : "Add Featured Image"}</label>
                                {image && <button onClick={() => uptImage(null)}><MdDeleteOutline /></button>}
                            </div>
                            <input type="file" accept="image/*" id="image" onChange={elm => {
                                if (elm.target.files) uptImage(elm.target.files[0])
                            }} />
                        </div>
                        <h3><label htmlFor="content">Content</label></h3>
                        <textarea id="content" placeholder="Content" value={data.content} onChange={elm => uptData(e => ({ ...e, content: elm.target.value }))}></textarea>
                        <h3>Category</h3>
                        <div className={styles.categories}>
                            {categories.map(e => <Category key={e} name={e} current={data.category} func={handleChangeCategory} />)}
                        </div>
                    </div>
                    {error && <p className={styles.error}>Oops, an error occurred !</p>}
                    <div className={styles.btn_container}>
                        <button className={disabled || loading ? styles.disabled : undefined} disabled={disabled || loading}>Add Blog</button>
                        {loading && <Spinner />}
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
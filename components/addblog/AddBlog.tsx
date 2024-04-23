import { useRef, useState, useEffect } from "react"
import styles from "./addblog.module.css"
import { IoMdClose } from "react-icons/io"
import { addBlogAction } from "@/actions/addBlogAction"
import categories from "./categories/categories"
import Category from "./categories/Category"

const AddBlog = ({ children }: {
    children: React.ReactNode
}) => {
    const [data, uptData] = useState({
        title: "",
        content: "",
        category: "Books"
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
        addBlogAction({
            title: data.title.trim(),
            content: data.content.trim(),
            category: data.category
        })
    }
    const handleChangeCategory = (name: string) => {
        uptData({ ...data, category: name })
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
                        <h3><label htmlFor="content">Content</label></h3>
                        <textarea id="content" placeholder="Content" value={data.content} onChange={elm => uptData(e => ({ ...e, content: elm.target.value }))}></textarea>
                        <h3>Category</h3>
                        <div className={styles.categories}>
                            {categories.map(e => <Category key={e} name={e} current={data.category} func={handleChangeCategory} />)}
                        </div>
                    </div>
                    <div className={styles.change_container}>
                        <button className={disabled ? styles.disabled : undefined} disabled={disabled}>Add Blog</button>
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
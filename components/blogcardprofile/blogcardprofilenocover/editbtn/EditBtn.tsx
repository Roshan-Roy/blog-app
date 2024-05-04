"use client"

import { useRef, useState, useEffect } from "react"
import { IoMdClose } from "react-icons/io"
import Spinner from "./spinner/Spinner"
import { FiEdit } from "react-icons/fi"
import styles from "./editbtn.module.css"
import { updateBlog } from "@/actions/updateBlog"

const EditBtn = ({ title, content, blogId }: {
  title: string;
  content: string;
  blogId: string;
}) => {
  const [data, uptData] = useState({
    title,
    content
  })
  const [disabled, uptDisabled] = useState(false)
  const [loading, uptLoading] = useState(false)
  const modal = useRef<HTMLDialogElement>(null)
  const handleShowBtnClick = () => {
    modal.current?.showModal()
    uptData({
      title,
      content
    })
  }
  const handleCloseBtnClick = () => {
    modal.current?.close()
    uptLoading(false)
  }
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    uptLoading(true)
    await updateBlog(data.title.trim(), data.content.trim(), blogId)
    handleCloseBtnClick()
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
        <div className={styles.editblog_heading}>
          <h3>Update Blog</h3>
          <button onClick={handleCloseBtnClick}><IoMdClose /></button>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.editblog}>
            <h3><label htmlFor="title">Title</label></h3>
            <input type="text" id="title" placeholder="Title" value={data.title} onChange={elm => uptData(e => ({ ...e, title: elm.target.value }))} />
            <h3><label htmlFor="content">Content</label></h3>
            <textarea id="content" placeholder="Content" value={data.content} onChange={elm => uptData(e => ({ ...e, content: elm.target.value }))}></textarea>
          </div>
          <div className={styles.btn_container}>
            <button className={disabled || loading ? styles.disabled : undefined} disabled={disabled || loading}>Make Changes</button>
            {loading && <Spinner />}
          </div>
        </form>
      </dialog>
      <button className={styles.edit_btn} onClick={handleShowBtnClick}>
        <FiEdit />
      </button>
    </>
  )
}

export default EditBtn
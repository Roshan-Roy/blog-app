"use client"

import styles from "./editprofile.module.css"
import { useRef } from "react"
import { IoMdClose } from "react-icons/io"
import { useState } from "react"
import { z } from "zod"
import { useEffect } from "react"
import { editProfile } from "@/actions/editProfile"
import { useSession } from "next-auth/react"

const profileSchema = z.object({
    name: z.string().trim().min(1).max(20),
    about: z.string().trim().min(1).max(100)
})

const EditProfile = ({ name, about, userId }: {
    name: string | undefined,
    about: string | undefined,
    userId: string
}) => {
    const { update } = useSession()
    const [data, uptData] = useState({
        name,
        about
    })
    const [disabled, uptDisabled] = useState(false)
    const [loading, uptLoading] = useState(false)

    const modal = useRef<HTMLDialogElement>(null)

    const handleOpenBtnClick = () => {
        modal.current?.showModal()
        uptData({ name, about })
    }
    const handleCloseBtnClick = () => {
        modal.current?.close()
    }
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        uptLoading(true)
        await editProfile(data, userId)
        update({ name: data.name })
        uptLoading(false)
        handleCloseBtnClick()
    }
    useEffect(() => {
        const validation = profileSchema.safeParse(data)
        if (validation.success) uptDisabled(false)
        else uptDisabled(true)
    }, [data])
    return (
        <>
            <dialog className={styles.modal} ref={modal}>
                <div className={styles.editprofile_heading}>
                    <h3>Edit profile</h3>
                    <button onClick={handleCloseBtnClick}><IoMdClose /></button>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className={styles.editprofile}>
                        <div className={styles.inp_container}>
                            <h3><label htmlFor="name">Name</label></h3>
                            <input type="text" value={data.name} name="name" id="name" placeholder="Name" onChange={e => uptData({ ...data, name: e.target.value })} />
                        </div>
                        <div className={styles.inp_container}>
                            <h3><label htmlFor="name">About Me</label></h3>
                            <textarea value={data.about} rows={3} placeholder="About me" onChange={e => uptData({ ...data, about: e.target.value })}></textarea>
                        </div>
                        <h3 className={styles.social_heading}>Links</h3>
                        <div className={styles.social_inp_container}>
                            <h4><label htmlFor="instagram">Instagram</label></h4>
                            <input type="text" name="instagram" id="instagram" placeholder="https://" />
                        </div>
                        <div className={styles.social_inp_container}>
                            <h4><label htmlFor="facebook">Facebook</label></h4>
                            <input type="text" name="facebook" id="facebook" placeholder="https://" />
                        </div>
                        <div className={styles.social_inp_container}>
                            <h4><label htmlFor="linkedin">LinkedIn</label></h4>
                            <input type="text" name="linkedin" id="linkedin" placeholder="https://" />
                        </div>
                        <div className={styles.social_inp_container}>
                            <h4><label htmlFor="linkedin">Whatsapp</label></h4>
                            <input type="text" name="whatsapp" id="whatsapp" placeholder="Phone number" />
                        </div>
                    </div>
                    <div className={styles.change_container}>
                        <button disabled={disabled || loading} className={disabled || loading ? styles.disabled : undefined}>Make changes</button>
                        {loading && "Loading"}
                    </div>
                </form>
            </dialog>
            <button className={styles.edit_btn} onClick={handleOpenBtnClick}>Edit profile</button>
        </>
    )
}

export default EditProfile
"use client"

import styles from "./editprofile.module.css"
import { useRef } from "react"
import { IoMdClose } from "react-icons/io"
import { useState } from "react"
import { z } from "zod"
import { useEffect } from "react"
import { editProfile } from "@/actions/editProfile"
import { useSession } from "next-auth/react"
import profileList from "./profilelist/profileList"
import ProfileImage from "./profileimage/ProfileImage"
import Spinner from "./spinner/Spinner"

const profileSchema = z.object({
    name: z.string().trim().min(1).max(20),
    bio: z.string().trim().min(1).max(60)
})

const EditProfile = ({ name, bio, instagram, facebook, linkedIn, whatsapp, image, userId }: {
    name: string | undefined,
    bio: string | undefined,
    instagram: string | undefined,
    facebook: string | undefined,
    linkedIn: string | undefined,
    whatsapp: string | undefined,
    image: string | undefined
    userId: string
}) => {
    const { update } = useSession()
    const [data, uptData] = useState({
        name,
        bio,
        instagram,
        facebook,
        linkedIn,
        whatsapp,
        image
    })
    const [disabled, uptDisabled] = useState(false)
    const [loading, uptLoading] = useState(false)

    const modal = useRef<HTMLDialogElement>(null)

    const handleOpenBtnClick = () => {
        modal.current?.showModal()
        uptData({
            name,
            bio,
            instagram,
            facebook,
            linkedIn,
            whatsapp,
            image
        })
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
    const handleChangeImage = (e: string) => {
        uptData({ ...data, image: e })
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
                            <h3 className={styles.avatar_heading}>Avatar</h3>
                            <div className={styles.image_container}>
                                {
                                    profileList.map(e => <ProfileImage key={e} src={e} current={data.image} change={handleChangeImage} />)
                                }
                            </div>
                        </div>
                        <div className={styles.inp_container}>
                            <h3><label htmlFor="name">Name</label></h3>
                            <input type="text" value={data.name} name="name" id="name" placeholder="Name" onChange={e => uptData({ ...data, name: e.target.value })} />
                        </div>
                        <div className={styles.inp_container}>
                            <h3><label htmlFor="bio">Bio</label></h3>
                            <textarea value={data.bio} rows={2} id="bio" name="bio" placeholder="Bio" onChange={e => uptData({ ...data, bio: e.target.value })}></textarea>
                        </div>
                        <h3 className={styles.social_heading}>Links</h3>
                        <div className={styles.social_inp_container}>
                            <h4><label htmlFor="instagram">Instagram</label></h4>
                            <input type="text" value={data.instagram} name="instagram" id="instagram" placeholder="https://" onChange={e => uptData({ ...data, instagram: e.target.value })} />
                        </div>
                        <div className={styles.social_inp_container}>
                            <h4><label htmlFor="facebook">Facebook</label></h4>
                            <input type="text" value={data.facebook} name="facebook" id="facebook" placeholder="https://" onChange={e => uptData({ ...data, facebook: e.target.value })} />
                        </div>
                        <div className={styles.social_inp_container}>
                            <h4><label htmlFor="linkedin">LinkedIn</label></h4>
                            <input type="text" value={data.linkedIn} name="linkedin" id="linkedin" placeholder="https://" onChange={e => uptData({ ...data, linkedIn: e.target.value })} />
                        </div>
                        <div className={styles.social_inp_container}>
                            <h4><label htmlFor="whatsapp">Whatsapp</label></h4>
                            <input type="text" value={data.whatsapp} name="whatsapp" id="whatsapp" placeholder="Phone number" onChange={e => uptData({ ...data, whatsapp: e.target.value })} />
                        </div>
                    </div>
                    <div className={styles.change_container}>
                        <button disabled={disabled || loading} className={disabled || loading ? styles.disabled : undefined}>Make changes</button>
                        {loading && <Spinner />}
                    </div>
                </form>
            </dialog>
            <button className={styles.edit_btn} onClick={handleOpenBtnClick}>Edit profile</button>
        </>
    )
}

export default EditProfile
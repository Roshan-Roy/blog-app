import React from 'react'
import styles from "./profile.module.css"
import { prisma } from '@/lib/db'
import CountBoard from './countboard/CountBoard'
import EditProfile from './editprofile/EditProfile'
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import Link from 'next/link'
import Image from 'next/image'

const Profile = async ({ userId }: { userId: string }) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  })
  console.log(user)
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.profile_pic}>
          <Image src={"/profile/no_image.webp"} alt="profile picture" fill={true}/>
        </div>
        <div className={styles.details_one}>
          <h2 className={styles.username}>{user?.name}</h2>
          <p className={styles.about}>{user?.bio}</p>
          <div className={styles.links}>
            {user?.instagram && <Link href={user.instagram} target="_blank"><FaInstagram /></Link>}
            {user?.facebook && <Link href={user.facebook} target="_blank"><FaFacebook /></Link>}
            {user?.linkedIn && <Link href={user.linkedIn} target="_blank"><FaLinkedin /></Link>}
            {user?.whatsapp && <Link href={`https://wa.me/${user.whatsapp}`} target="_blank"><FaWhatsapp /></Link>}
          </div>

        </div>
        <div className={styles.details_two}>
          <div className={styles.countboard_container}>
            <CountBoard name="Blogs" count={11} />
            <CountBoard name="Likes" count={15} />
          </div>
          <EditProfile
            name={user?.name}
            bio={user?.bio}
            instagram={user?.instagram}
            facebook={user?.facebook}
            linkedIn={user?.linkedIn}
            whatsapp={user?.whatsapp}
            userId={userId}
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
import React from 'react'
import styles from "./profile.module.css"
import { prisma } from '@/lib/db'
import CountBoard from './countboard/CountBoard'
import EditProfile from './editprofile/EditProfile'
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import Link from 'next/link'
import Image from 'next/image'
import ProfileNavbar from './profilenavbar/ProfileNavbar'

const Profile = async ({ userId }: { userId: string }) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  })
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.profile_pic}>
            <Image src={`/profile/${user?.image}`} alt="profile picture" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" unoptimized fill/>
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
              <CountBoard name="Blogs" count={0} />
              <CountBoard name="Likes" count={0} />
            </div>
            <EditProfile
              name={user?.name}
              bio={user?.bio}
              instagram={user?.instagram}
              facebook={user?.facebook}
              linkedIn={user?.linkedIn}
              whatsapp={user?.whatsapp}
              image={user?.image}
              userId={userId}
            />
          </div>
        </div>
      </div>
      <ProfileNavbar />
    </>
  )
}

export default Profile
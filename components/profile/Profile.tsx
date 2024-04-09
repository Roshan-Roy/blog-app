import React from 'react'
import styles from "./profile.module.css"
import { prisma } from '@/lib/db'
import CountBoard from './countboard/CountBoard'
import EditProfile from './editprofile/EditProfile'

const Profile = async ({ userId }: { userId: string }) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  })
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.profile_pic}></div>
        <div className={styles.details_one}>
          <h2 className={styles.username}>{user?.name}</h2>
          <p className={styles.about}>{user?.about}</p>
        </div>
        <div className={styles.details_two}>
          <div className={styles.countboard_container}>
            <CountBoard name="Blogs" count={11} />
            <CountBoard name="Likes" count={15} />
          </div>
          <EditProfile {...user}/>
        </div>
      </div>
    </div>
  )
}

export default Profile
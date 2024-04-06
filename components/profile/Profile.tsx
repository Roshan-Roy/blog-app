import React from 'react'
import styles from "./profile.module.css"
import { prisma } from '@/lib/db'

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
        <div className={styles.details}>
          <h2>{user?.name}</h2>
          <p>programmer</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
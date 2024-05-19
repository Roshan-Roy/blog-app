import styles from "./profile.module.css"
import { prisma } from "@/lib/db"
import Image from "next/image"

const Profile = async ({ userId }: {
  userId: string | null
}) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId as string
    }
  })
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={`/profile/${user?.image}`} alt="profile picture" fill />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{user?.name}</p>
        <p className={styles.author}>Author</p>
      </div>
    </div>
  )
}

export default Profile
import styles from "./profile.module.css"
import { prisma } from "@/lib/db"
import Image from "next/image"
import Link from "next/link"

const Profile = async ({ curUserId, userId }: {
  curUserId: string | undefined;
  userId: string | null;
}) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId as string
    }
  })
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link href={`/profile/${user?.id}`}><Image src={`/profile/${user?.image}`} alt="profile picture" fill /></Link>
      </div>
      <div className={styles.details}>
        <p className={styles.name}><Link href={`/profile/${user?.id}`}>{userId === curUserId ? `${user?.name} (You)` : user?.name}</Link></p>
        <p className={styles.author}>Author</p>
      </div>
    </div>
  )
}

export default Profile
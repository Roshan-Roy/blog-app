import styles from "./profile.module.css"
import Image from "next/image"
import Link from "next/link"

const Profile = ({ curUserId, userId, userName, userImage }: {
  curUserId: string | undefined;
  userId: string | null;
  userName: string | undefined;
  userImage: string | undefined;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link href={`/profile/${userId}`}><Image src={`/profile/${userImage}`} alt="profile picture" fill /></Link>
      </div>
      <div className={styles.details}>
        <p className={styles.name}><Link href={`/profile/${userId}`}>{userId === curUserId ? `${userName} (You)` : userName}</Link></p>
        <p className={styles.author}>Author</p>
      </div>
    </div>
  )
}

export default Profile
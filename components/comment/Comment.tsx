import styles from "./comment.module.css"
import { prisma } from "@/lib/db"
import formatDate from "@/lib/fomatDate"
import Image from "next/image"
import Link from "next/link"
import DeleteBtn from "./deletebtn/DeleteBtn"

const Comment = async ({
  id,
  userId,
  comment,
  createdAt,
  deleteBtn
}: {
  id: string;
  userId: string | null;
  comment: string;
  createdAt: Date;
  deleteBtn: Boolean;
}) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId as string
    }
  })

  return (
    <div className={styles.container}>
      <div className={styles.profile_container}>
        <div className={styles.ni_container}>
          <div className={styles.image_container}>
            <Link href="/"><Image src={`/profile/${user?.image}`} alt="profile image" fill={true} /></Link>
          </div>
          <p><Link href="/">{user?.name}</Link></p>
        </div>
        {deleteBtn && <DeleteBtn commentId={id}/>}
      </div>
      <p className={styles.comment}>{comment}</p>
      <div className={styles.date_container}>
        <p>{formatDate(createdAt)}</p>
      </div>
    </div>
  )
}

export default Comment
"use client"

import styles from "./comment.module.css"
import formatDate from "@/lib/fomatDate"
import Image from "next/image"
import Link from "next/link"
import DeleteBtn from "./deletebtn/DeleteBtn"

const Comment = ({
  userId,
  userName,
  userImage,
  commentId,
  comment,
  deleteBtn,
  createdAt
}: {
  userId: string | null;
  userName: string | undefined;
  userImage: string | undefined;
  commentId: string | undefined;
  comment: string;
  deleteBtn: boolean;
  createdAt: Date;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.profile_container}>
        <div className={styles.ni_container}>
          <div className={styles.image_container}>
            <Link href={`/profile/${userId}`}><Image src={`/profile/${userImage}`} alt="profile image" fill={true} /></Link>
          </div>
          <p><Link href={`/profile/${userId}`}>{userName}</Link></p>
        </div>
        {deleteBtn && <DeleteBtn commentId={commentId as string} />}
      </div>
      <p className={styles.comment}>{comment}</p>
      <div className={styles.date_container}>
        <p>{formatDate(createdAt)}</p>
      </div>
    </div>
  )
}

export default Comment
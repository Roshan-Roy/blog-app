import styles from "./page.module.css"
import Image from "next/image"
import { prisma } from "@/lib/db"
import CountBoard from "@/components/profile/countboard/CountBoard"
import Link from "next/link"
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { BsPostcard } from "react-icons/bs"
import BlogCardUserProfileCover from "@/components/blogcarduserprofile/blogcarduserprofilecover/BlogCardUserProfileCover"
import BlogCardUserProfileNoCover from "@/components/blogcarduserprofile/blogcarduserprofilenocover/BlogCardUserProfileNoCover"

const Profile = async ({ params }: {
  params: any
}) => {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id
    },
    include: {
      blogs: {
        include: {
          comments: true,
          likes: true
        }
      }
    }
  })
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container_one}>
          <div className={styles.profile_pic}>
            <Image src={`/profile/${user?.image}`} alt="profile picture" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" unoptimized fill />
          </div>
          <div className={styles.details_one}>
            <h2>{user?.name}</h2>
            <p className={styles.email}>{user?.email}</p>
            <p>{user?.bio}</p>
          </div>
          <div className={styles.details_two}>
            <div className={styles.countboard_container}>
              <CountBoard name="Blogs" count={user?.blogs.length as number} />
              <CountBoard name="Likes" count={user?.blogs.reduce((acc, cur) => cur.likes.length + acc, 0) as number} />
            </div>
            <div className={styles.links}>
              {user?.instagram && <Link href={user.instagram} target="_blank"><FaInstagram /></Link>}
              {user?.facebook && <Link href={user.facebook} target="_blank"><FaFacebook /></Link>}
              {user?.linkedIn && <Link href={user.linkedIn} target="_blank"><FaLinkedin /></Link>}
              {user?.whatsapp && <Link href={`https://wa.me/${user.whatsapp}`} target="_blank"><FaWhatsapp /></Link>}
            </div>
          </div>
        </div>
      </div>
      {
        user?.blogs.length === 0 ?
          <div className={styles.no_blogs_container}>
            <div className={styles.no_blogs}>
              <BsPostcard />
              <h2>No Blogs Yet</h2>
            </div>
          </div>
          :
          <>
            <div className={styles.heading}>Blogs</div>
            <div className={styles.container_two}>
              {
                user?.blogs.map(e => {
                  if (e.image) return <BlogCardUserProfileCover key={e.id} noOfLikes={e.likes.length} noOfComments={e.comments.length} {...e} />
                  return <BlogCardUserProfileNoCover key={e.id} noOfLikes={e.likes.length} noOfComments={e.comments.length} {...e} />
                })
              }
            </div>
          </>
      }
    </>
  )
}

export default Profile
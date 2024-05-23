import UserProfileSkeleton from "@/components/userprofileskeleton/UserProfileSkeleton"
import styles from "./page.module.css"
import ProfileSavedSkeleton from "@/components/profilesavedskeleton/ProfileSavedSkeleton"

const loading = () => {
  return (
    <>
      <UserProfileSkeleton />
      <div className={styles.container_two}>
        <ProfileSavedSkeleton />
        <ProfileSavedSkeleton />
        <ProfileSavedSkeleton />
      </div>
    </>
  )
}

export default loading
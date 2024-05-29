import UserProfileSkeleton from "@/components/skeletons/userprofileskeleton/UserProfileSkeleton"
import styles from "./page.module.css"
import ProfileSavedSkeleton from "@/components/skeletons/profilesavedskeleton/ProfileSavedSkeleton"

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
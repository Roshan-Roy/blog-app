import styles from "./page.module.css"
import ProfileSavedSkeleton from "@/components/profilesavedskeleton/ProfileSavedSkeleton"

const loading = () => {
  return (
    <div className={styles.container}>
      <ProfileSavedSkeleton />
      <ProfileSavedSkeleton />
      <ProfileSavedSkeleton />
    </div>
  )
}

export default loading
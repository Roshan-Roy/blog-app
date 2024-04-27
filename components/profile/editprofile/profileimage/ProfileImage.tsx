import Image from "next/image"
import styles from "./profileimage.module.css"

const ProfileImage = ({ src, current, change }: {
    src: string,
    current: string | undefined,
    change: (e: string) => void,
}) => {
    const handleImageClick = () => {
        change(src)
    }
    return (
        <div className={src == current ? `${styles.wrapper} ${styles.current}` : styles.wrapper} onClick={handleImageClick}>
            <div className={styles.container}>
                <Image src={`/profile/${src}`} alt="Unable to load" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill/>
            </div>
        </div>
    )
}

export default ProfileImage
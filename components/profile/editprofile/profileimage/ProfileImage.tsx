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
        <div className={src == current ? `${styles.container} ${styles.current}` : styles.container} onClick={handleImageClick}>
            <Image src={`/profile/${src}`} alt="Unable to load" fill={true} />
        </div>
    )
}

export default ProfileImage
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
                <Image src={`/profile/${src}`} alt="Unable to load" fill={true}/>
            </div>
        </div>
    )
}

export default ProfileImage
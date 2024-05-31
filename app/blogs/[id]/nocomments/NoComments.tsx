import styles from "./nocomments.module.css"
import { FaCommentSlash } from "react-icons/fa6"

const NoComments = () => {
  return (
    <div className={styles.container}>
      <FaCommentSlash />
      <h3>No Comments</h3>
    </div>
  )
}

export default NoComments
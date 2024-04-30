import { FiEdit } from "react-icons/fi"
import styles from "./editbtn.module.css"

const EditBtn = () => {
  return (
    <button className={styles.edit_btn}>
        <FiEdit/>
    </button>
  )
}

export default EditBtn
import styles from "./spinner.module.css"

const Spinner = ({ pink }: {
  pink: boolean
}) => {
  return (
    <div className={pink ? `${styles.loader} ${styles.pink}` : styles.loader}></div >
  )
}

export default Spinner
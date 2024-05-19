import styles from "./spinner.module.css"

const Spinner = ({ dark }: {
  dark: boolean
}) => {
  return (
    <div className={dark ? `${styles.loader} ${styles.dark}` : styles.loader}></div >
  )
}

export default Spinner
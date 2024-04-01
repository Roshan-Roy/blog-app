import Link from "next/link"
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/signin">Signin</Link>
            <Link href="/signup">Signup</Link>
            <Link href="/emails">Test send email</Link>
        </div>
    )
}

export default Navbar
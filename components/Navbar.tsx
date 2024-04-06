"use client"

import styles from "./navbar.module.css"
import { useSession } from "next-auth/react"
import Links from "./Links"

const Navbar = () => {
    const { status } = useSession()
    let linksArray = []
    if (status === "authenticated") {
        linksArray = [
            {
                name: "Home",
                route: "/"
            }, {
                name: "Dashboard",
                route: "/dashboard"
            }, {
                name: "Profile",
                route: "/profile"
            }
        ]
    } else {
        linksArray = [
            {
                name: "Home",
                route: "/"
            }, {
                name: "Signin",
                route: "/signin"
            }, {
                name: "Signup",
                route: "/signup"
            }
        ]
    }
    return (
        <div className={styles.container}>
            {
                linksArray.map((e, i) => <Links key={`${i}${e.name}`} {...e} />)
            }
        </div>
    )
}

export default Navbar
"use client"

import styles from "./navbar.module.css"
import { useSession } from "next-auth/react"
import Links from "./links/Links"

const Navbar = () => {
    const { status } = useSession()
    let linksArray = []
    if (status === "authenticated" || status === "loading") {
        linksArray = [
            {
                name: "Home",
                route: ["/","blog"]
            }, {
                name: "Dashboard",
                route: ["/dashboard"]
            }, {
                name: "Profile",
                route: ["/myprofile/blogs", "/myprofile/saved"]
            }
        ]
    } else {
        linksArray = [
            {
                name: "Home",
                route: ["/"]
            }, {
                name: "Signin",
                route: ["/signin"]
            }, {
                name: "Signup",
                route: ["/signup"]
            }
        ]
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {
                    linksArray.map((e, i) => <Links key={`${i}${e.name}`} {...e} />)
                }
            </div>
        </div>
    )
}

export default Navbar
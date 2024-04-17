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
                route: ["/"]
            }, {
                name: "Dashboard",
                route: ["/dashboard"]
            }, {
                name: "Profile",
                route: ["/profile/blogs","/profile/saved"]
            },{
                name:"Images",
                route:["/images"]
            }
        ]
    } else {
        linksArray = [
            {
                name: "Hoe",
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
        <div className={styles.container}>
            {
                linksArray.map((e, i) => <Links key={`${i}${e.name}`} {...e} />)
            }
        </div>
    )
}

export default Navbar
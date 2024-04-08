import styles from "./navbar.module.css"
import Links from "./links/Links"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

const Navbar = async() => {
    const session = await getServerSession(authOptions)
    let linksArray = []
    if (session) {
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
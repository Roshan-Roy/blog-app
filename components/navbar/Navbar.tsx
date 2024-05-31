"use client"

import styles from "./navbar.module.css"
import { useSession } from "next-auth/react"
import Links from "./links/Links"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    const { status, data: session } = useSession()
    let linksArray = []
    if (status === "authenticated" || status === "loading") {
        linksArray = [
            {
                name: "Home",
                route: ["/"]
            }, {
                name: "Blogs",
                route: ["/blogs"]
            }, {
                name: "About",
                route: ["/about"]
            }, {
                name: "Profile",
                route: ["/profile/blogs", "/profile/saved"]
            }
        ]
    } else {
        linksArray = [
            {
                name: "Home",
                route: ["/"]
            }, {
                name: "About",
                route: ["/about"]
            }, {
                name: "Sign in",
                route: ["/signin"]
            }, {
                name: "Sign up",
                route: ["/signup"]
            }
        ]
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <h2 className={styles.title}>Blog</h2>
                    <div className={styles.links_container_one}>
                        {
                            status === "authenticated" || status === "loading" ?
                                <>
                                    <Links name="Home" route={["/"]} />
                                    <Links name="Blogs" route={["/blogs"]} />
                                    <Links name="About" route={["/about"]} />
                                </>
                                :
                                <>
                                    <Links name="Home" route={["/"]} />
                                    <Links name="About" route={["/about"]} />
                                    <Links name="Signup" route={["/signup"]} />
                                </>
                        }
                    </div>
                    <div className={styles.links_container_two}>
                        {status === "authenticated" || status === "loading" ? <Link href="/myprofile/blogs"><div className={styles.profile_image}><Image src={`/profile/${session?.user.image as string}`} alt="profile picture" fill /></div></Link> : <Links name="Signin" route={["/signin"]} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
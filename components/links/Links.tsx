import Link from "next/link"
import styles from "./links.module.css"
import { usePathname } from "next/navigation"

const Links = ({ name, route }: {
  name: string
  route: string[]
}) => {
  const pathName = usePathname()
  return <Link className={route.includes(pathName) || route.includes(pathName.split("/")[1]) ? `${styles.link} ${styles.active}` : styles.link} href={route[0]}>{name}</Link>
}

export default Links
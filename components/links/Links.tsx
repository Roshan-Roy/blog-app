import Link from "next/link"
import styles from "./links.module.css"
import { usePathname } from "next/navigation"

const Links = ({ name, route }: {
  name: string
  route: string
}) => {
  const pathName = usePathname()
  return <Link className={pathName === route ? `${styles.link} ${styles.active}` : styles.link} href={route}>{name}</Link>
}

export default Links
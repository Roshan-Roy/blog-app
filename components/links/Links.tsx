"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import styles from "./links.module.css"

const Links = ({ name, route }: {
  name: string
  route: string
}) => {
  const pathName = usePathname()
  return <Link className={pathName === route ? styles.active : undefined} href={route}>{name}</Link>
}

export default Links
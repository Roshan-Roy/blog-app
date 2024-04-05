import Link from "next/link"

const Links = ({ name, route }: {
  name: string
  route: string
}) => {
  return <Link href={route}>{name}</Link>
}

export default Links
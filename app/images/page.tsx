import ImageCard from "@/components/ImageCard"
import { prisma } from "@/lib/db"
import RevalBtn from "@/components/btn/RevalBtn"
import Image from "next/image"

const Images = async () => {
  const image: any = await prisma.image.findUnique({
    where: {
      id: "661fae16abc2c9b2c16e1d54"
    }
  })
  return (
    <div>
      <Image src={image?.src} width={200} height={200} alt="image" />
      <RevalBtn />
    </div>
  )
}

export default Images
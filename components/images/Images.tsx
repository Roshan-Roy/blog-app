import ImageCard from "../ImageCard"
import { prisma } from "@/lib/db"

const Images = async () => {
  const imageList = await prisma.image.findMany()
  return (
    <div>
      {imageList.map((e, i) => <ImageCard key={i} url={e.src} />)}
    </div>
  )
}

export default Images
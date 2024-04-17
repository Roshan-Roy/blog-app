import ImageCard from "@/components/ImageCard"
import { prisma } from "@/lib/db"
import RevalBtn from "@/components/btn/RevalBtn"

const Images = async () => {
  const imageList = await prisma.image.findMany()
  console.log(imageList)
  return (
    <div>
      {imageList.map((e, i) => <ImageCard key={i} url={e.src} />)}
      <RevalBtn />
    </div>
  )
}

export default Images
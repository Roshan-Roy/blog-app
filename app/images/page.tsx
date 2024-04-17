import ImageCard from "@/components/ImageCard"
import { prisma } from "@/lib/db"
import RevalBtn from "@/components/btn/RevalBtn"

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/all`,{
    cache:"no-store"
  })
  return res.json()
}

const Images = async () => {
  const imageList = await getData()
  return (
    <div>
      {imageList.data.map((e: {
        id: string;
        src: string;
      }, i: number) => <ImageCard key={i} url={e.src} />)}
      <RevalBtn />
    </div>
  )
}

export default Images
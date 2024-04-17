import ImageCard from "@/components/ImageCard"
import { prisma } from "@/lib/db"

const getData = async () => {
  const res = await fetch("http://localhost:3000/api//all", {
    cache: "no-store"
  })
  return res.json()
}

const Images = async () => {
  const imageList = await getData()
  return (
    <div>
      {imageList.data.map((e: {
        src: string
      }, i: number) => <ImageCard key={i} url={e.src} />)}
    </div>
  )
}

export default Images
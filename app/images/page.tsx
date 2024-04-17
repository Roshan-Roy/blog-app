import ImageCard from "@/components/ImageCard"

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/all`, {
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
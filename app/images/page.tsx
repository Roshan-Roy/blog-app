import ImageCard from "@/components/ImageCard"
import { prisma } from "@/lib/db"
import RevalBtn from "@/components/btn/RevalBtn"

export async function getServerSideProps() {
  const imageList = await prisma.image.findMany()
  return { props: { imageList } }
}

const Images = ({ imageList }: {
  imageList: any
}) => {
  return (
    <div>
      {imageList.map((e, i) => <ImageCard key={i} url={e.src} />)}
      <RevalBtn />
    </div>
  )
}

export default Images
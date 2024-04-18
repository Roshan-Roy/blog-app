import ImageCard from "@/components/ImageCard"
import { prisma } from "@/lib/db"

export const dynamic = "force-dynamic"

const Images = async () => {
    const imageList = await prisma.image.findMany()
    return (
        <div>
            {imageList.map((e, i) => <ImageCard key={i} url={e.src} />)}
        </div>
    )
}

export default Images
import ImageCard from "@/components/ImageCard"
import { prisma } from "@/lib/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

const Images = async () => {
    const session = await getServerSession(authOptions)
    const imageList = await prisma.image.findMany({
        where: {
            userId: session?.user.id
        }
    })
    return (
        <div>
            {imageList.map((e, i) => <ImageCard key={i} url={e.src} />)}
        </div>
    )
}

export default Images
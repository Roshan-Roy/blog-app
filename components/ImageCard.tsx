import Image from "next/image"

const ImageCard = ({ url }: { url: string | null }) => {
    return (
        <div>
            <Image src={url as string} alt="Image" width={250} height={250}/>
        </div>
    )
}

export default ImageCard
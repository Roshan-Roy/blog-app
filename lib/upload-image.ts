import cloudinary from "./cloudinary"

export const uploadImage = async (file: File, folder: string) => {

    const buffer = await file.arrayBuffer()
    const bytes = Buffer.from(buffer)

    return new Promise(async (res, rej) => {
        cloudinary.uploader.upload_stream({
            resource_type: "image",
            folder
        }, (err, result) => {
            if (err) {
                rej(err.message)
            }
            res(result)
        }).end(bytes)
    })
}
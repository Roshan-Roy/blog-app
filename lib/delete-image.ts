import cloudinary from "./cloudinary"

export const deleteImage = (imagePublicId: string) => {
    return new Promise(async (res, rej) => {
        try {
            await cloudinary.uploader.destroy(imagePublicId)
            res("Image deleted")
        } catch (e: any) {
            rej("An error occurred")
        }
    })
}
"use server"

import { revalidatePath } from "next/cache"

export const reval = () => {
    revalidatePath("/images")
}
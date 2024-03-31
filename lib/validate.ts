import { z } from "zod"

export const blogSchema = z.object({
    title: z.string().trim().min(1, {
        message: "Title is required"
    }).max(10, {
        message: "maximum length for title is 10"
    }).refine(data => data.length >= 3, "Minimum length for title is 3"),
    body: z.string().trim().min(1, {
        message: "Body is required"
    }).max(100, {
        message: "maximum length for body is 100"
    }).refine(data => data.length >= 3,"Minimum length for body is 3")
})

"use client"

import { addBlog } from "@/actions/actions";
import Card from "./Card"
import SubmitBtn from "./SubmitBtn"
import toast from "react-hot-toast"
import { useOptimistic } from "react"


type BlogType = {
    id: number;
    title: string;
    body: string;
}

const TodoComponent = ({ blogs }: { blogs: BlogType[] }) => {
    const [optimisticBlogs, addOptimisticBlog] = useOptimistic(blogs, (state, newBlog: BlogType) => {
        return [...state, newBlog]
    })
    return (
        <>
            <form action={
                async (formData) => {
                    addOptimisticBlog({
                        id: Math.random(),
                        title: formData.get("title") as string,
                        body: formData.get("body") as string
                    })
                    const result = await addBlog(formData)
                    if (result?.error) {
                        toast.error("Something went wrong")
                    } else {
                        toast.success("Blog added successfully")
                    }
                }
            }>
                <input name="title" type="text" placeholder="Title" />
                <br />
                <input name="body" type="text" placeholder="Body" />
                <br />
                <SubmitBtn />
            </form>
            {optimisticBlogs.map(e => <Card key={e.id} {...e} />)}
        </>
    )
}

export default TodoComponent
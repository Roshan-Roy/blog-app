"use client"

import { addBlog } from "@/actions/actions"
import Card from "./Card"
import { useFormState } from "react-dom"
import SubmitBtn from "./SubmitBtn"

type BlogType = {
    id: string;
    title: string;
    body: string;
}

const initialState = {
    titleError: "",
    bodyError: ""
}

const TodoComponent = ({ blogs }: { blogs: BlogType[] }) => {
    const [state, formAction] = useFormState(addBlog, initialState)
    return (
        <>
            <form action={formAction}>
                <input name="title" type="text" placeholder="Title" />
                <br />
                {state?.titleError && <p>{state.titleError}</p>}
                <input name="body" type="text" placeholder="Body" />
                <br />
                {state?.bodyError && <p>{state.bodyError}</p>}
                <SubmitBtn/>
            </form>
            {blogs.map(e => <Card key={e.id} {...e} />)}
        </>
    )
}

export default TodoComponent
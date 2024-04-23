"use server"

export const addBlogAction = ({ title, content, category }: {
    title: string;
    content: string;
    category: string;
}) => {
    console.log(title, content, category)
}
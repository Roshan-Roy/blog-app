"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const Home = () => {
  const router = useRouter()
  const [image, setImage] = useState<File | null>(null)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files)
      setImage(e.target.files[0])
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!image) {
      console.log("Select a file")
      return
    }
    const formData = new FormData()
    formData.append("image", image)

    const response = await fetch("/api/upload-image", {
      method: "POST",
      body: formData
    })

    const result = await response.json()

    router.push("/images")
    router.refresh()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <br />
        <button>Upload</button>
      </form>
    </>
  )
}

export default Home
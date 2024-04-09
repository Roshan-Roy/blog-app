"use client"
import { useSession } from "next-auth/react"


const Btn = () => {
    const { data: session } = useSession()
    const handleClick = () => {
        
    }
    return (
        <button onClick={handleClick}>Click Me</button>
    )
}

export default Btn
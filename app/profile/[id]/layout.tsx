import Scroller from "@/components/scroller/Scroller"

const layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <>
            {children}
            <Scroller />
        </>
    )
}

export default layout
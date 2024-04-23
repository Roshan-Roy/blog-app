import styles from "./category.module.css"

const Category = ({ name, current, func }: {
    name: string;
    current: string;
    func: (name: string) => void;
}) => {
    return (
        <p className={name === current ? `${styles.container} ${styles.current}` : styles.container} onClick={() => func(name)}> {name}</p >
    )
}

export default Category
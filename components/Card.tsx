import styles from "./card.module.css"

const Card = ({ title, body }: {
    title: string;
    body: string;
}) => {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Card
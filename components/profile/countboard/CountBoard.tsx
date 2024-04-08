import React from 'react'
import styles from "./countboard.module.css"

const CountBoard = ({ name, count }: {
    name: string,
    count: number
}) => {
    return (
        <div className={styles.container}>
            <h3>{count}</h3>
            <p>{name}</p>
        </div>
    )
}

export default CountBoard
"use client"

import { useState, useEffect } from 'react'
import styles from "./scroller.module.css"
import { FaArrowUp } from "react-icons/fa"

const Scroller = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        setIsVisible(window.scrollY > 200)
    };

    useEffect(() => {
        window.scrollTo(0, 0)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    return (
        <>
            {isVisible ? <button onClick={scrollToTop} className={styles.btn}><FaArrowUp /></button> : null}
        </>
    )
};

export default Scroller
"use client"
import styles from "./ToggleTheme.module.css";
import { useRef, useState } from "react";

export default function ThemeToggle() {
    const [darkTheme, setTheme] = useState(true);
    //const body = document.querySelector("body")

    const themeToggle = () => {
        setTheme(!darkTheme)
        //body.classList.toggle("light")

    }


    return (
            <button
            onClick={() => themeToggle()}
            id="themeToggle"
            className={`${styles.toggleButton} ${darkTheme ? styles.btnLight : null}`}
            >
            <div
            id="toggle"
            className={`${styles.toggle} ${darkTheme ? styles.light : null}`}
            ></div>
            </button>
           );
}

"use client";
import { useState, useRef } from "react";
import styles from "./Terminal.module.css";

export default function Terminal() {
  const cliInterface = useRef(null);

  const [cli, setCli] = useState("");

  const handleInput = (event) => {
    setCli(event.target.value);
  };

  const handleFocus = () => {
    cliInterface.current.focus();
  };

  return (
    <>
      <div className={styles.terminal}>
        <textarea
          ref={cliInterface}
          autoFocus
          name="interface"
          onChange={handleInput}
          className={styles.interface}
        />
        <div className={styles.commandLine} onClick={handleFocus}>
          <span className={styles.prompt}>{cli}</span>
          <b className={styles.cursor}>█</b>
        </div>
      </div>
    </>
  );
}

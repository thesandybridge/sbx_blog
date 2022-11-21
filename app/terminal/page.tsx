"use client";
import { useState, useRef } from "react";
import styles from "./Terminal.module.css";
import { commands } from "utils/terminal_commands";

export default function Page() {
  const cliInterface = useRef(null);

  const [cli, setCli] = useState("");
  const [command, setCommand] = useState([]);

  const handleInput = (event) => {
    setCli(event.target.value);
  };

  const handleFocus = () => {
    cliInterface.current.focus();
  };

  return (
    <>
      <div className={styles.terminal} onClick={handleFocus}>
        <textarea
          ref={cliInterface}
          autoFocus
          name="interface"
          onChange={handleInput}
          className={styles.interface}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const c = commands(cli);
              console.log(c);
              setCommand(c);
            }
          }}
        />
        <div className={styles.commandLine}>
          <span className={styles.prompt}>{cli}</span>
          <b className={styles.cursor}>█</b>
          {command.length > 0 &&
            command.map((c, i) => (
              <p className="styles.command" key={i}>
                {c}
              </p>
            ))}
        </div>
      </div>
    </>
  );
}

import styles from "./Terminal.module.css";

export default function Terminal() {
  return (
    <>
      <div className={styles.terminal}>
        <input type="text" name="interface" className={styles.interface} />
      </div>
    </>
  );
}

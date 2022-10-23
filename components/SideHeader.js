import React from "react";
import styles from "../styles/SideHeader.module.scss";

export default function SideHeader({ label, next_label }) {
  return (
    <div className={styles.side_header}>
      <div className={styles.verticle_hr} />
      <div className={styles.labels}>
        <p className={styles.label}>{label}</p>
        <p className={styles.next_label}>{next_label}</p>
      </div>
    </div>
  );
}

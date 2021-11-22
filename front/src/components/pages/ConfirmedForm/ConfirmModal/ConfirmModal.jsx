import React from "react";
import styles from "./style.module.css";

export default function ConfirmModal({ toggleModal }) {
  const handleEnd = () => {};

  return (
    <div className={styles.Modal}>
      <h1>Are you sure?</h1>
      <button onClick={toggleModal}>No</button>
      <button onClick={toggleModal}>Yes,event is done.</button>
    </div>
  );
}

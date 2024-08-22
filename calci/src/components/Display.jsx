import React from "react";
import styles from "./Display.module.css";

function Display({ displayval }) {
  return (
    <div>
      <input
        className={styles.display}
        type="text"
        value={displayval}
        readOnly
      ></input>
    </div>
  );
}

export default Display;

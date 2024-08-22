import React from "react";
import styles from "./Foodinput.module.css";

function Foodinput({ handlekeydown }) {
  return (
    <div>
      <input
        type="text"
        placeholder="enter food item here"
        className={styles.foodinput}
        onKeyDown={handlekeydown}
      ></input>
    </div>
  );
}

export default Foodinput;

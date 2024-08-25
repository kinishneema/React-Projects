import React from "react";
import styles from "./Buttons.module.css";

function Buttons({ onbuttonclick }) {
  const buttonname = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div>
      <div className={styles.buttoncontainer}>
        {buttonname.map((buttonname) => (
          <button
            className={styles.button}
            onClick={() => onbuttonclick(buttonname)}
          >
            {buttonname}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Buttons;

import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <h1 className={styles.todoheading}>Todo App</h1>
    </div>
  );
}

export default Header;

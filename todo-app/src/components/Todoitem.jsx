import React from "react";
import Todoitems from "./Todoitems";
import styles from "./Todoitem.module.css";

function Todoitem({ todoitems, ondeleteclick }) {
  return (
    <div>
      <div className={styles.itemcontainer}>
        {todoitems.map((item) => (
          <Todoitems
            key={item.name}
            todoname={item.name}
            tododate={item.date}
            ondeleteclick={ondeleteclick}
          ></Todoitems>
        ))}
      </div>
    </div>
  );
}

export default Todoitem;

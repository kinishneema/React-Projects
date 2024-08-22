import React from "react";
import "../App.css";

function Item({ fooditem, bought, handlebuybutton }) {
  return (
    <div>
      <li class={`"kg-item" list-group-item ${bought && "active"}`}>
        <span className={"kg-span"}>{fooditem}</span>
        <button className={`button btn btn-info `} onClick={handlebuybutton}>
          buy
        </button>
      </li>
    </div>
  );
}

export default Item;

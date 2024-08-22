import React, { useState } from "react";
import Item from "./Item";

function Fooditems({ items }) {
  let [activeitems, setactiveitems] = useState([]);
  let onbuybutton = (item, event) => {
    let newitems = [...activeitems, item];
    setactiveitems(newitems);
  };
  return (
    <div>
      <ul class="list-group">
        {items.map((item) => (
          <Item
            key={item}
            fooditem={item}
            bought={activeitems.includes(item)}
            handlebuybutton={(event) => onbuybutton(item, event)}
          ></Item>
        ))}
      </ul>
    </div>
  );
}

export default Fooditems;

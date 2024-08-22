import React from "react";

function ErrorMes({ items }) {
  return <div>{items.length === 0 ? <h3>i am hungry</h3> : null}</div>;
}

export default ErrorMes;

import React from "react";

function Time() {
  let time = new Date();
  return (
    <div>
      <p className="lead">
        this is the current time:{time.toLocaleDateString()}-
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default Time;

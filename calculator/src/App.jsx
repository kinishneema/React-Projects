import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
  const [calval, setcalval] = useState("");
  const onbuttonclick = (buttontext) => {
    console.log(buttontext);
    if (buttontext === "C") {
      setcalval("");
    } else if (buttontext === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      const newdisplayvalue = calval + buttontext;
      setcalval(newdisplayvalue);
    }
  };
  return (
    <div className={styles.calci}>
      <Display displayval={calval}></Display>
      <Buttons onbuttonclick={onbuttonclick}></Buttons>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Discrip from "./components/Discrip";
import Time from "./components/Time";

function App() {
  const [count, setCount] = useState(0);

  return (
    <center>
      <Header></Header>
      <Discrip></Discrip>
      <Time></Time>
    </center>
  );
}

export default App;

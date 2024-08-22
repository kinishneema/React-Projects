import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Fooditems from "./components/Fooditems";
import ErrorMes from "./components/ErrorMes";
import "./App.css";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
function App() {
  let [fooditems, setfooditems] = useState([]);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newfooditem = event.target.value;
      event.target.value = "";
      let newitems = [...fooditems, newfooditem];
      setfooditems(newitems);
    }
  };
  return (
    <>
      <Container>
        <h1 className="header">healthy-food</h1>
        <Foodinput handlekeydown={onKeyDown}></Foodinput>
        <ErrorMes items={fooditems}></ErrorMes>

        <Fooditems items={fooditems}></Fooditems>
      </Container>
    </>
  );
}

export default App;

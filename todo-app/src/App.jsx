import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/Todoitems";
import "./app.css";
import Todoitem from "./components/Todoitem";
import Welcomemessage from "./components/Welcomemessage";

function App() {
  const initialtodoitems = [
    {
      name: "buy milk",
      date: "4/12/2003",
    },
    {
      name: "go to college",
      date: "2/3/2004",
    },
    {
      name: "go to college",
      date: "2/3/2004",
    },
  ];
  const [todoitem, settodoitems] = useState([]);
  const handlenewitem = (itemname, itemduedate) => {
    // console.log(`new item added ${itemname} and date is ${itemduedate}`);
    const newtodoitems = [...todoitem, { name: itemname, date: itemduedate }];
    settodoitems(newtodoitems);
  };
  const handledelteitem = (todoitemname) => {
    const newtodoitems = todoitem.filter((item) => item.name != todoitemname);
    settodoitems(newtodoitems);
    console.log(`item deleted:${todoitemname}`);
  };
  return (
    <center className="todo-container">
      <Header></Header>
      <AddTodo onnewitem={handlenewitem}></AddTodo>
      {todoitem.length === 0 && <Welcomemessage></Welcomemessage>}
      <Todoitem todoitems={todoitem} ondeleteclick={handledelteitem}></Todoitem>
    </center>
  );
}

export default App;

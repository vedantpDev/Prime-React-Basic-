import "./App.css";
import React from "react";
import { Menubar } from "primereact/menubar";
import Counter from "./Components/Counter";
import Greet from "./Components/Greet";
import UserList from "./Components/UserList";

const App = () => {
  return (
    <div>
      {/* <Menubar
        className="bg-blue-500 p-3 text-white"
        start={"Prime React App"}
      /> */}
      {/* <Counter /> */}
      {/* <Greet /> */}
      <UserList />
    </div>
  );
};

export default App;

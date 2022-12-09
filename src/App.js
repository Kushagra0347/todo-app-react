import React from "react";
import ToDoList from "./Components/ToDoList";
//CSS
import "./App.css";

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <ToDoList id={1} index={0} />
    </div>
  );
}

export default App;

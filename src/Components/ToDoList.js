import React, { useEffect, useState } from "react";
import CreateTask from "../Modals/CreateTask";
import Card from "./Card";

function ToDoList({ id, index }) {
  const [isModal, setIsModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let array = localStorage.getItem("taskList");
    if (array) {
      let taskObj = JSON.parse(array);
      setTaskList(taskObj);
    }
  }, []);

  const toggle = () => {
    setIsModal(!isModal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
  };

  const deleteTask = (index) => {
    console.log("inside");
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  return (
    <>
      <CreateTask toggle={toggle} isModal={isModal} saveTask={saveTask} />
      <div className={"header"}>
        <h1>TaskDo</h1>
        <button className={"btn btn-primary"} onClick={toggle}>
          Create Task
        </button>
      </div>
      <div className={"task-container"}>
        {taskList.map((_) => {
          return (
            <Card
              key={id++}
              index={index++}
              taskList={taskList}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          );
        })}
      </div>
    </>
  );
}

export default ToDoList;

import React, { useState } from "react";
import Modal from "react-modal";
import "./CreateTask.css";
import { GrFormClose } from "react-icons/gr";

Modal.setAppElement("#root");

function CreateTask({ toggle, isModal, saveTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "todo-title") {
      setTaskTitle(value);
    }
    if (name === "todo-description") {
      setTaskDescription(value);
    }
  }

  const saveTodo = (e) => {
    e.preventDefault();

    let taskObj = {
      Title: taskTitle,
      Description: taskDescription,
    };
    saveTask(taskObj);
    toggle();
  };

  return (
    <Modal
      isOpen={isModal}
      className={"content"}
      overlayClassName={"overlay"}
      onRequestClose={toggle}
    >
      <div className={"title"}>
        <h1>Create Task</h1>
        <button className={"close-btn"} onClick={toggle}>
          <GrFormClose className={"close"} />
        </button>
      </div>
      <div className={"body"}>
        <form>
          <div className={"todo-title"}>
            <label>Title</label>
            <input
              type="text"
              placeholder={"Work"}
              onChange={handleChange}
              name={"todo-title"}
              id={"todo-title"}
            />
          </div>
          <div className={"todo-description"}>
            <label>Description</label>
            <textarea
              rows={"5"}
              placeholder={"Work till 17:00"}
              onChange={handleChange}
              name={"todo-description"}
              id={"todo-description"}
            />
          </div>
        </form>
      </div>

      <div className={"btn-container"}>
        <button onClick={saveTodo} className={"btn btn-primary"}>
          Create
        </button>
        <button className={"btn"}>Cancel</button>
      </div>
    </Modal>
  );
}

export default CreateTask;

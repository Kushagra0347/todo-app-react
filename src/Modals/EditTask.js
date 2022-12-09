// noinspection JSUnresolvedFunction

import React, { useState } from "react";
import Modal from "react-modal";
import "./CreateTask.css";
import { GrFormClose } from "react-icons/gr";

Modal.setAppElement("#root");

function EditTask({ toggle, isModal, updateTask, taskList, index }) {
  const [taskTitle, setTaskTitle] = useState(taskList[index].Title);
  const [taskDescription, setTaskDescription] = useState(
    taskList[index].Description
  );

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "todo-title") {
      setTaskTitle(value);
    }
    if (name === "todo-description") {
      setTaskDescription(value);
    }
  }

  const updateTodo = (e) => {
    e.preventDefault();
    let taskObj = {
      Title: taskTitle,
      Description: taskDescription,
    };
    updateTask(taskObj);
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
        <h1>Update Task</h1>
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
              value={taskTitle}
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
              value={taskDescription}
              onChange={handleChange}
              name={"todo-description"}
              id={"todo-description"}
            />
          </div>
        </form>
      </div>

      <div className={"btn-container"}>
        <button onClick={updateTodo} className={"btn btn-primary"}>
          Update
        </button>
        <button className={"btn"} onClick={toggle}>
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default EditTask;

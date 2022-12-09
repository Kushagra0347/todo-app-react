import React, { useState } from "react";
import EditTask from "../Modals/EditTask";
import "./Card.css";
import { BiTrash, FiEdit2 } from "react-icons/all";

const colors = [
  {
    primaryColor: "rgba(93, 147, 225, 1)",
    btnColor: "rgba(93, 147, 225, 0.7)",
    hoverColor: "rgba(93, 147, 225, 1)",
    shadowColor: "rgba(93, 147, 225, 0.3)",
    secondaryColor: "rgba(93, 147, 229, 0.1)",
  },
  {
    primaryColor: "hsla(16, 87%, 62%,1)",
    btnColor: "hsla(16, 87%, 62%,0.7)",
    hoverColor: "hsla(16, 87%, 62%,1)",
    shadowColor: "hsla(16, 87%, 62%,0.3)",
    secondaryColor: "hsla(16, 87%, 62%,0.09)",
  },
  {
    primaryColor: "rgba(93, 194, 80, 1)",
    btnColor: "rgba(93, 194, 80, 0.6)",
    hoverColor: "rgba(93, 194, 80, 1)",
    shadowColor: "rgba(93, 194, 80, 0.3)",
    secondaryColor: "rgba(93, 194, 80, 0.08)",
  },
  {
    primaryColor: "rgba(244, 134, 135, 1)",
    btnColor: "rgba(244, 134, 135, 0.7)",
    hoverColor: "rgba(244, 134, 135, 1)",
    shadowColor: "rgba(244, 134, 135, 0.3)",
    secondaryColor: "rgba(244, 134, 135, 0.08)",
  },
  {
    primaryColor: "rgba(185, 100, 247, 1)",
    btnColor: "rgba(177,79,243,0.8)",
    hoverColor: "rgba(177,79,243,1)",
    shadowColor: "rgba(177,79,243,0.3)",
    secondaryColor: "rgba(185, 100, 247, 0.07)",
  },
];

function Card({ taskList, index, deleteTask, updateListArray }) {
  const [isModal, setIsModal] = useState(false);

  function toggle() {
    setIsModal(!isModal);
  }

  function changeColor(e) {
    e.target.style.color = colors[index % 5].hoverColor;
  }

  function actualColor(e) {
    e.target.style.color = colors[index % 5].btnColor;
  }

  function updateTask(obj) {
    updateListArray(obj, index);
  }

  return (
    <div
      className="card-wrapper mr-5"
      style={{ boxShadow: `0 0 1.5rem ${colors[index % 5].shadowColor}` }}
    >
      <div
        className="card-top"
        style={{ backgroundColor: colors[index % 5].primaryColor }}
      />
      <div className="task-holder">
        <span
          className="card-header"
          style={{
            backgroundColor: colors[index % 5].secondaryColor,
            borderRadius: "10px",
          }}
        >
          {taskList[index].Title}
        </span>
        <p>{taskList[index].Description}</p>
        <div style={{ position: "absolute", right: "13px", bottom: "6px" }}>
          <FiEdit2
            className={"btns edit-btn"}
            onMouseOver={changeColor}
            onMouseOut={actualColor}
            onClick={toggle}
            style={{
              color: colors[index % 5].btnColor,
            }}
          />
          <BiTrash
            className={"btns delete-btn"}
            onClick={() => deleteTask(index)}
          />
        </div>
      </div>
      <EditTask
        isModal={isModal}
        toggle={toggle}
        updateTask={updateTask}
        taskList={taskList}
        index={index}
      />
    </div>
  );
}

export default Card;

import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ tasks, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${tasks.remider && "reminder"}`}
      onDoubleClick={() => onToggle(tasks.id)}
    >
      <h3>
        {tasks.text}{" "}
        <FaTimes className="deleteIcons" onClick={() => onDelete(tasks.id)} />
      </h3>
      <p>{tasks.day}</p>
    </div>
  );
};

export default Task;

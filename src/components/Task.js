import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ tasks, onDelete }) => {
  return (
    <div className="task">
      <h3 key={tasks.key}>
        {tasks.text}{" "}
        <FaTimes className="deleteIcons" onClick={() => onDelete(tasks.id)} />
      </h3>
      <p>{tasks.day}</p>
    </div>
  );
};

export default Task;

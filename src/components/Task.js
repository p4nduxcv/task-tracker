import React from "react";

const Task = ({ tasks }) => {
  return (
    <div className="task">
      <h3 key={tasks.key}>{tasks.text}</h3>
    </div>
  );
};

export default Task;

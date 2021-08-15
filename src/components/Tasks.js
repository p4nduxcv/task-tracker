import React from "react";

const tasks = [
  {
    id: 1,
    text: "Doctor Appointment",
    day: "Feb 5th of 2.30pm",
    remider: true,
  },
  {
    id: 2,
    text: "Doctor Appointment2",
    day: "Feb 5th of 2.30pm",
    remider: false,
  },
  {
    id: 3,
    text: "Doctor Appointment3",
    day: "Feb 5th of 2.30pm",
    remider: true,
  },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;

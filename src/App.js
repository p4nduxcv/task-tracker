import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
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
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

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

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...tasks, remider: !t.remider } : t))
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" /> <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p>Nothing else Matters</p>
      )}
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import axios from "axios";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then(() => alert("Delete Successfully"));
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...tasks, remider: !t.remider } : t))
    );
  };

  const addTask = (task) => {
    console.log(task);
  };

  // Fetch Task
  const gettasks = () => {
    axios.get("http://localhost:5000/tasks").then((res) => {
      console.log(res);
      setTasks(res.data);
    });
  };

  // Useeffect Hooks to Display all datas
  useEffect(() => {
    gettasks();
  }, []);

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p>Nothing else Matters</p>
      )}
    </div>
  );
}

export default App;

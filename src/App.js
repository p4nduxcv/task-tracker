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
    gettasksById(id);
    axios.put(`http://localhost:5000/tasks/${id}`);
    setTasks(
      tasks.map((t) => (t.id === id ? { ...tasks, remider: !t.remider } : t))
    );
  };

  const addTask = (task) => {
    axios
      .post("http://localhost:5000/tasks", task)
      .then((res) => alert("Task Added"));
    console.log(task);
  };

  // Fetch task by Id
  const gettasksById = (id) => {
    axios.get(`http://localhost:5000/tasks/${id}`).then((res) => {
      console.log(res.data);
      return res.data;
    });
  };

  // Fetch Task
  const gettasks = () => {
    axios.get(`http://localhost:5000/tasks`).then((res) => {
      console.log(res.data);
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

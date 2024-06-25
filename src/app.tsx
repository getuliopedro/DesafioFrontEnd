import React, { useState } from "react";
import TodoTask from "./components/TodoTask";

interface ITask {
  id: number;
  nameTask: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);

  function addTask() {
    const idRandom = (num: number) => Math.floor(Math.random() * num);
    const newTask = { id: idRandom(999999999), nameTask: tasks, completed: false };
    setTodoList([...todoList, newTask]);
    setTasks("");
  }

  function deleteTask(taskId: number) {
    const newTodoList = todoList.filter(task => task.id !== taskId);
    setTodoList(newTodoList);
  }

  function markAsDone(taskId: number) {
    const newTodoList = todoList.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTodoList(newTodoList);
  }

  function clearTasks() {
    setTodoList([]);
  }

  function saveTasks() {
    // Add functionality to save tasks if needed
    alert("Tasks saved!");
  }

  return (
    <div className="App">
      <header>
        <h2>Lists</h2>
        <input
          type="text"
          placeholder="Enter task"
          name="task"
          value={tasks}
          onChange={(event) => setTasks(event.target.value)}
        />
        <button type="submit" onClick={addTask} className="btn-header">
          Add Task
        </button>
      </header>
      <div className="line"></div>
      <div className="task-list">
        {todoList.map(task => (
          <div key={task.id} className={`task ${task.completed ? "completed" : ""}`}>
            <input
              type="checkbox"
              checked={task === selectedTask}
              onChange={() => setSelectedTask(task)}
            />
            <TodoTask task={task} deleteTask={deleteTask} />
            <button onClick={() => markAsDone(task.id)}>Mark as {task.completed ? "Undone" : "Done"}</button>
          </div>
        ))}
      </div>
      <div className="task-actions">
        <button onClick={saveTasks}>Save Tasks</button>
        <button onClick={clearTasks}>Clear All</button>
      </div>
    </div>
  );
}

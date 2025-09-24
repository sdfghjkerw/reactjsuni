import React, { useState, useRef, useCallback, useEffect } from "react";
import Todolist from "./components/todolist.jsx";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // добавление задачи
  const addTask = useCallback(() => {
    const text = inputRef.current.value.trim();
    if (!text) return;
    const newTask = { id: Date.now(), text, completed: false };
    setTasks((prev) => [...prev, newTask]);
    inputRef.current.value = "";
    inputRef.current.focus();
  }, []);

  // выполнено/не выполнено
  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  // удаление задачи
  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  // фильтрация
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const total = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="main">
      <h1>todo list</h1>

      <div className="inputs">
        <input type="text" placeholder="введите задачу" ref={inputRef} />
        <button onClick={addTask}>добавить задачу!</button>
      </div>

      <div className="filters">
        <button onClick={() => setFilter("all")}>все</button>
        <button onClick={() => setFilter("completed")}>выполненные задачи</button>
        <button onClick={() => setFilter("active")}>активные задачи</button>
      </div>

      <h2>всего: {total}, выполнено: {completedCount}</h2>

      <Todolist
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

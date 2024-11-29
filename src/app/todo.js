"use client";
import "./style.css";
import { useState } from "react";
export default function TodoList() {
  const [task, setTask] = useState(["Hool ideh", "Us uuh"]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {}
  function deleteTask(index) {}
  function editTask() {}
  return (
    <div className="">
      <h1>ToDo list </h1>
      <div>
        {" "}
        <input
          type="text"
          placeholder="Enter the task..."
          value={newTask}
          onChange={handleInputChange}
        ></input>
        <button className="addButton" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        {task.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="editButton" onClick={() => editTask(index)}>
              ✏️
            </button>
            <button className="deleteButton" onClick={() => deleteTask(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";
import "./style.css";
import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(""); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [editedTask, setEditedTask] = useState("");
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask(""); 
    }
  }
  function deleteTask(index) {
    const updatedTasks = [...tasks]; 
    updatedTasks.splice(index, 1); 
    setTasks(updatedTasks);
  }

  function openModal(task) {
    setEditedTask(task);
    setIsModalOpen(true); 
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  function saveTask() {
    if (editedTask !== "") {
      const updatedTasks = tasks.map((task) => 
        task === editedTask ? editedTask : task
      );
      setTasks(updatedTasks); 
      setIsModalOpen(false); 
    }
  }

  return (
    <div className="todoContainer">
      <h1 className="title">ToDo List</h1>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Enter the task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="addButton" onClick={addTask}>
          Add
        </button>
      </div>
      <ul className="taskList">
        {tasks.map((task, index) => (
          <li key={index} className="taskItem">
            <span className="taskText">{task}</span>
            <button className="editButton" onClick={() => openModal(task)}>
              ✏️
            </button>
            <button className="deleteButton" onClick={() => deleteTask(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h2 className="modalTitle">Edit Task</h2>
            <input
              type="text"
              className="modalInput"
              value={editedTask}
              onClick={(event) => setEditedTask(event.target.value)}
            />
            <div className="modalButtonContainer">
              <button className="modalButton" onClick={saveTask}>
                Save
              </button>
              <button className="modalButton" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
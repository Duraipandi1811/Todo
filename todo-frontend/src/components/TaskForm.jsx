import { useState } from "react";
import api from "../api";
import { toast } from "react-toastify";

const TaskForm = ({ refresh }) => {
  const [title, setTitle] = useState("");

  const createTask = async (e) => {
    e.preventDefault();
    try {
      await api.post("/tasks", { title });
      setTitle("");
      refresh();
      toast.success("Task added!");
    } catch {
      toast.error("Failed to add task");
    }
  };

  return (
    <form onSubmit={createTask} className="flex gap-2">
      <input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task" 
        className="border p-2 flex-1" 
      />
      <button className="bg-blue-600 text-white px-4">Add</button>
    </form>
  );
};

export default TaskForm;

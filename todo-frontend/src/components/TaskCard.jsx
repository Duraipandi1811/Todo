import api from "../api";
import { toast } from "react-toastify";

const TaskCard = ({ task, refresh }) => {
  const toggleComplete = async () => {
    try {
      await api.put(`/tasks/${task._id}`, { 
        status: task.status === "complete" ? "in-progress" : "complete" 
      });
      refresh();
    } catch {
      toast.error("Could not update task");
    }
  };

  const deleteTask = async () => {
    try {
      await api.delete(`/tasks/${task._id}`);
      refresh();
    } catch {
      toast.error("Could not delete task");
    }
  };

  return (
    <div className="border p-4 my-2 flex justify-between items-center">
      <div>
        <h4 className="font-bold">{task.title}</h4>
        <p className="text-sm">{task.status}</p>
      </div>
      <div className="flex gap-2">
        <button 
          onClick={toggleComplete} 
          className="bg-yellow-500 text-white px-2"
        >
          Toggle
        </button>
        <button 
          onClick={deleteTask} 
          className="bg-red-600 text-white px-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

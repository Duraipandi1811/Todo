import React from 'react';

const AddTask = () => {
  return (
    <div className="container py-5">
      <h3 className="mb-4">Add Task</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Task Title</label>
          <input type="text" className="form-control" placeholder="Enter task title" />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea 
            className="form-control" 
            rows="3" 
            placeholder="Enter task description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="form-label">Due Date</label>
          <input type="date" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;

import React from 'react';

const Overview = () => {
  return (
    <div>
      <h3 className="mb-4">Dashboard Overview</h3>
      <p className="text-muted">
        Welcome to your task management dashboard. Here you can quickly see a summary of your tasks, upcoming deadlines, and recent activity.
      </p>

      <div className="row mt-4">
        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow-sm">
            <h5>Total Tasks</h5>
            <p className="fs-4">24</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow-sm">
            <h5>Completed</h5>
            <p className="fs-4">12</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow-sm">
            <h5>Pending</h5>
            <p className="fs-4">12</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h5>Recent Activity</h5>
        <ul className="list-group mt-3">
          <li className="list-group-item">Marked "Project Report" as completed</li>
          <li className="list-group-item">Added new task "Grocery Shopping"</li>
          <li className="list-group-item">Updated due date for "Pay Bills"</li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;

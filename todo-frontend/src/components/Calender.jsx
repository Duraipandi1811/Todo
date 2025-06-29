import React from 'react';

const Calendar = () => {
  return (
    <div>
      <h3 className="mb-4">Calendar</h3>
      <p className="text-muted">
        View and manage your tasks by date. Plan ahead and keep track of deadlines.
      </p>

      <div className="card p-4 shadow-sm mt-4">
        <h5 className="mb-3">Upcoming Events</h5>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Project Report Due</span>
            <span className="badge bg-primary rounded-pill">July 2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Doctor Appointment</span>
            <span className="badge bg-primary rounded-pill">July 5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Pay Electricity Bill</span>
            <span className="badge bg-primary rounded-pill">July 7</span>
          </li>
        </ul>
      </div>

      <div className="mt-5">
        <h5>Month View (Coming Soon)</h5>
        <div className="p-5 text-center border rounded text-muted">
          Calendar visualization placeholder.
        </div>
      </div>
    </div>
  );
};

export default Calendar;

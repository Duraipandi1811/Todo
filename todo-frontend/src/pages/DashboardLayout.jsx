import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Sidebar */}
      <div className="bg-white p-3 border-end" style={{ width: "220px" }}>
        <h5 className="mb-4">Task App</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <NavLink className="nav-link" to="overview">
              <i className="bi bi-grid me-2"></i> Dashboard
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink className="nav-link" to="tasks">
              <i className="bi bi-list-task me-2"></i> Tasks
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink className="nav-link" to="calendar">
              <i className="bi bi-calendar me-2"></i> Calendar
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink className="nav-link" to="notes">
              <i className="bi bi-sticky me-2"></i> Notes
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink className="nav-link" to="settings">
              <i className="bi bi-gear me-2"></i> Settings
            </NavLink>
          </li>
        </ul>
        <button className="btn btn-primary w-100 mt-auto">New Task</button>
      </div>

      {/* Main content area */}
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;


{/* <div className="flex-grow-1 p-4">
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h3>Tasks</h3>
    <button className="btn btn-outline-secondary">New Task</button>
  </div>
  <ul className="nav nav-tabs mb-4">
    <li className="nav-item">
      <a className="nav-link active" href="#">All</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Completed</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Incomplete</a>
    </li>
  </ul>

  <div>
    <div className="mb-3">
      <h5>Grocery Shopping</h5>
      <small className="text-muted">Buy groceries for the week</small>
    </div>
    <div className="mb-3">
      <h5>Project Report</h5>
      <small className="text-muted">Finish the project report</small>
    </div>
    <div className="mb-3">
      <h5>Book Appointment</h5>
      <small className="text-muted">Book a doctor's appointment</small>
    </div>
    <div className="mb-3">
      <h5>Pay Bills</h5>
      <small className="text-muted">Pay all the pending bills</small>
    </div>
  </div>
</div> */}
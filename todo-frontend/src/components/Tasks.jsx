const Tasks = () => (
  <>
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
      {/* example content */}
      <div className="mb-3"><h5>Sample Task</h5><small>Details here</small></div>
    </div>
  </>
);

export default Tasks;

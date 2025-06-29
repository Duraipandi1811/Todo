import React from 'react';

const Notes = () => {
  return (
    <div>
      <h3 className="mb-4">Notes</h3>
      <p className="text-muted">
        Jot down quick thoughts, reminders, or ideas here.
      </p>

      <div className="card p-4 shadow-sm mt-4">
        <h5 className="mb-3">My Notes</h5>
        <ul className="list-group">
          <li className="list-group-item">
            Remember to email the project files to the client.
          </li>
          <li className="list-group-item">
            Check grocery list before Saturday.
          </li>
          <li className="list-group-item">
            Plan weekend trip with family.
          </li>
        </ul>
      </div>

      <div className="mt-5">
        <button className="btn btn-primary">Add New Note</button>
      </div>
    </div>
  );
};

export default Notes;

import React from 'react';

const Settings = () => {
  return (
    <div>
      <h3 className="mb-4">Settings</h3>
      <p className="text-muted">
        Manage your account preferences and sharing options.
      </p>

      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Email Notifications</label>
          <select className="form-select">
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Share your tasks list</label>
          <div className="d-flex">
            <input type="email" className="form-control me-2" placeholder="Friend's email" />
            <button type="button" className="btn btn-primary">Share</button>
          </div>
        </div>
        <button type="submit" className="btn btn-success mt-3">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;

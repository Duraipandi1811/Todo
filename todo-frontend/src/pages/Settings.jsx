import React from 'react';

const Settings = () => {
  return (
    <div className="container py-5">
      <h3 className="mb-4">Settings</h3>
      <form className="d-flex align-items-center">
        <input 
          type="email" 
          className="form-control me-3" 
          placeholder="Email" 
          style={{ maxWidth: "300px" }} 
        />
        <button type="button" className="btn btn-primary">Share</button>
      </form>
    </div>
  );
};

export default Settings;

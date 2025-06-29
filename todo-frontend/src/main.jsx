import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import Dashboard from "./pages/Dashboard";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //     <Route path="/login" element={<LoginPage />} />
  //     <Route path="/signup" element={<SignupPage />} />
  //     <Route path="/dashboard" element={<Dashboard />} />
  //   </Routes>
  // </BrowserRouter>
);

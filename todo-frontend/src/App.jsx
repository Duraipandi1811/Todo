import React from "react";
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardLayout from "./pages/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import Tasks from "./components/Tasks";
import Overview from "./components/Overview";
import Calendar from "./components/Calender";
import Notes from "./components/Notes";
import Settings from "./components/Settings"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<DashboardLayout />} >
          <Route path="tasks" element={<Tasks />} />
          <Route path="overview" element={<Overview />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="notes" element={<Notes />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

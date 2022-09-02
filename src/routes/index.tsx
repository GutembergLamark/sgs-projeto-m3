import Register from "../pages/Register";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import DashboardDoctor from "../pages/DashboardDoctor";
import { DashboardPacient } from "../pages/DashboardPacient";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/doctor" element={<DashboardDoctor />} />
      <Route path="/dashboard/patient" element={<DashboardPacient />} />
    </Routes>
  );
};

export default Router;

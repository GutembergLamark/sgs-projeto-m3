import Register from "../pages/Register";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import DashboardDoctor from "../pages/DashboardDoctor";
import { DashboardPaciente } from "../pages/DashboardPaciente";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/doctor" element={<DashboardDoctor />} />
      <Route path="/dashboard/patient" element={<DashboardPaciente />} />
    </Routes>
  );
};

export default Router;

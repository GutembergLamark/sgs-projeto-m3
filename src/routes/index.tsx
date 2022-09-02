import Register from "../pages/Register";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DashboardDoctor from "../pages/DashboardDoctor";
import { DashboardPacient } from "../pages/DashboardPacient";
import { PageAllergiesPacient } from "../pages/PageAllergiesPacient";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/doctor" element={<DashboardDoctor />} />
      <Route path="/dashboard/patient" element={<DashboardPacient />} />
      <Route
        path="/dashboard/patient/alergias"
        element={<PageAllergiesPacient />}
      />
    </Routes>
  );
};

export default Router;

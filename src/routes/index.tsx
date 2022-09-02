import Register from "../pages/Register";
import { Routes, Route } from "react-router-dom";
import DashboardDoctor from "../pages/DashboardDoctor";
import { HomePaciente } from "../pages/HomePaciente";

const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<login/>}/> */}
      <Route path="/register" element={<Register />} />
      {/* <Route path="/dashboard">
        <Route path="/doctor" element={<DashboardDoctor />}>
          <Route path=":id" />
        </Route>
        <Route path="/patient" element={<HomePaciente />} />
      </Route> */}
      <Route path="/dashboard/doctor" element={<DashboardDoctor />} />
      <Route path="/dashboard/patient" element={<HomePaciente />} />
    </Routes>
  );
};

export default Router;

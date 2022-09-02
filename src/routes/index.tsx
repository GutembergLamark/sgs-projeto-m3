import Register from "../pages/Register";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";

const Router = () => {
  <Routes>
    <Route path="/login" element={ <Login />}/>
    <Route path="/register" element={<Register />} />
  </Routes>;
};

export default Router;


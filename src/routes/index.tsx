import Register from "../pages/Register";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";

const Router = () => {
  <Routes>
    <Route path="/login" element={ <Login />}/>
    <Route path="/register" element={<Register />} />
  </Routes>;
};

export default Router;


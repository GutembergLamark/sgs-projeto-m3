import { Routes, Route} from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/Dashboard";
 const RoutesBrauser = ()=> {
    return (
      <Routes>
        <Route path="/" element={ <Login />}/>
        <Route path="/Dashboard" element={ <Dashboard /> } />
      </Routes> 
    );
}
export default RoutesBrauser;
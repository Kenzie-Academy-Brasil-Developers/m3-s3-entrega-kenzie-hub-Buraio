import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/register";
import DashboardPage from "../pages/dashboard";
import App from "../App";


const RouteMain = () => {
  return (
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
      </Route>
    </Routes>
  );
};

export default RouteMain;

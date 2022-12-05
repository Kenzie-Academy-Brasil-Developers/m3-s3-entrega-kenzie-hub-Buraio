import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/register";
import DashboardPage from "../pages/dashboard";
import LoginPage from "../pages/login";

const RouteMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default RouteMain;

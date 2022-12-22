import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/register";
import DashboardPage from "../pages/dashboard";
import LoginPage from "../pages/login";
import TechProvider from "../contexts/techContext";

const RouteMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <TechProvider>
            <DashboardPage />
          </TechProvider>
        }
      />
    </Routes>
  );
};

export default RouteMain;

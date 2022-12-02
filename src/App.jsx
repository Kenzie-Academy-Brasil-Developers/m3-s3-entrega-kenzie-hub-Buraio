import { useState } from "react";
import GlobalStyles from "./styles/global";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import DashboardPage from "./pages/dashboard";


function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <DashboardPage></DashboardPage>
    </div>
  );
}

export default App;

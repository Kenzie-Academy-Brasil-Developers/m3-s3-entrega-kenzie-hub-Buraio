import { useState } from "react";
import GlobalStyles from "./styles/global";
import LoginPage from "./pages/login";
import StyledContainer from "./styles/Container";

function App() {

  return (
    <div className="App">
      <GlobalStyles />
        <LoginPage></LoginPage>
    </div>
  );
}

export default App;

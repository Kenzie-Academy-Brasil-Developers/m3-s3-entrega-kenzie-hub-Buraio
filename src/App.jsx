import GlobalStyles from "./styles/global";
import RouteMain from "./routes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <RouteMain />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;

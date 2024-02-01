import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginScreen from "./views/LoginScreen";
import RegisterScreen from "./views/RegisterScreen";
import ErrorScreen from "./views/ErrorScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark vh-100">
        <div className="container h-100 ">
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="*" element={<ErrorScreen />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

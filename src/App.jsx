import { useState } from "react";
import LoginFormApp from "./components/LoginFormApp";
import RegisterFormApp from "./components/RegisterFormApp";
import "./App.css";

function App() {
  return (
    <div className="bg-dark vh-100">
      <div className="container h-100 ">
        <div className="row align-items-center h-100">
          <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white">
            <h3 className="text-center">Inicio de sesión</h3>
            <LoginFormApp />

            {/* <h3 className="text-center">Registro de usuario</h3>
            <RegisterFormApp /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

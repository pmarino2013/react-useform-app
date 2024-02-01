import React from "react";
import { Link } from "react-router-dom";
import LoginFormApp from "../components/LoginFormApp";

const LoginScreen = () => {
  return (
    <div className="row align-items-center h-100">
      <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white">
        <h3 className="text-center">Inicio de sesión</h3>
        <LoginFormApp />
        <div className="text-center mt-3">
          <small className="text-white">
            No tienes cuenta? registrate <Link to="/register">aquí</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

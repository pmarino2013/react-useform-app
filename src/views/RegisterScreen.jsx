import React from "react";
import RegisterFormApp from "../components/RegisterFormApp";

const RegisterScreen = () => {
  return (
    <div className="row align-items-center h-100">
      <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white">
        <h3 className="text-center">Registro de usuario</h3>
        <RegisterFormApp />
      </div>
    </div>
  );
};

export default RegisterScreen;

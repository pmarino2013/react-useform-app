import React from "react";

const ModalRegisterApp = ({ isRegisterChange }) => {
  return (
    <div className="overlay d-flex justify-content-center align-items-center ">
      <div className="card">
        <div className="d-flex justify-content-end p-1">
          <button className="btn btn-danger btn-sm" onClick={isRegisterChange}>
            x
          </button>
        </div>
        <div className="card-body">
          <h3>Registro de usuario exitoso!</h3>
        </div>
      </div>
    </div>
  );
};

export default ModalRegisterApp;

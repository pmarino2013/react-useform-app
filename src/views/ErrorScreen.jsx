import React from "react";

const ErrorScreen = () => {
  return (
    <div className="row align-items-center h-100">
      <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white">
        <h3 className="text-center">Not Found 😑</h3>
        <div className="text-center">
          <small>Volver a Login</small>
        </div>
      </div>
    </div>
  );
};

export default ErrorScreen;

import { useState } from "react";
import { useForm } from "react-hook-form";
import ModalRegisterApp from "./ModalRegisterApp";

const RegisterFormApp = () => {
  const [isValidPass, setIsValidPass] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const isRegisterChange = () => {
    setIsRegister(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    const { pass2, ...resto } = data;

    if (pass2 === resto.pass1) {
      setIsRegister(true);
      localStorage.setItem("user", JSON.stringify(resto));
      reset();
    } else {
      setIsValidPass(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label>Nombre</label>
          <input
            className="form-control"
            {...register("nombre", {
              required: {
                value: true,
                message: "El nombre es obligatorio",
              },
              minLength: {
                value: 5,
                message: "El nombre debe tener mínimo 5 caracteres",
              },
            })}
          />
          {errors.nombre && (
            <small role="alert" className="text-danger">
              ❌{errors.nombre.message}
            </small>
          )}
        </div>
        <div className="mb-3">
          <label>Correo electrónico</label>
          <input
            className="form-control"
            {...register("correo", {
              required: {
                value: true,
                message: "El correo es obligatorio",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "No cumple con las reglas de correo electrónico",
              },
            })}
          />
          {errors.correo && (
            <small role="alert" className="text-danger">
              ❌{errors.correo.message}
            </small>
          )}
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            {...register("pass1", {
              required: {
                value: true,
                message: "No puede dejar vacio este campo",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
                message:
                  "La contraseña debe contener MAYÚSCULAS, minúsculas, números y un símbolo $#-.",
              },
            })}
          />
          {errors.pass1 && (
            <small role="alert" className="text-danger">
              ❌{errors.pass1.message}
            </small>
          )}
        </div>
        <div className="mb-3">
          <label>Repetir Contraseña</label>
          <input
            type="password"
            className="form-control"
            {...register("pass2", {
              onChange: () => setIsValidPass(true),
              required: {
                value: true,
                message: "No puede dejar vacio este campo",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
                message:
                  "La contraseña debe contener MAYÚSCULAS, minúsculas, números y un símbolo $#-.",
              },
            })}
          />
          {errors.pass2 && (
            <small role="alert" className="text-danger">
              ❌{errors.pass2.message}
            </small>
          )}
          {isValidPass == false && (
            <small role="alert" className="text-danger">
              ❌La contraseña no coincide
            </small>
          )}
        </div>
        <div className="mb-3">
          <label>Género</label>
          <select className="form-control" {...register("gender")}>
            <option value="female">Femenino</option>
            <option value="male">Masculino</option>
            <option value="other">Otro</option>
          </select>
        </div>

        <div className="d-flex flex-column">
          <button className="btn btn-outline-success">Registrar</button>
        </div>
      </form>
      {isRegister && <ModalRegisterApp isRegisterChange={isRegisterChange} />}
    </div>
  );
};

export default RegisterFormApp;

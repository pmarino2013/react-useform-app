import { useForm } from "react-hook-form";

const LoginFormApp = () => {
  const {
    register, //->Este método le permite registrar una entrada o un elemento de selección y aplicar reglas de validación al formulario React Hook. Todas las reglas de validación se basan en el estándar HTML y también permiten métodos de validación personalizados.
    handleSubmit, //->Esta función recibirá los datos del formulario si la validación del formulario es exitosa.
    reset, //-> Restablezca todo el estado del formulario, la referencia de los campos y las suscripciones
    formState: { errors }, //->Este objeto contiene información sobre todo el estado del formulario. Le ayuda a mantenerse al tanto de la interacción del usuario con su aplicación de formulario.
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="fw-bold">Email</label>
          <input
            // type='email'
            className="form-control"
            defaultValue="test"
            {...register("correo", {
              required: {
                value: true,
                message: "No puede dejar vacio este campo",
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
          <label className="fw-bold">Password</label>
          <input
            type="password"
            className="form-control"
            {...register("pass", {
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

          {errors.pass && (
            <small className="text-danger">❌{errors.pass.message}</small>
          )}
        </div>
        <div className="d-flex flex-column mt-4">
          <button className="btn btn-outline-danger">Iniciar</button>
        </div>
      </form>
    </>
  );
};

export default LoginFormApp;

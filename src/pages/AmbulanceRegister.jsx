import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ambulanceRegisterSchema } from "../components/formschema/registerSchema.js";
function AmbulanceRegister() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(ambulanceRegisterSchema)
  });

  function onSubmit(data) {
    console.log("Ambulance Registration Details:", data);
  }

  return (
    <div>
      <h1>Ambulance Service Registration</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Ambulance Service Name</label>

        <input
          type="text"
          {...register("serviceName")}
        />

        <p>{errors.serviceName?.message}</p>

        <label>Email</label>

        <input
          type="email"
          {...register("email")}
        />

        <p>{errors.email?.message}</p>

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default AmbulanceRegister;
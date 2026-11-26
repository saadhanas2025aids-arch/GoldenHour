import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { hospitalRegisterSchema } from "../components/formschema/registerSchema.js";
function HospitalRegister() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(hospitalRegisterSchema)
  });

  function onSubmit(data) {
    console.log("Hospital Registration Details:", data);
  }

  return (
    <div>
      <h1>Hospital Registration</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Hospital Name</label>

        <input
          type="text"
          {...register("hospitalName")}
        />

        <p>{errors.hospitalName?.message}</p>

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

export default HospitalRegister;
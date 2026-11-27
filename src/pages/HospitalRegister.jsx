
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { hospitalRegisterSchema } from '../components/formschema/registerSchema'

function HospitalRegister() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(hospitalRegisterSchema)
  })

  function onSubmit(data) {
    console.log("Hospital Registration:", data)
    alert("Hospital registration submitted successfully!")
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-2xl font-bold mb-6">
          Hospital Registration
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-5">
            <label className="block mb-2 font-medium">
              Hospital Name
            </label>

            <input
              type="text"
              placeholder="Enter hospital name"
              {...register("hospitalName")}
              className="w-full border border-gray-300 rounded-lg p-3"
            />

            {errors.hospitalName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.hospitalName.message}
              </p>
            )}
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-medium">
              Official Email
            </label>

            <input
              type="email"
              placeholder="Enter official email"
              {...register("email")}
              className="w-full border border-gray-300 rounded-lg p-3"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 text-white p-3 rounded-lg"
          >
            Submit Registration
          </button>

        </form>

      </div>
    </div>
  )
}

export default HospitalRegister

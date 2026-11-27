import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
function Login() {
  
const location = useLocation()
const navigate = useNavigate()

const registerdata = location.state

const [logindata, setlogindata] = useState({
  name: "",
  password: ""
})
function handleChange(e) {
  setlogindata({
    ...logindata,
    [e.target.name]: e.target.value
  })
}

function handleSubmit(e) {
  e.preventDefault()

  if (
    registerdata &&
    logindata.name === registerdata.name &&
    logindata.password === registerdata.password
  ) {
    alert("Successful Login")
    navigate("/dashboard")
  }
  else {
    alert("Invalid Credentials")
  }
}

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Golden<span className="text-amber-500">Hour</span>
          </h1>

          <p className="text-gray-500 mt-2">
            Emergency Response Coordination
          </p>
        </div>

        
        <h2 className="text-2xl font-semibold text-slate-800 mb-2">
          Welcome Back
        </h2>

        <p className="text-gray-500 mb-6">
          Login to access your dashboard
        </p>

        <form onSubmit={handleSubmit}>

          <label className="block font-medium text-gray-700 mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            value={logindata.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <label className="block font-medium text-gray-700 mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            value={logindata.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <button
            type="submit"
            className="w-full bg-slate-900 text-white font-semibold p-3 rounded-lg hover:bg-slate-700 transition"
          >
            Login
          </button>
<button
  type="button"
  onClick={() => navigate('/register')}
>
  Register your Organisation
</button>
        </form>
        
        <div className="border-t mt-8 pt-5">
          <p className="text-sm text-gray-500 text-center mb-3">
            Authorized access for
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">
              Dispatcher
            </span>

            <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">
              Ambulance Crew
            </span>

            <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">
              Hospital Staff
            </span>

            <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">
              Admin
            </span>
          </div>

          <p className="text-xs text-gray-400 text-center mt-5">
            Patients do not need to log in to request emergency assistance.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Login

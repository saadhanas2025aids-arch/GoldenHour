
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function TestRegister() {

  const navigate = useNavigate()

  const [formdata, setFormdata] = useState({
    name: "",
    username: "",
    password: "",
    role: ""
  })

  function handleChange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    console.log("Registered Data:", formdata)

    navigate('/classroom/login', {
      state: formdata
    })
  }

  return (
    <div>
      <h1>Classroom Registration</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formdata.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formdata.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formdata.password}
          onChange={handleChange}
          required
        />

        <select
          name="role"
          value={formdata.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="ADMIN">Admin</option>
          <option value="DISPATCHER">Dispatcher</option>
          <option value="HOSPITAL_STAFF">Hospital Staff</option>
          <option value="AMBULANCE_CREW">Ambulance Crew</option>
        </select>

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  )
}

export default TestRegister

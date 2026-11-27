
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function TestLogin() {

  const location = useLocation()
  const navigate = useNavigate()

  const registerdata = location.state

  const [logindata, setLogindata] = useState({
    username: "",
    password: ""
  })

  function handleChange(e) {
    setLogindata({
      ...logindata,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (
      registerdata &&
      logindata.username === registerdata.username &&
      logindata.password === registerdata.password
    ) {
      alert("Successful Login")

      navigate('/classroom/dashboard', {
        state: {
          name: registerdata.name,
          role: registerdata.role
        }
      })
    }
    else {
      alert("Invalid Credentials")
    }
  }

  return (
    <div>
      <h1>Classroom Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={logindata.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={logindata.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

      </form>
    </div>
  )
}

export default TestLogin

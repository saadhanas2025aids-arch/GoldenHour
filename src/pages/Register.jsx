
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Organisation Registration</h1>

      <button
        type="button"
        onClick={() => navigate( '/hospital-register')}
      >
        Hospital
      </button>

      <button
        type="button"
        onClick={() => navigate('/ambulance-register')}
      >
        Ambulance Service
      </button>
    </div>
  )
}

export default Register

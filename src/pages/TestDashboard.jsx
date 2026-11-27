
import { useLocation, useNavigate } from 'react-router-dom'

function TestDashboard() {

  const location = useLocation()
  const navigate = useNavigate()

  const userdata = location.state

  if (!userdata) {
    return (
      <div>
        <h2>Please login first</h2>
        <button onClick={() => navigate('/classroom/register')}>
          Go to Registration
        </button>
      </div>
    )
  }

  return (
    <div>
      <h1>Welcome {userdata.name}</h1>

      <h2>Your Role: {userdata.role}</h2>

      {userdata.role === "ADMIN" && (
        <h3>Admin Dashboard</h3>
      )}

      {userdata.role === "DISPATCHER" && (
        <h3>Dispatcher Dashboard</h3>
      )}

      {userdata.role === "HOSPITAL_STAFF" && (
        <h3>Hospital Dashboard</h3>
      )}

      {userdata.role === "AMBULANCE_CREW" && (
        <h3>Ambulance Dashboard</h3>
      )}
    </div>
  )
}

export default TestDashboard

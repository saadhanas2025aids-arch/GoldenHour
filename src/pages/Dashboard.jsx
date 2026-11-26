import { useLocation } from 'react-router-dom'

function Dashboard() {

  const location = useLocation()

  const userdata = location.state

  return (
    <div>
      <h1>Welcome to GoldenHour Dashboard</h1>

      <p>Email: {userdata?.email}</p>
      <p>Password: {userdata?.password}</p>
    </div>
  )
}

export default Dashboard
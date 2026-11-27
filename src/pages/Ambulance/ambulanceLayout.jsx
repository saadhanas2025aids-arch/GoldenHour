
import { Link, Outlet } from "react-router-dom";

function AmbulanceLayout() {
  return (
    <div>
      <h1>GoldenHour - Ambulance Panel</h1>

      <nav>
        <Link to="/ambulance/dashboard">Dashboard</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default AmbulanceLayout;

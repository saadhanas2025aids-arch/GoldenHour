
import { Link, Outlet } from "react-router-dom";

function HospitalLayout() {
  return (
    <div>
      <h1>GoldenHour - Hospital Panel</h1>

      <nav>
        <Link to="/hospital/dashboard">Dashboard</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default HospitalLayout;

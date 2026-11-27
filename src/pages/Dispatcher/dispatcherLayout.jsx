
import { Link, Outlet } from "react-router-dom";

function DispatcherLayout() {
  return (
    <div>
      <h1>GoldenHour - Dispatcher Panel</h1>

      <nav>
        <Link to="/dispatcher/dashboard">Dashboard</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default DispatcherLayout;

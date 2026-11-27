
import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <h1>Admin Page</h1>

      <nav>
        <Link to="/admin/admindashboard">
          Dashboard
        </Link>

        <Link to="/admin/userdetails">
          User Details
        </Link>

        <Link to="/admin/settings">
          Settings
        </Link>

        <Link to="/admin/organisationrequests">
          Organisation Requests
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default AdminLayout;

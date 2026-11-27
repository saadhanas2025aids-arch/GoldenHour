
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dispatcher from "./pages/Dispatcher";
import Ambulance from "./pages/Ambulance";
import Hospital from "./pages/Hospital";

import AdminLayout from "./pages/Admin/AdminLayout";import AdminDashboard from "./pages/Admin/dashboard";
import AdminSettings from "./pages/Admin/settings";
import AdminUserDetails from "./pages/Admin/userDetails";
import OrganisationRequests from "./pages/Admin/organisationRequests";

import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import HospitalRegister from "./pages/HospitalRegister";
import AmbulanceRegister from "./pages/AmbulanceRegister";

import DispatcherLayout from "./pages/Dispatcher/dispatcherLayout";
import DispatcherDashboard from "./pages/Dispatcher/dashboard";

import HospitalLayout from "./pages/Hospital/hospitalLayout";
import HospitalDashboard from "./pages/Hospital/dashboard";

import AmbulanceLayout from "./pages/Ambulance/ambulanceLayout";
import AmbulanceDashboard from "./pages/Ambulance/dashboard";

import TestRegister from "./pages/TestRegister";
import TestLogin from "./pages/TestLogin";
import TestDashboard from "./pages/TestDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dispatcher" element={<Dispatcher />} />
        <Route path="/ambulance" element={<Ambulance />} />
        <Route path="/hospital" element={<Hospital />} />

        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/hospital-register" element={<HospitalRegister />} />
        <Route path="/ambulance-register" element={<AmbulanceRegister />} />

        <Route path="/classroom/register" element={<TestRegister />} />
        <Route path="/classroom/login" element={<TestLogin />} />
        <Route path="/classroom/dashboard" element={<TestDashboard />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="admindashboard" element={<AdminDashboard />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="userdetails" element={<AdminUserDetails />} />
          <Route path="organisationrequests" element={<OrganisationRequests />} />
        </Route>

        <Route path="/dispatcher" element={<DispatcherLayout />}>
          <Route path="dashboard" element={<DispatcherDashboard />} />
        </Route>

        <Route path="/hospital" element={<HospitalLayout />}>
          <Route path="dashboard" element={<HospitalDashboard />} />
        </Route>

         <Route path="/ambulance" element={<AmbulanceLayout />}>
          <Route path="dashboard" element={<AmbulanceDashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

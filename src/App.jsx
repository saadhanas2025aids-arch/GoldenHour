import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dispatcher from "./pages/Dispatcher";
import Ambulance from "./pages/Ambulance";
import Hospital from "./pages/Hospital";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import Dashboard from './pages/Dashboard'
import HospitalRegister from './pages/HospitalRegister'
import AmbulanceRegister from './pages/AmbulanceRegister'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dispatcher" element={<Dispatcher />} />
        <Route path="/ambulance" element={<Ambulance />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hospital-register" element={<HospitalRegister />} />
        <Route path="/ambulance-register" element={<AmbulanceRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
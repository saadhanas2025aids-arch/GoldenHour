import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dispatcher from "./pages/Dispatcher";
import Ambulance from "./pages/Ambulance";
import Hospital from "./pages/Hospital";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dispatcher" element={<Dispatcher />} />
        <Route path="/ambulance" element={<Ambulance />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
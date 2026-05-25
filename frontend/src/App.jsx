import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RegistroVehiculo from "./pages/RegistroVehiculo";
import Validacion from "./pages/Validacion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/vehiculos" element={<RegistroVehiculo />} />
      <Route path="/validacion" element={<Validacion />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Eye } from "lucide-react";
import api from "../api/api";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const iniciarSesion = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        usuario,
        password,
      });

      localStorage.setItem("usuario", JSON.stringify(response.data.usuario));
      navigate("/dashboard");
    } catch (error) {
      setMensaje("Usuario o contraseña incorrectos");
    }
  };

  return (
    <main className="login-page-custom">
      <section className="login-card-custom">
        <div className="login-left-custom">
          <div className="shield-logo">★</div>

          <h1>ADUANAS</h1>
          <h2>CHILE</h2>

          <h3>
            Sistema Informático <br />
            Integrado para Aduanas
          </h3>

          <p>Complejo Los Libertadores</p>
        </div>

        <div className="login-right-custom">
          <h2>Iniciar Sesión</h2>
          <p className="login-subtitle">
            Ingrese sus credenciales para acceder al sistema
          </p>

          <form onSubmit={iniciarSesion}>
            <label>Usuario</label>
            <div className="login-input-box">
              <User size={18} />
              <input
                type="text"
                placeholder="Ingrese su usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <label>Contraseña</label>
            <div className="login-input-box">
              <Lock size={18} />
              <input
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Eye size={18} />
            </div>

            <button type="submit" className="login-btn-custom">
              Ingresar
            </button>
          </form>

          {mensaje && <p className="login-error">{mensaje}</p>}

          <div className="login-divider"></div>

          <h4>Seleccionar Institución</h4>

          <div className="login-institutions">
            <div className="institution-box">
              <div className="institution-icon blue">★</div>
              <span>Aduanas</span>
            </div>

            <div className="institution-box">
              <div className="institution-icon green">♜</div>
              <span>PDI</span>
            </div>

            <div className="institution-box">
              <div className="institution-icon green">♣</div>
              <span>SAG</span>
            </div>
          </div>

          <small>© 2024 Sistema Integrado de Gestión Aduanera</small>
        </div>
      </section>
    </main>
  );
}

export default Login;
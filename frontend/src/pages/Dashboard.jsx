import {
  Bell,
  UserCircle,
  Car,
  FileText,
  CheckCircle,
  AlertTriangle,
  Home,
  ShieldCheck,
  BarChart3,
  Users,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <div className="logo-box">★</div>
          <div>
            <h2>ADUANAS</h2>
            <span>CHILE</span>
          </div>
          <Menu size={20} className="menu-icon" />
        </div>

        <nav className="sidebar-menu">
          <Link className="active" to="/dashboard">
            <Home size={19} /> Dashboard
          </Link>
          <Link to="/vehiculos">
            <Car size={19} /> Vehículos
          </Link>
          <Link to="#">
            <FileText size={19} /> Trámites
          </Link>
          <Link to="/validacion">
            <ShieldCheck size={19} /> Validaciones
          </Link>
          <Link to="#">
            <Bell size={19} /> Alertas
          </Link>
          <Link to="#">
            <BarChart3 size={19} /> Reportes
          </Link>
          <Link to="#">
            <Users size={19} /> Usuarios
          </Link>
          <Link to="#">
            <Settings size={19} /> Configuración
          </Link>
        </nav>

        <div className="logout">
          <Link to="/">
            <LogOut size={19} /> Cerrar Sesión
          </Link>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <h1>Dashboard</h1>

          <div className="topbar-user">
            <div className="notification">
              <Bell size={25} />
              <span>3</span>
            </div>

            <UserCircle size={38} />

            <div>
              <strong>Funcionario Aduanas</strong>
              <p>Administrador</p>
            </div>

            <span className="arrow">⌄</span>
          </div>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <div>
              <h3>Vehículos Hoy</h3>
              <strong>1.248</strong>
              <p className="blue-text">+ 12.5% vs ayer</p>
            </div>
            <Car size={48} className="icon-blue" />
          </div>

          <div className="stat-card">
            <div>
              <h3>Trámites Activos</h3>
              <strong>356</strong>
              <p className="orange-text">+ 8.2% vs ayer</p>
            </div>
            <FileText size={48} className="icon-orange" />
          </div>

          <div className="stat-card">
            <div>
              <h3>Validaciones OK</h3>
              <strong>1.102</strong>
              <p>88.3% del total</p>
            </div>
            <CheckCircle size={50} className="icon-green" />
          </div>

          <div className="stat-card">
            <div>
              <h3>Alertas Activas</h3>
              <strong>24</strong>
              <p className="red-text">Urgentes</p>
            </div>
            <AlertTriangle size={52} className="icon-red" />
          </div>
        </section>

        <section className="dashboard-content-grid">
          <div className="chart-card">
            <h2>Tránsito Diario</h2>
            <p>Últimos 7 días</p>

            <div className="chart-area">
              <div className="y-axis">
                <span>2.000</span>
                <span>1.500</span>
                <span>1.000</span>
                <span>500</span>
                <span>0</span>
              </div>

              <div className="chart-lines">
                <div className="line horizontal h1"></div>
                <div className="line horizontal h2"></div>
                <div className="line horizontal h3"></div>
                <div className="line horizontal h4"></div>

                <svg viewBox="0 0 520 230" preserveAspectRatio="none">
                  <polyline
                    points="0,155 80,140 160,95 240,140 320,160 410,98 520,125"
                    fill="none"
                    stroke="#1d5fd1"
                    strokeWidth="5"
                  />
                  <polygon
                    points="0,155 80,140 160,95 240,140 320,160 410,98 520,125 520,230 0,230"
                    fill="rgba(29, 95, 209, 0.08)"
                  />
                  <circle cx="0" cy="155" r="7" fill="#1d5fd1" />
                  <circle cx="80" cy="140" r="7" fill="#1d5fd1" />
                  <circle cx="160" cy="95" r="7" fill="#1d5fd1" />
                  <circle cx="240" cy="140" r="7" fill="#1d5fd1" />
                  <circle cx="320" cy="160" r="7" fill="#1d5fd1" />
                  <circle cx="410" cy="98" r="7" fill="#1d5fd1" />
                  <circle cx="520" cy="125" r="7" fill="#1d5fd1" />
                </svg>

                <div className="x-axis">
                  <span>14/05</span>
                  <span>15/05</span>
                  <span>16/05</span>
                  <span>17/05</span>
                  <span>18/05</span>
                  <span>19/05</span>
                  <span>20/05</span>
                </div>
              </div>
            </div>
          </div>

          <div className="alerts-card">
            <h2>Alertas Recientes</h2>

            <div className="alert-row">
              <span className="dot red"></span>
              <p>Vehículo con documentación vencida</p>
              <strong>ABCD12</strong>
              <span>10:15</span>
            </div>

            <div className="alert-row">
              <span className="dot orange"></span>
              <p>Discrepancia en antecedentes PDI</p>
              <strong>EFGH34</strong>
              <span>09:42</span>
            </div>

            <div className="alert-row">
              <span className="dot orange"></span>
              <p>Declaración jurada observada</p>
              <strong>IJKL56</strong>
              <span>09:20</span>
            </div>

            <div className="alert-row">
              <span className="dot red"></span>
              <p>Error de sincronización SAG</p>
              <strong>-</strong>
              <span>08:55</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
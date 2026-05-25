import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../api/api";

function Validacion() {
  const [tramites, setTramites] = useState([]);
  const [resultado, setResultado] = useState(null);

  const cargarTramites = async () => {
    const response = await api.get("/tramites");
    setTramites(response.data);
  };

  const validar = async (id) => {
    const response = await api.post(`/validaciones/${id}`);
    setResultado(response.data);
    cargarTramites();
  };

  useEffect(() => {
    cargarTramites();
  }, []);

  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Navbar />

        <h1>Validación PDI / SAG</h1>

        <section className="panel">
          <h2>Trámites Pendientes</h2>

          {tramites.map((tramite) => (
            <div className="tramite" key={tramite.id}>
              <div>
                <strong>Trámite #{tramite.id}</strong>
                <p>Patente: {tramite.patente}</p>
                <p>Conductor: {tramite.conductor_nombre}</p>
                <p>Estado: {tramite.estado}</p>
              </div>

              <button onClick={() => validar(tramite.id)}>
                Validar PDI / SAG
              </button>
            </div>
          ))}
        </section>

        {resultado && (
          <section className="resultado">
            <h2>Resultado Final</h2>
            <h3>{resultado.resultado_final}</h3>
            <p>Resultado PDI: {resultado.resultado_pdi}</p>
            <p>Resultado SAG: {resultado.resultado_sag}</p>
            <p>{resultado.observaciones}</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default Validacion;
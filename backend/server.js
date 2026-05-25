const express = require("express");
const cors = require("cors");
const db = require("./database/db");

const authRoutes = require("./routes/auth.routes");
const vehiculosRoutes = require("./routes/vehiculos.routes");
const tramitesRoutes = require("./routes/tramites.routes");
const validacionesRoutes = require("./routes/validaciones.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/vehiculos", vehiculosRoutes);
app.use("/api/tramites", tramitesRoutes);
app.use("/api/validaciones", validacionesRoutes);

app.get("/", (req, res) => {
  res.json({ mensaje: "API Sistema Aduanas funcionando correctamente" });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
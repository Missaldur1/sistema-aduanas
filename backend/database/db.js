const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./aduanas.db", (error) => {
  if (error) {
    console.error("Error al conectar con SQLite:", error.message);
  } else {
    console.log("Base de datos SQLite conectada");
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      usuario TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      institucion TEXT NOT NULL,
      rol TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS vehiculos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      tipo TEXT NOT NULL,
      patente TEXT NOT NULL,
      pais_origen TEXT NOT NULL,
      marca TEXT NOT NULL,
      modelo TEXT NOT NULL,
      anio INTEGER,
      color TEXT,
      chasis TEXT,
      motor TEXT,
      conductor_nombre TEXT NOT NULL,
      conductor_nacionalidad TEXT,
      conductor_documento TEXT NOT NULL,
      documento_tipo TEXT,
      documento_numero TEXT,
      vencimiento TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS tramites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      vehiculo_id INTEGER,
      estado TEXT DEFAULT 'Pendiente',
      fecha TEXT DEFAULT CURRENT_TIMESTAMP,
      observaciones TEXT,
      FOREIGN KEY (vehiculo_id) REFERENCES vehiculos(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS validaciones (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      tramite_id INTEGER,
      resultado_pdi TEXT,
      resultado_sag TEXT,
      resultado_final TEXT,
      observaciones TEXT,
      fecha TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (tramite_id) REFERENCES tramites(id)
    )
  `);

  db.run(`
    INSERT OR IGNORE INTO usuarios 
    (id, nombre, usuario, password, institucion, rol)
    VALUES 
    (1, 'Funcionario Aduanas', 'admin', '123456', 'Aduanas', 'Administrador')
  `);
});

module.exports = db;
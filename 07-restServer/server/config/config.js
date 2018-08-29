// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Puerto
process.env.PORT = process.env.PORT || 3000;

// Vencimiento del token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30; // Valor en segundos

// SEED de autenticación
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// Database
let urlDatabase;

if (process.env.NODE_ENV === 'dev') {
    urlDatabase = 'mongodb://localhost:27017/cafe'
} else {
    urlDatabase = process.env.MONGO_URI
}

process.env.DB_URL = urlDatabase;
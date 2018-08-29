// Puerto
process.env.PORT = process.env.PORT || 3000
    // Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// Database
let urlDatabase;

if (process.env.NODE_ENV === 'dev') {
    urlDatabase = 'mongodb://localhost:27017/cafe'
} else {
    urlDatabase = 'mongodb://cafe-user:abc123@ds233228.mlab.com:33228/cafe'
}

process.env.DB_URL = urlDatabase;
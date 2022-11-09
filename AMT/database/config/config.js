require('dotenv').config();

module.exports = {
  "PORT": process.env.PORT || 3000,
  "development": {
    "username": process.env.DB_USER || "elham",
    "password": process.env.DB_PASS || "elham1234",
    "database": process.env.DB_NAME || "eCommerce",
    "host": process.env.DB_HOST || "127.0.0.1",
    "port": process.env.DB_PORT || 5433,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
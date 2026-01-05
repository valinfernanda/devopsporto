const { Pool } = require('pg'); //Pool for managing multiple connections to a DB
require('dotenv').config(); //dotenv = package to read file .env

const pool = new Pool({ 
  user: process.env.DB_USER || 'postgres', //Fallback (|| 'postgres'): If .env is empty, use the default.
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'taskdb',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;

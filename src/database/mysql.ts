import mysql from 'mysql'

/*
const pool = mysql.createPool({
  'host': process.env.DB_HOST,
  'user': process.env.DB_USER,
  'password': process.env.DB_PASSWORD,
  'database': process.env.DB_DATABASE,
  'port': process.env.DB_PORT 
})
/** */
const pool = mysql.createPool({
  'host': '127.0.0.1',
  'user': 'root',
  'password': null,
  'database': 'ecoleta',
})
exports.pool = pool
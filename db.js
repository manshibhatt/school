import mysql from "mysql2/promise";

import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


// console.log("MySQL connected successfully")

// await db.execute('create database mysql_db');
// console.log(await db.execute("show databases"));

// await db.execute(`
//   CREATE TABLE schools (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(255),
//   address VARCHAR(255),
//   latitude FLOAT,
//   longitude FLOAT
//   );
//     `)

export default pool;

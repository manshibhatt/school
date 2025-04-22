import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'manshi',
  database: 'mysql_db',
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

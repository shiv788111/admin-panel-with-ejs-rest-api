import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shiv@199",
  database: "adBD",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

export default db;

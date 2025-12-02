import sql from "mssql";
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT),
  options: {
    trustServerCertificate: true,
  },
};

async function connectDB() {
  try {
    const pool = await sql.connect(dbConfig);
    console.log("✔️ MSSQL connected");
    return pool;
  } catch (err) {
    console.error("❌ MSSQL Connection failed:", err);
  }
}

module.exports = connectDB;

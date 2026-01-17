import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    dialect: "mysql",
    logging: false, // tắt log SQL nếu bạn không muốn
    timezone: "+07:00" // giờ VN
  }
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("✔️ MySQL connected successfully");
  } catch (error) {
    console.error("❌ MySQL connection failed:", error);
  }
}

export { sequelize, connectDB };

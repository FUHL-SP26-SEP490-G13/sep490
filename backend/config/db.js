import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import path from "path"; // 1. Import thêm path
import { fileURLToPath } from 'url'; // 2. Import để tái tạo __dirname

// 3. Tái tạo __dirname và __filename (Bắt buộc khi dùng ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 4. Kiểm tra môi trường từ câu lệnh script (cross-env)
const isTest = process.env.NODE_ENV === "test";

// 5. Load file .env tương ứng
// Nếu isTest = true -> load .env.test
// Nếu isTest = false -> load .env
dotenv.config({
  path: isTest ? path.resolve(__dirname, '../.env.test') : path.resolve(__dirname, '../.env')
});

// Kiểm tra xem đang chạy DB nào (để debug)
console.log(`🔌 Đang kết nối tới Database: ${process.env.DB_DATABASE} (Môi trường: ${process.env.NODE_ENV || 'development'})`);

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT), // Đảm bảo port là số
    dialect: "mysql",
    logging: isTest ? false : console.log, // Mẹo: Tắt log khi test cho đỡ rối, bật log khi dev
    timezone: "+07:00"
  }
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("✔️ MySQL connected successfully");
  } catch (error) {
    console.error("❌ MySQL connection failed:", error);
    // Nếu kết nối DB thất bại thì nên dừng app luôn để biết mà sửa
    process.exit(1); 
  }
}

export { sequelize, connectDB };
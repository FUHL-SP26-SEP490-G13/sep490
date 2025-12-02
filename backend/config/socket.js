// socket.js
import { Server } from "socket.io";
import dotenv from "dotenv";

dotenv.config();

export const initSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*", // Hoặc dùng process.env.FRONTEND_ROUTE
    },
  });

  io.on("connection", (socket) => {
    console.log("🔌 Client connected:", socket.id);

    // Nhận message từ client
    socket.on("send_message", (data) => {
      console.log("📩 Received:", data);
      // Gửi lại tất cả client khác
      io.emit("receive_message", data);
    });

    // Khi client ngắt kết nối
    socket.on("disconnect", () => {
      console.log("❌ Client disconnected:", socket.id);
    });
  });

  return io;
};

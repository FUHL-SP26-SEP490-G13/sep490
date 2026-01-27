// --- Import Dependencies ---
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { createServer } from "http";

// --- Import Configurations ---
import swaggerSpec from "./config/swagger.js";
import { initSocket } from "./config/socket.js";
import { connectDB, sequelize } from "./config/db.js";
import { payOS } from "./config/payOS.js";

// Import Routes - Start
import app from "./app.js";
// Import Routes - End

// dotenv.config();

// const app = express();

connectDB();

// --- Middlewares ---
const allowedOrigins = [process.env.FRONTEND_ROUTE];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// create HTTP server
const httpServer = createServer(app);

// create Socket.io server
initSocket(httpServer);

// --- Start Server ---
app.use(express.json());

// --- Sample Route ---
app.get("/", (req, res) => {
  res.json({
    message: "Server for SEP490 Capstone Project (branch: develop) is running",
    success: "Connected API successfully",
  });
});

// --- API Documentation ---
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// -- PayOS ---
app.post("/api/create-payment-link", async (req, res) => {
  try {
    const { amount, description, items, orderId } = req.body; // thêm orderId nếu có

    console.log("📦 Body gửi PayOS:", { amount, description, items, orderId });

    if (!amount || isNaN(amount)) {
      console.error("⚠️ Amount không hợp lệ:", amount);
      return res.status(400).json({ error: "Invalid amount" });
    }

    const paymentLinkResponse = await payOS.paymentRequests.create({
      orderCode: Number(String(Date.now()).slice(-6)), // hoặc uuidv4() để đảm bảo duy nhất
      amount: Math.floor(Number(amount)),
      description: description || "Thanh toán đơn hàng",
      items: items.map((item) => ({
        name: item.name,
        quantity: parseInt(item.quantity),
        price: parseInt(item.price),
      })),
      // gắn orderId vào returnUrl để frontend biết đơn hàng nào
      returnUrl: `${process.env.FRONTEND_ROUTE}/checkout-success?orderId=${orderId}`,
      cancelUrl: `${process.env.FRONTEND_ROUTE}/checkout-cancel?orderId=${orderId}`,
    });

    console.log("✅ Phản hồi từ PayOS:", paymentLinkResponse);
    res.json(paymentLinkResponse);
  } catch (error) {
    console.error("❌ Lỗi tạo link PayOS:", error);
    res.status(500).json({ error: error.message });
  }
});

// --- Start Server ---
const PORT = process.env.PORT;

httpServer.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger UI at http://localhost:${PORT}/api-docs`);
});

// --- Import Dependencies ---
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import { initSocket } from "./config/socket.js";

// Import Routes - Start

// Import Routes - End

dotenv.config();

const app = express();

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
  res.json({ message: "Server is running..." });
});

// --- Start Server ---
const PORT = process.env.PORT;

httpServer.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);

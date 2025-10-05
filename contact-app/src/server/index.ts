import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB, isConnected } from "./db";
import routes from "./routes";  

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// all api routes
app.use("/api", routes);  // 👈 everything is under /api

const start = async () => {
  await connectDB();
  app.listen(PORT, () =>
    console.log(`🚀 Express API running on http://localhost:${PORT}`)
  );
};

start();

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"; // Pastikan file ini ada

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Tes route
app.get("/", (req, res) => {
  res.send("✅ Backend berjalan dengan baik!");
});

// Routes utama
app.use("/api", authRoutes);

// Jalankan server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server backend berjalan di http://localhost:${PORT}`);
});

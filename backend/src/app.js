// backend/src/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Inisialisasi Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Contoh route
app.get("/", (req, res) => {
  res.send("Backend Web Sekolah berjalan 🚀");
});

// Contoh route ambil data dari Supabase
app.get("/students", async (req, res) => {
  const { data, error } = await supabase.from("students").select("*");
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

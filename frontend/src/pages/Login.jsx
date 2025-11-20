import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/admin/dashboard");
      } else {
        alert(data.message || "Login gagal");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Gagal terhubung ke server");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2>Login Admin</h2>
        <p>Masuk untuk melanjutkan ke dashboard</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <span className={styles.footer}>
          © {new Date().getFullYear()} Sekolah Pintar
        </span>
      </div>
    </div>
  );
}

export default Login;

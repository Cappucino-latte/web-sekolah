// src/pages/Prestasi.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import PrestasiCard from "../components/PrestasiCard";
import styles from "../styles/Prestasi.module.css";

export default function Prestasi() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrestasi = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/prestasi");
        setList(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Gagal mengambil prestasi:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrestasi();
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Galeri Prestasi</h1>
        <p className={styles.lead}>Prestasi siswa kami — sorotan terbaik.</p>
      </header>

      <section className={styles.gridWrap}>
        {loading ? (
          <div className={styles.loading}>Memuat...</div>
        ) : list.length === 0 ? (
          <div className={styles.empty}>Belum ada prestasi.</div>
        ) : (
          <div className={styles.grid}>
            {list.map((p) => (
              <PrestasiCard key={p.id} prestasi={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

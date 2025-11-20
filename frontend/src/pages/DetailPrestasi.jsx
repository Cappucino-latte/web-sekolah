// src/pages/DetailPrestasi.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Prestasi.module.css";

export default function DetailPrestasi() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/prestasi");
        const found = (res.data || []).find((p) => String(p.id) === String(id));
        setItem(found || null);
      } catch (err) {
        console.error("Gagal ambil detail:", err);
      } finally {
        setLoading(false);
      }
    };
    getDetail();
  }, [id]);

  if (loading) return <div className={styles.loading}>Memuat...</div>;
  if (!item) return <div className={styles.empty}>Prestasi tidak ditemukan.</div>;

  return (
    <div className={styles.detailContainer}>
      {item.gambar ? (
        <img src={item.gambar} alt={item.judul} className={styles.detailImg} />
      ) : null}
      <h1 className={styles.detailTitle}>{item.judul}</h1>
      <div className={styles.detailInfo}>
        <strong>{item.kategori}</strong> • <span>{item.tanggal}</span>
      </div>

      <div className={styles.detailDesc}>
        {/* Jika kamu punya field 'deskripsi' di tabel, tampilkan di sini */}
        {item.deskripsi || "Belum ada deskripsi tambahan untuk prestasi ini."}
      </div>
    </div>
  );
}

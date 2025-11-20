// src/components/PrestasiCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Prestasi.module.css";

export default function PrestasiCard({ prestasi }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/detail-prestasi/${prestasi.id}`);
  };
  function formatDate(dateStr) {
  if (!dateStr) return "-";
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

  return (
    <article
      className={styles.card}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" ? onClick() : null)}
      aria-label={`Lihat detail prestasi: ${prestasi.judul}`}
    >
      <div className={styles.cardMedia}>
        {prestasi.gambar ? (
          <img
            src={prestasi.gambar}
            alt={prestasi.judul}
            className={styles.cardImg}
            loading="lazy"
          />
        ) : (
          <div className={styles.placeholder}>No Image</div>
        )}
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{prestasi.judul}</h3>
        <div className={styles.cardMeta}>
          <span className={styles.category}>{prestasi.kategori}</span>
          <span className={styles.date}>{formatDate(prestasi.tanggal)}</span>
        </div>
      </div>
    </article>
  );
}

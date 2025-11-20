// src/pages/About.jsx

import React from 'react';
// 1. Import Container dari Bootstrap (opsional, tapi bagus untuk padding)
import { Container } from 'react-bootstrap';

// 2. Import CSS Module yang baru kita buat
import styles from './About.module.css';

function About() {
  return (
    <div>
      {/* 1. BAGIAN JUDUL HALAMAN */}
      <div className={styles.pageHeader}>
        <Container>
          <h1 className={styles.pageTitle}>Tentang Kami</h1>
        </Container>
      </div>

      {/* 2. BAGIAN KONTEN TEKS */}
      {/* Kita tidak pakai <Container> Bootstrap agar bisa atur max-width */}
      <div className={styles.contentContainer}>
        <p>
          Selamat datang di <strong>MTSS Roudlotush Sholihin</strong>. Kami
          adalah lembaga pendidikan yang berkomitmen untuk mencetak generasi
          yang tidak hanya unggul dalam bidang akademik, tetapi juga memiliki
          karakter Islami yang kuat.
        </p>
        <p>
          Didirikan dengan semangat... (Di sini Anda bisa isi dengan paragraf
          sejarah singkat sekolah).
        </p>
        
        <h3>Visi</h3>
        <p>
          "Menjadi lembaga pendidikan Islam terdepan yang menghasilkan lulusan
          berakhlak mulia, cerdas, dan berdaya saing global."
        </p>
        
        <h3>Misi</h3>
        <ul>
          <li>Menyelenggarakan pendidikan berkualitas...</li>
          <li>Mengembangkan program Tahfizh Al-Qur'an...</li>
          <li>Membina karakter siswa...</li>
        </ul>

        {/* 3. BAGIAN BANNER GAMBAR */}
        <div className={styles.imageBanner}>
          <div className={styles.bannerText}>
            <h3>Bergabung Bersama Kami</h3>
            <p>
              Menjadi bagian dari komunitas pembelajar yang inspiratif dan
              Islami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
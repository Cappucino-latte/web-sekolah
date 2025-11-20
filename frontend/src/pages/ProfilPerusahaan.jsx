import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './ProfilPerusahaan.module.css';

function ProfilPerusahaan() {
  return (
    <div>
      {/* Header */}
      <div className={styles.pageHeader}>
        <Container>
          <h1 className={styles.pageTitle}>Profil Perusahaan</h1>
        </Container>
      </div>

      {/* Content */}
      <Container className={styles.contentWrapper}>
        <Row>
          {/* Sidebar Menu */}
          <Col md={3}>
            <div className={styles.sidebar}>
              <h5 className={styles.sidebarTitle}>TENTANG KAMI</h5>
              <ul className={styles.sidebarMenu}>
                <li className={styles.active}>Profil Perusahaan</li>
                <li>Filosofi Logo</li>
                <li>Visi & Misi</li>
                <li>Struktur Organisasi</li>
              </ul>
            </div>
          </Col>

          {/* Main Content */}
          <Col md={9}>
            <div className={styles.mainContent}>
              <h2 className={styles.contentTitle}>Profil Perusahaan</h2>
              
              <p className={styles.contentText}>
                <strong>MTSS Roudlotush Sholihin</strong> adalah lembaga pendidikan Islam yang berdedikasi 
                untuk mencetak generasi yang tidak hanya unggul dalam akademik, tetapi juga memiliki 
                karakter Islami yang kuat dan berakhlakul karimah.
              </p>

              <p className={styles.contentText}>
                Didirikan dengan visi untuk menjadi lembaga pendidikan Islam terdepan, kami berkomitmen 
                memberikan pendidikan berkualitas yang mengintegrasikan ilmu pengetahuan umum dengan 
                nilai-nilai Islam. Sekolah kami dilengkapi dengan fasilitas modern dan tenaga pengajar 
                profesional yang berpengalaman di bidangnya.
              </p>

              <h3 className={styles.subTitle}>Keunggulan Kami</h3>
              <ul className={styles.contentList}>
                <li>Program Tahfizh Al-Qur'an yang terstruktur</li>
                <li>Kurikulum nasional yang terintegrasi dengan nilai-nilai Islam</li>
                <li>Tenaga pengajar profesional dan berpengalaman</li>
                <li>Fasilitas pembelajaran yang modern dan lengkap</li>
                <li>Lingkungan belajar yang kondusif dan Islami</li>
                <li>Program ekstrakurikuler yang beragam</li>
              </ul>

              <p className={styles.contentText}>
                Kami percaya bahwa pendidikan yang baik adalah pendidikan yang mampu membentuk karakter 
                siswa secara menyeluruh, tidak hanya dari segi intelektual tetapi juga spiritual dan emosional. 
                Oleh karena itu, kami senantiasa berupaya memberikan yang terbaik untuk para siswa kami.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfilPerusahaan;
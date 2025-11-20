// src/components/Footer.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// 1. Import CSS Module yang baru kita buat
import styles from './Footer.module.css';

function Footer() {
  return (
    // 2. Ganti className 'bg-dark' dengan style dari module
    <footer className={styles.footerSection}>
      <Container>
        <Row>

          {/* KOLOM KIRI: LOGO & ALAMAT */}
          <Col lg={4} md={5} className="mb-4 mb-md-0">
            {/* Nanti ganti 'src' ini dengan path logo Anda 
              (misal: /logo-sekolah.png)
            */}
            <img
              src="https://via.placeholder.com/180x180.png?text=LOGO+MTSS"
              alt="Logo MTSS Roudlotush Sholihin"
              className={styles.footerLogo}
            />
            <div className={styles.contactInfo}>
              <p>
                <strong>MTSS Roudlotush Sholihin</strong><br />
                Jl. Taman Siswa No.158, Wirogunan, Kec. Mergangsan, 
                Kota Yogyakarta 55151
              </p>
              <p>Telepon: +62 274 3900192</p>
              <p>Email: info@mtss-rs.sch.id</p>
            </div>
          </Col>

          {/* KOLOM KANAN: AKREDITASI & LOGO PARTNER */}
          <Col lg={8} md={7}>
            <h5>Akreditasi & Penghargaan</h5>
            <p>
              <strong>Akreditasi A-Unggul.</strong> MTSS Roudlotush Sholihin
              telah mendapatkan Akreditasi A-Unggul dari BAN-S/M sejak 2024. 
              Sertifikasi ISO 9001:2015 dari British Standards Institution (BSI).
            </p>
            
            {/* Baris untuk logo-logo partner */}
            <div className="d-flex flex-wrap align-items-center">
              {/* Nanti ganti 'src' ini dengan logo-logo partner Anda 
              */}
              <img src="https://via.placeholder.com/100x70.png?text=Akreditasi+A" alt="Akreditasi" className={styles.accreditationLogo} />
              <img src="https://via.placeholder.com/100x70.png?text=ISO" alt="ISO" className={styles.accreditationLogo} />
              <img src="https://via.placeholder.com/100x70.png?text=Penghargaan" alt="Penghargaan" className={styles.accreditationLogo} />
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
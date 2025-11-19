import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './ProfilPerusahaan.module.css';

function Struktur() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Content */}
      <Container className={styles.contentWrapper}>
        <Row>
          {/* Main Content */}
          <Col md={12}>
            <div className={styles.mainContent}>
              <h2 className={styles.contentTitle}>Struktur Organisasi</h2>
              
              <p className={styles.contentText}>
                Struktur organisasi MTSS Roudlotush Sholihin dirancang untuk memastikan pengelolaan yang efektif 
                dan efisien dalam memberikan pendidikan berkualitas kepada para siswa.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <h3 className={styles.subTitle}>Kepala Sekolah</h3>
                <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '6px', marginBottom: '1.5rem' }}>
                  <p style={{ margin: 0, fontWeight: 600, color: '#2e7d32' }}>[Nama Kepala Sekolah]</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>Kepala Sekolah</p>
                </div>

                <h3 className={styles.subTitle}>Wakil Kepala Sekolah</h3>
                <Row className="mb-3">
                  <Col md={6}>
                    <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '6px', marginBottom: '1rem' }}>
                      <p style={{ margin: 0, fontWeight: 600, color: '#2e7d32' }}>[Nama Wakasek]</p>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>Wakasek Kurikulum</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '6px', marginBottom: '1rem' }}>
                      <p style={{ margin: 0, fontWeight: 600, color: '#2e7d32' }}>[Nama Wakasek]</p>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>Wakasek Kesiswaan</p>
                    </div>
                  </Col>
                </Row>

                <h3 className={styles.subTitle}>Bagian-Bagian</h3>
                <ul className={styles.contentList}>
                  <li>Bagian Tata Usaha</li>
                  <li>Bagian Keuangan</li>
                  <li>Bagian Kepegawaian</li>
                  <li>Bagian Sarana dan Prasarana</li>
                  <li>Bagian Humas dan Publikasi</li>
                  <li>Koordinator Tahfizh</li>
                  <li>Koordinator Ekstrakurikuler</li>
                </ul>

                <h3 className={styles.subTitle}>Dewan Guru</h3>
                <p className={styles.contentText}>
                  Tim pengajar kami terdiri dari guru-guru yang berkompeten dan berpengalaman di bidangnya masing-masing, 
                  yang senantiasa memberikan bimbingan terbaik untuk para siswa.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Struktur;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './ProfilPerusahaan.module.css';

function VisiMisi() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Content */}
      <Container className={styles.contentWrapper}>
        <Row>
          {/* Main Content */}
          <Col md={12}>
            <div className={styles.mainContent}>
              <h2 className={styles.contentTitle}>Visi & Misi</h2>
              
              <h3 className={styles.subTitle}>Visi</h3>
              <p className={styles.contentText}>
                Menjadi garda terdepan dalam perlindungan finansial petani Indonesia melalui inovasi teknologi 
                & kolaborasi.
              </p>

              <h3 className={styles.subTitle}>Misi</h3>
              <ol className={styles.contentList}>
                <li>
                  Memberikan solusi perlindungan risiko tani yang cepat, transparan, dan mudah diakses semua 
                  kalangan petani.
                </li>
                <li>
                  Membangun ekosistem sektor pertanian.
                </li>
                <li>
                  Meningkatkan literasi dan kesejahteraan petani melalui edukasi.
                </li>
                <li>
                  Berkolaborasi dengan pemerintah, komunitas tani, dan sektor swasta dalam membangun ekosistem 
                  pertanian yang tangguh untuk mendukung ketahanan pangan nasional.
                </li>
              </ol>

              <div style={{ marginTop: '3rem', padding: '2rem', background: '#e8f5e9', borderRadius: '8px' }}>
                <h3 className={styles.subTitle}>Komitmen Kami</h3>
                <p className={styles.contentText}>
                  Kami berkomitmen untuk terus berinovasi dan memberikan pelayanan terbaik dalam rangka mewujudkan 
                  visi dan misi kami. Dengan dukungan semua pihak, kami yakin dapat mencapai tujuan mulia ini untuk 
                  kemajuan pendidikan Islam di Indonesia.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default VisiMisi;
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './ProfilPerusahaan.module.css';

function Fasilitas() {
  const fasilitasList = [
    {
      title: 'Ruang Kelas',
      desc: 'Ruang kelas yang nyaman, ber-AC, dan dilengkapi dengan fasilitas multimedia untuk mendukung pembelajaran interaktif.'
    },
    {
      title: 'Perpustakaan',
      desc: 'Perpustakaan dengan koleksi buku yang lengkap, baik buku pelajaran, buku agama, maupun buku pengetahuan umum.'
    },
    {
      title: 'Lab Komputer',
      desc: 'Laboratorium komputer dengan perangkat terkini untuk menunjang pembelajaran teknologi informasi.'
    },
    {
      title: 'Masjid',
      desc: 'Masjid yang representatif untuk pelaksanaan sholat berjamaah dan kegiatan keagamaan lainnya.'
    },
    {
      title: 'Lapangan Olahraga',
      desc: 'Lapangan olahraga yang memadai untuk berbagai kegiatan ekstrakurikuler dan olahraga.'
    },
    {
      title: 'Kantin',
      desc: 'Kantin dengan menu makanan sehat dan higienis untuk memenuhi kebutuhan nutrisi siswa.'
    },
    {
      title: 'Ruang Audio Visual',
      desc: 'Ruang multimedia untuk presentasi, seminar, dan kegiatan pembelajaran berbasis teknologi.'
    },
    {
      title: 'Ruang Tahfizh',
      desc: 'Ruang khusus untuk program Tahfizh Al-Quran yang kondusif dan nyaman.'
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Content */}
      <Container className={styles.contentWrapper}>
        <Row>
          {/* Main Content */}
          <Col md={12}>
            <div className={styles.mainContent}>
              <h2 className={styles.contentTitle}>Fasilitas Sekolah</h2>
              
              <p className={styles.contentText}>
                MTSS Roudlotush Sholihin menyediakan berbagai fasilitas lengkap dan modern untuk mendukung 
                proses pembelajaran dan pengembangan potensi siswa secara optimal.
              </p>

              <Row className="mt-4">
                {fasilitasList.map((item, index) => (
                  <Col md={6} key={index} className="mb-4">
                    <Card style={{ 
                      height: '100%', 
                      border: '1px solid #e0e0e0', 
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(46, 125, 50, 0.15)';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      <Card.Body>
                        <Card.Title style={{ color: '#2e7d32', fontWeight: 600 }}>
                          {item.title}
                        </Card.Title>
                        <Card.Text style={{ color: '#555', lineHeight: '1.6' }}>
                          {item.desc}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#e8f5e9', borderRadius: '8px' }}>
                <h3 className={styles.subTitle} style={{ marginTop: 0 }}>Komitmen Kami</h3>
                <p className={styles.contentText} style={{ marginBottom: 0 }}>
                  Kami terus berupaya untuk meningkatkan dan melengkapi fasilitas sekolah demi memberikan 
                  kenyamanan dan mendukung prestasi siswa dalam proses pembelajaran.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Fasilitas;
// src/pages/Berita.jsx

import React from 'react';
// 1. Import komponen-komponen Bootstrap
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// 2. Import style header yang sudah ada dari About
import styles from './About.module.css'; 

// 3. INI ADALAH DATA DUMMY KITA
// Nantinya, data ini akan datang dari database (Firebase)
const daftarBerita = [
  {
    id: 1,
    slug: 'rekrutmen-guru-pancasila',
    title: 'REKRUTMEN GURU PENDIDIKAN PANCASILA',
    date: 'Jul 31, 2025 | Berita',
    excerpt: 'Syarat: Beragama Islam memiliki ijazah minimal S1...'
  },
  {
    id: 2,
    slug: 'rekrutmen-guru-matematika',
    title: 'REKRUTMEN GURU MATEMATIKA DAN SENI',
    date: 'Jul 23, 2025 | Berita',
    excerpt: 'Satu Orang Guru Matematika dan Satu Orang Guru Seni Rupa...'
  },
  {
    id: 3,
    slug: 'rekrutmen-guru-tik',
    title: 'REKRUTMEN GURU TEKNOLOGI INFORMASI',
    date: 'Jul 7, 2025 | Berita',
    excerpt: 'Satu Orang Guru TIK Syarat: Beragama Islam memiliki ijazah...'
  },
  {
    id: 4,
    slug: 'kegiatan-17-agustus',
    title: 'Perlombaan 17 Agustus Meriahkan Sekolah',
    date: 'Agu 18, 2025 | Kegiatan',
    excerpt: 'Seluruh siswa dan guru berpartisipasi dalam lomba...'
  },
  {
    id: 5,
    slug: 'studi-lapangan-kelas-8',
    title: 'Studi Lapangan Kelas 8 ke Museum Nasional',
    date: 'Sep 02, 2025 | Kegiatan',
    excerpt: 'Siswa kelas 8 melakukan studi lapangan untuk belajar sejarah...'
  },
];


function Berita() {
  return (
    <div>
      {/* 1. BAGIAN JUDUL HALAMAN (menggunakan style dari About) */}
      <div className={styles.pageHeader}>
        <Container>
          <h1 className={styles.pageTitle}>Berita Sekolah</h1>
          <p className="fs-5 text-muted">
            Dapatkan kabar dan kegiatan terbaru dari MTSS Roudlotush Sholihin
          </p>
        </Container>
      </div>

      {/* 2. BAGIAN GRID KARTU BERITA */}
      <Container className="my-5">
        <Row>
          {/* 4. INI ADALAH PROSES MAPPING (LOOPING)
            Kita me-looping 'daftarBerita' dan membuat 1 <Col> untuk setiap 'berita'
          */}
          {daftarBerita.map((berita) => (
            <Col md={4} key={berita.id} className="mb-4">
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{berita.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {berita.date}
                  </Card.Subtitle>
                  <Card.Text>
                    {berita.excerpt}
                  </Card.Text>
                  
                  <LinkContainer to={`/berita/${berita.slug}`}>
                    <Card.Link className="mt-auto">read more</Card.Link>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Berita;
// src/pages/Prestasi.jsx

// 1. IMPORT 'useState' DARI REACT
import React, { useState } from 'react'; 
// 2. Import komponen Bootstrap, kita butuh 'Nav' untuk filter
import { Container, Row, Col, Card, Nav } from 'react-bootstrap';

// 3. Import style header yang sudah ada dari About
import styles from './About.module.css'; 

// 4. DATA DUMMY PRESTASI
// Perhatikan, setiap item punya 'category'
const daftarPrestasi = [
  {
    id: 1,
    title: 'Juara 1 Olimpiade Sains Nasional',
    category: 'Akademik',
    date: 'Jun 2025',
    img: 'https://source.unsplash.com/400x300/?trophy,science'
  },
  {
    id: 2,
    title: 'Juara 2 Lomba Futsal Antar Sekolah',
    category: 'Olahraga',
    date: 'Mei 2025',
    img: 'https://source.unsplash.com/400x300/?soccer,trophy'
  },
  {
    id: 3,
    title: 'Juara Harapan 1 Lomba Baca Puisi',
    category: 'Seni',
    date: 'Apr 2025',
    img: 'https://source.unsplash.com/400x300/?poetry,art'
  },
  {
    id: 4,
    title: 'Medali Emas Lomba Cerdas Cermat',
    category: 'Akademik',
    date: 'Mar 2025',
    img: 'https://source.unsplash.com/400x300/?medal,gold'
  },
  {
    id: 5,
    title: 'Finalis Lomba Desain Poster Digital',
    category: 'Seni',
    date: 'Feb 2025',
    img: 'https://source.unsplash.com/400x300/?design,computer'
  },
  {
    id: 6,
    title: 'Tim Basket Juara 3 DBL Series',
    category: 'Olahraga',
    date: 'Jan 2025',
    img: 'https://source.unsplash.com/400x300/?basketball,team'
  }
];

// Daftar kategori kita untuk tombol filter
const categories = ['Semua', 'Akademik', 'Olahraga', 'Seni'];

function Prestasi() {
  // 5. MENGGUNAKAN 'useState'
  // 'filter' adalah variabel yang menyimpan state (filter yg aktif)
  // 'setFilter' adalah fungsi untuk MENGUBAH state tersebut
  // Default-nya kita set ke 'Semua'
  const [filter, setFilter] = useState('Semua');

  // 6. LOGIKA UNTUK MEMFILTER
  // Kita buat variabel baru 'filteredPrestasi'
  // Isinya adalah hasil filter dari 'daftarPrestasi'
  const filteredPrestasi = (filter === 'Semua')
    ? daftarPrestasi // Jika filter 'Semua', tampilkan semua
    : daftarPrestasi.filter(p => p.category === filter); // Jika tidak, filter berdasarkan kategori

  return (
    <div>
      {/* 1. BAGIAN JUDUL HALAMAN (menggunakan style dari About) */}
      <div className={styles.pageHeader}>
        <Container>
          <h1 className={styles.pageTitle}>Galeri Prestasi</h1>
          <p className="fs-5 text-muted">
            Prestasi siswa MTSS Roudlotush Sholihin di berbagai bidang
          </p>
        </Container>
      </div>

      {/* 2. BAGIAN FILTER (TOMBOL) */}
      <Container className="my-5">
        <Nav variant="pills" className="justify-content-center mb-4">
          {categories.map(category => (
            <Nav.Item key={category}>
              {/* Saat tombol diklik, kita panggil setFilter() 
                  untuk mengubah state
              */}
              <Nav.Link 
                onClick={() => setFilter(category)}
                active={filter === category} // Tombol akan 'aktif' jika state = kategori ini
              >
                {category}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* 3. BAGIAN GRID KARTU PRESTASI */}
        <Row>
          {/* PENTING: Kita .map() dari 'filteredPrestasi', BUKAN 'daftarPrestasi' */}
          {filteredPrestasi.map((prestasi) => (
            <Col md={4} key={prestasi.id} className="mb-4">
              <Card className="shadow-sm border-0 h-100">
                {/* Kita tambahkan gambar di sini agar lebih visual */}
                <Card.Img variant="top" src={prestasi.img} />
                <Card.Body>
                  <Card.Title className="fw-bold">{prestasi.title}</Card.Title>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {prestasi.date} | {prestasi.category}
                </Card.Footer>
              </Card>
            </Col>
          ))}
          
          {/* Pesan jika hasil filter kosong */}
          {filteredPrestasi.length === 0 && (
            <Col className="text-center">
              <p className="fs-4 text-muted">
                Tidak ada prestasi di kategori ini.
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Prestasi;
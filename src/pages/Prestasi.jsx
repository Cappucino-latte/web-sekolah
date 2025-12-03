import React, { useState } from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal"; 
import { Trophy, CalendarEvent, StarFill } from "react-bootstrap-icons";
import styles from './Prestasi.module.css'; 

// --- DATA DUMMY ---
const daftarPrestasi = [
  {
    id: 1,
    title: 'Gold Medal Olimpiade Sains Nasional (OSN)',
    category: 'Akademik',
    date: 'Juni 2025',
    level: 'Nasional',
    img: 'https://images.unsplash.com/photo-1569683795645-b62e50fbf103?w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Juara 1 Futsal Liga Pelajar Daerah',
    category: 'Olahraga',
    date: 'Mei 2025',
    level: 'Provinsi',
    img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Best Speaker Debat Bahasa Inggris',
    category: 'Akademik',
    date: 'April 2025',
    level: 'Kabupaten',
    img: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Juara Harapan 1 Seni Kaligrafi Islam',
    category: 'Seni',
    date: 'Maret 2025',
    level: 'Regional',
    img: 'https://images.unsplash.com/photo-1583296657636-b6d88f615372?w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Medali Perak Kompetisi Robotik',
    category: 'Akademik',
    date: 'Februari 2025',
    level: 'Nasional',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Juara 2 Tari Kreasi Tradisional',
    category: 'Seni',
    date: 'Januari 2025',
    level: 'Provinsi',
    img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&auto=format&fit=crop'
  }
];

const categories = ['Semua', 'Akademik', 'Olahraga', 'Seni'];

function Prestasi() {
  const [filter, setFilter] = useState('Semua');

  const filteredPrestasi = (filter === 'Semua')
    ? daftarPrestasi 
    : daftarPrestasi.filter(p => p.category === filter); 

  return (
    <div className={styles.pageWrapper}>
      
      {/* 1. HERO SECTION (Sama persis dengan Berita) */}
      <section className={styles.heroSection}>
        <Container>
            <Fade direction="up" triggerOnce>
                <div className="text-center">
                    <span className={styles.heroLabel}>HALL OF FAME</span>
                    <h1 className={styles.heroTitle}>Prestasi Siswa</h1>
                    <div className={styles.heroLine}></div>
                    <p className={styles.heroSubtitle}>
                        Rekam jejak keunggulan santri MTSS Roudlotush Sholihin dalam mengukir sejarah dan tinta emas di berbagai kompetisi.
                    </p>
                </div>
            </Fade>
        </Container>
      </section>

      {/* 2. FILTER & GRID SECTION */}
      <section className={styles.contentSection}>
        <Container>
            {/* Filter Buttons (Pill Style) */}
            <div className={styles.filterContainer}>
                {categories.map(category => (
                    <button 
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`${styles.filterBtn} ${filter === category ? styles.active : ''}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid Kartu */}
            <Row className="g-5"> {/* g-5 memberikan jarak luas seperti web internasional */}
                {filteredPrestasi.map((prestasi, index) => (
                    <Col md={6} lg={4} key={prestasi.id}>
                        <Fade direction="up" delay={index * 100} triggerOnce>
                            <div className={styles.prestasiCard}>
                                
                                {/* Image Container with Zoom Effect */}
                                <div className={styles.imageContainer}>
                                    <img src={prestasi.img} alt={prestasi.title} className={styles.cardImg} />
                                    {/* Badge Level di atas gambar */}
                                    <div className={styles.levelBadge}>
                                        <Trophy size={12} className="me-1"/> {prestasi.level}
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className={styles.cardContent}>
                                    <div className={styles.metaWrapper}>
                                        <span className={styles.category}>{prestasi.category}</span>
                                        <span className={styles.divider}>•</span>
                                        <span className={styles.date}>
                                            <CalendarEvent className="me-1" size={10}/> {prestasi.date}
                                        </span>
                                    </div>

                                    <h3 className={styles.cardTitle}>{prestasi.title}</h3>
                                    
                                    <div className={styles.cardFooter}>
                                        <div className={styles.starGroup}>
                                            {[...Array(5)].map((_, i) => (
                                                <StarFill key={i} size={12} className={styles.starIcon} />
                                            ))}
                                        </div>
                                        <span className={styles.verifiedLabel}>Verified Award</span>
                                    </div>
                                </div>

                            </div>
                        </Fade>
                    </Col>
                ))}

                {/* Empty State */}
                {filteredPrestasi.length === 0 && (
                    <Col className="text-center py-5">
                        <p className="text-muted fst-italic">Belum ada data prestasi untuk kategori ini.</p>
                    </Col>
                )}
            </Row>
        </Container>
      </section>
    </div>
  );
}

export default Prestasi;
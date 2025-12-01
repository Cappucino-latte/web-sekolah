import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Fade } from "react-awesome-reveal"; 
import { ArrowRight, CalendarEvent } from "react-bootstrap-icons"; 
import styles from './Berita.module.css'; 

// DATA DUMMY (Diperlengkap agar terlihat pro)
const daftarBerita = [
  {
    id: 1,
    slug: 'rekrutmen-guru-pancasila',
    title: 'Rekrutmen Terbuka: Guru Pendidikan Pancasila & Kewarganegaraan',
    category: 'CAREER',
    date: 'OCT 24, 2025',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    slug: 'rekrutmen-guru-matematika',
    title: 'Mencari Talenta Terbaik: Guru Matematika dan Seni Rupa',
    category: 'CAREER',
    date: 'OCT 20, 2025',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    slug: 'workshop-digital',
    title: 'Transformasi Digital: Workshop AI untuk Tenaga Pengajar',
    category: 'ACADEMIC',
    date: 'OCT 15, 2025',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    slug: 'kegiatan-17-agustus',
    title: 'Semangat Kemerdekaan: Festival Budaya & Lomba 17 Agustus',
    category: 'EVENTS',
    date: 'AUG 18, 2025',
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    slug: 'studi-lapangan-museum',
    title: 'Eksplorasi Sejarah: Studi Lapangan Kelas 8 ke Museum Nasional',
    category: 'FIELD TRIP',
    date: 'SEP 02, 2025',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    slug: 'prestasi-robotik',
    title: 'Tim Robotik MTSS Raih Medali Emas di Kompetisi Nasional',
    category: 'ACHIEVEMENT',
    date: 'SEP 10, 2025',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop',
  },
];

function Berita() {
  return (
    <div className={styles.pageWrapper}>
      
      {/* 1. HEADER SECTION - Clean & Editorial Style */}
      <section className={styles.heroSection}>
        <Container>
          <Fade direction="up" triggerOnce>
            <div className="text-center">
              <span className={styles.heroLabel}>UPDATES & INSIGHTS</span>
              <h1 className={styles.heroTitle}>Newsroom</h1>
              <div className={styles.heroLine}></div>
              <p className={styles.heroSubtitle}>
                Menyelami cerita, pencapaian, dan perkembangan terbaru dari civitas akademika MTSS Roudlotush Sholihin.
              </p>
            </div>
          </Fade>
        </Container>
      </section>

      {/* 2. NEWS GRID */}
      <section className={styles.newsSection}>
        <Container>
          <Row className="g-5"> {/* g-5 memberikan jarak antar kolom yang luas (breathing room) */}
            {daftarBerita.map((berita, index) => (
              <Col md={6} lg={4} key={berita.id}>
                <Fade direction="up" delay={index * 100} triggerOnce>
                  <LinkContainer to={`/berita/${berita.slug}`} style={{cursor: 'pointer'}}>
                    <div className={styles.newsCard}>
                      
                      {/* Image Container */}
                      <div className={styles.imageContainer}>
                        <img 
                          src={berita.image} 
                          alt={berita.title} 
                          className={styles.newsImage} 
                        />
                        <div className={styles.overlay}></div>
                      </div>

                      {/* Content */}
                      <div className={styles.cardContent}>
                        <div className={styles.metaWrapper}>
                            <span className={styles.category}>{berita.category}</span>
                            <span className={styles.divider}>•</span>
                            <span className={styles.date}>
                                <CalendarEvent className="me-1 mb-1" size={10}/> {berita.date}
                            </span>
                        </div>
                        
                        <h3 className={styles.newsTitle}>{berita.title}</h3>
                        
                        <div className={styles.linkGroup}>
                           <span className={styles.readMore}>
                              Read Story <ArrowRight className={styles.arrowIcon}/>
                           </span>
                        </div>
                      </div>

                    </div>
                  </LinkContainer>
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </div>
  );
}

export default Berita;
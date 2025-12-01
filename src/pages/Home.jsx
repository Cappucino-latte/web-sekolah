import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Fade } from "react-awesome-reveal"; 
import styles from "./Home.module.css"; 

import {
  ArrowRight,
  Quote,
  CheckCircleFill,
  ArrowUpRight,
  CalendarEvent
} from "react-bootstrap-icons";

// --- DATA ---
const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541339907198-e021fc9e2752?q=80&w=1920&auto=format&fit=crop",
    title: "Knowledge & Character",
    subtitle: "Membangun pondasi intelektual dan spiritual yang kokoh di tengah modernitas."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1577896332189-d42125f171bc?q=80&w=1920&auto=format&fit=crop",
    title: "Tradition & Innovation",
    subtitle: "Memadukan khazanah kitab kuning dengan sains dan teknologi masa depan."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1920&auto=format&fit=crop",
    title: "Global Vision",
    subtitle: "Menyiapkan santri yang siap berkiprah dan memberi manfaat di kancah global."
  }
];

const featuresData = [
  {
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?q=80&w=600&auto=format&fit=crop", 
    title: "Tahfidz & Kitab Kuning",
    desc: "Kurikulum terintegrasi hafalan 30 Juz dan penguasaan literatur Islam klasik. Kami menerapkan metode intensif untuk memastikan bacaan yang fasih serta pemahaman fikih yang mendalam."
  },
  {
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=600&auto=format&fit=crop", 
    title: "Akreditasi Unggul",
    desc: "Pengakuan nasional atas standar mutu pendidikan dan manajemen sekolah yang prima. Lulusan kami memiliki rekam jejak tinggi diterima di berbagai Perguruan Tinggi Negeri favorit."
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    title: "Digital Ecosystem",
    desc: "Smart Classroom dan Learning Management System (LMS) berbasis cloud. Kami mempersiapkan santri menghadapi era industri 4.0 dengan kemampuan coding dasar dan literasi digital."
  },
  {
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop",
    title: "Leadership & Adab",
    desc: "Pembentukan karakter pemimpin yang berakhlak mulia melalui sistem boarding school. Melalui berbagai organisasi santri, kami menanamkan nilai kemandirian dan tanggung jawab."
  }
];

const schoolPrograms = [
  { 
    title: "Sains & Riset", 
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
    description: "Laboratorium modern untuk pengembangan nalar kritis dan karya ilmiah remaja."
  },
  { 
    title: "Entrepreneurship", 
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop",
    description: "Inkubator bisnis siswa untuk mencetak wirausahawan muda yang mandiri."
  },
  { 
    title: "Kelas Digital", 
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
    description: "Sistem pembelajaran berbasis LMS, Smart Class, dan Coding dasar."
  },
  { 
    title: "Bilingual Class", 
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
    description: "Native speaker program untuk Bahasa Arab dan Inggris aktif."
  }
];

const newsData = [
    {
      slug: "/berita/1",
      title: "Rekrutmen Guru Pendidikan Pancasila & Kewarganegaraan",
      date: "31 JULI 2025",
      category: "Karir",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop"
    },
    {
      slug: "/berita/2",
      title: "Workshop Digitalisasi Madrasah: AI untuk Pembelajaran",
      date: "07 JULI 2025",
      category: "Akademik",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop"
    },
    {
      slug: "/berita/3",
      title: "Kunjungan Studi Banding dari Pesantren Tebuireng",
      date: "05 JULI 2025",
      category: "Berita",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop"
    }
];

function Home() {
  return (
    <div className={styles.pageWrapper}>
      
      {/* 1. CINEMATIC HERO */}
      <section style={{ padding: 0 }}>
        <Carousel fade controls={false} indicators={true} interval={8000} pause={false}>
          {heroSlides.map((slide) => (
            <Carousel.Item key={slide.id} className={styles.heroItem}>
              <div className={styles.heroImageWrapper}>
                <img className={`${styles.heroImage} ${styles.kenBurns}`} src={slide.image} alt={slide.title} />
              </div>
              <div className={styles.heroOverlay}></div>
              <Container className="h-100 position-relative">
                <div className={styles.heroContent}>
                  <Fade direction="up" triggerOnce cascade damping={0.2} duration={1200}>
                    <div className={styles.heroLine}></div>
                    <h1 className={styles.heroTitle}>{slide.title}</h1>
                    <p className={styles.heroSubtitle}>{slide.subtitle}</p>
                    <div className="d-flex gap-4 mt-5">
                        <button className={styles.btnHeroPrimary}>Daftar Sekarang</button>
                        <button className={styles.btnHeroSecondary}>Jelajahi Profil</button>
                    </div>
                  </Fade>
                </div>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>


      {/* 2. STORY SECTION (TENTANG KAMI) */}
      <section className={styles.storySection}>
        <Container>
          <Row className="align-items-center gx-lg-5">
              {/* Gambar Kiri */}
              <Col lg={6} className="mb-5 mb-lg-0">
                  <Fade direction="left" triggerOnce>
                    <div className={styles.storyImageContainer}>
                        <img 
                            src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=1000&auto=format&fit=crop" 
                            alt="Suasana Belajar" 
                            className={styles.storyImage} 
                        />
                        <div className={styles.storyPattern}></div>
                    </div>
                  </Fade>
              </Col>
              
              {/* Teks Kanan */}
              <Col lg={6}>
                  <Fade direction="right" triggerOnce cascade damping={0.1}>
                      <div className="ps-lg-4">
                          <span className={styles.badgeLabel}>TENTANG KAMI</span>
                          
                          {/* UPDATE: Kombinasi Warna Font */}
                          <h2 className={styles.sectionHeading} style={{textAlign:'left'}}>
                              <span className={styles.textCream}>Tradisi Ilmu,</span><br/>
                              <span className={styles.textFadeWhite}>Inovasi Masa Depan.</span>
                          </h2>
                          
                          <p className={styles.storyText}>
                              Di Roudlotush Sholihin, kami tidak hanya mengajarkan ilmu, tetapi juga menanamkan adab. Kami percaya bahwa pendidikan sejati menyentuh akal dan hati, membentuk generasi yang cerdas secara intelektual dan anggun secara moral.
                          </p>
                          
                          {/* BAGIAN STATS (ANGKA) SUDAH DIHAPUS */}

                          <LinkContainer to="/profil">
                              <span className={styles.linkUnderline}>Pelajari Sejarah Kami</span>
                          </LinkContainer>
                      </div>
                  </Fade>
              </Col>
          </Row>
        </Container>
      </section>

      {/* 4. FEATURE SECTION (KEUNGGULAN KAMI) */}
      <section className={styles.featureSection}>
        <Container>
          <div className="text-center mb-5 pb-3">
             <Fade direction="up" triggerOnce>
              <span className={styles.badgeLabel}>KEUNGGULAN KAMI</span>
              <h2 className={styles.sectionHeading}>Why Choose Us?</h2>
              <div className={styles.separatorCenter}></div>
            </Fade>
          </div>

          <Row className="g-4 justify-content-center"> 
            {featuresData.map((item, i) => (
              <Col lg={3} md={6} key={i}>
                <Fade direction="up" delay={i * 100} triggerOnce>
                  <div className={styles.featureCard}>
                    <div className={styles.featureImgWrapper}>
                      <img src={item.image} alt={item.title} className={styles.featureImg} />
                      <div className={styles.featureOverlay}>
                         <ArrowUpRight className={styles.featureIcon} size={24} />
                      </div>
                    </div>
                    <div className={styles.featureBody}>
                      <h3 className={styles.featureTitle}>{item.title}</h3>
                      <p className={styles.featureDesc}>{item.desc}</p>
                    </div>
                  </div>
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 5. ACADEMIC TILES (PROGRAM) */}
      <section className={styles.academicSection}>
        <Container fluid>
            <Row className="g-0">
                <Col lg={3} className={styles.academicIntro}>
                    <Fade direction="up" triggerOnce cascade damping={0.1}>
                        <h2 className={styles.academicHeading}>Explore<br/>Academics</h2>
                        <p className={styles.academicDesc}>
                            Program unggulan yang dirancang untuk menggali potensi terbaik santri.
                        </p>
                        <div className={styles.separatorLeft}></div>
                    </Fade>
                </Col>

                {schoolPrograms.map((prog, i) => (
                    <Col lg={2} md={4} sm={6} key={i}>
                        <Fade triggerOnce delay={i * 100} className="h-100">
                            <div className={styles.tileCard}>
                                <img src={prog.img} alt={prog.title} className={styles.tileImage} />
                                <div className={styles.tileContent}>
                                    <h4 className={styles.tileTitle}>{prog.title}</h4>
                                    <div className={styles.tileLine}></div>
                                    <p className={styles.tileText}>{prog.description}</p>
                                </div>
                            </div>
                        </Fade>
                    </Col>
                ))}

                <Col lg={1} md={12} className={styles.academicMore}>
                    <LinkContainer to="/profil">
                        <div className={styles.verticalText}>
                            VIEW ALL PROGRAMS <ArrowRight size={16} className="ms-2"/>
                        </div>
                    </LinkContainer>
                </Col>
            </Row>
        </Container>
      </section>

      {/* 6. SCHOLARSHIP SECTION (BEASISWA) */}
      <section className={styles.scholarshipSection}>
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-5 mb-lg-0">
              <Fade direction="up" triggerOnce cascade damping={0.1}>
                <span className="badge px-3 py-2 mb-3" style={{ fontSize: '0.8rem', letterSpacing: '1px', backgroundColor: 'var(--primary)', color:'white' }}>BEASISWA</span>
                <h2 className={styles.headingSerif} style={{ fontSize: '3rem', color: '#212529', marginBottom: '1.5rem' }}>
                  Akses Pendidikan Untuk Semua
                </h2>
                <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  Kami menyediakan berbagai jalur beasiswa bagi siswa berprestasi dan dhuafa agar pendidikan berkualitas dapat diakses semua kalangan.
                </p>
                
                <div className="d-flex flex-column gap-3 mb-5">
                  <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm border-start border-4 border-success">
                    <CheckCircleFill className="text-success me-3 fs-4" />
                    <span className="fw-medium text-dark">Beasiswa Penuh hingga 100%</span>
                  </div>
                  <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm border-start border-4 border-warning">
                    <CheckCircleFill className="text-success me-3 fs-4" />
                    <span className="fw-medium text-dark">Pendampingan Akademik Intensif</span>
                  </div>
                </div>

                <button className={`${styles.btnSolid} px-5`}>
                  Info Lengkap Beasiswa
                </button>
              </Fade>
            </Col>
            <Col lg={7}>
              <Row className="g-4">
                <Col md={6}>
                  <Fade direction="up" delay={100} triggerOnce>
                    <div className={styles.scholarshipCard}>
                      <div className={styles.scholarshipOverlay}></div>
                      <img 
                        src="https://images.unsplash.com/photo-1427504746383-796fb3c4c601?q=80&w=600&auto=format&fit=crop" 
                        alt="Jalur Dhuafa" 
                        className={styles.scholarshipImage}
                      />
                      <div className={styles.scholarshipContent}>
                        <h3 className="fw-bold text-white mb-2" style={{fontFamily:'Playfair Display'}}>Jalur Dhuafa</h3>
                        <p className="text-white-50 mb-0 small">Bantuan pendidikan bagi siswa kurang mampu dengan potensi akademik.</p>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col md={6}>
                  <Fade direction="up" delay={300} triggerOnce>
                    <div className={styles.scholarshipCard}>
                      <div className={styles.scholarshipOverlay}></div>
                      <img 
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop" 
                        alt="Jalur Prestasi" 
                        className={styles.scholarshipImage}
                      />
                      <div className={styles.scholarshipContent}>
                        <h3 className="fw-bold text-white mb-2" style={{fontFamily:'Playfair Display'}}>Jalur Prestasi</h3>
                        <p className="text-white-50 mb-0 small">Apresiasi bagi siswa berprestasi di bidang akademik & non-akademik.</p>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 7. NEWS SECTION (BERITA) */}
      <section className={styles.newsSection}>
        <Container>
            <Row className="align-items-end mb-5">
                <Col>
                    <Fade direction="up" triggerOnce>
                        <span className={styles.badgeLabel} style={{color:'var(--primary)'}}>UPDATES</span>
                        <h2 className={styles.sectionHeading} style={{textAlign:'left'}}>Berita & Agenda</h2>
                    </Fade>
                </Col>
                <Col className="text-end d-none d-md-block">
                    <LinkContainer to="/berita">
                        <span className={styles.linkUnderline}>Lihat Semua Arsip</span>
                    </LinkContainer>
                </Col>
            </Row>

            <Row className="g-4">
                {newsData.map((news, i) => (
                    <Col lg={4} md={6} key={i}>
                        <Fade direction="up" delay={i * 150} triggerOnce>
                            <div className={styles.newsCard}>
                                <div className={styles.newsImgContainer}>
                                    <img src={news.image} alt={news.title} className={styles.newsImg} />
                                    <div className={styles.newsDateBadge}>
                                        <CalendarEvent size={14} className="me-1"/> {news.date}
                                    </div>
                                </div>
                                <div className={styles.newsBody}>
                                    <span className={styles.newsCategory}>{news.category}</span>
                                    <h3 className={styles.newsTitle}>{news.title}</h3>
                                    <span className={styles.newsLink}>Baca Selengkapnya <ArrowRight size={16}/></span>
                                </div>
                            </div>
                        </Fade>
                    </Col>
                ))}
            </Row>
        </Container>
      </section>

      {/* 8. FOOTER CTA */}
      <section className={styles.preFooter}>
        <Container>
            <Fade direction="up" triggerOnce>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Siap Bergabung Bersama Kami?</h2>
                    <p className={styles.ctaText}>Penerimaan Peserta Didik Baru Tahun Ajaran 2026/2027 telah dibuka.</p>
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <button className={styles.btnCtaPrimary}>Daftar Online</button>
                        <button className={styles.btnCtaSecondary}>Hubungi Kami</button>
                    </div>
                </div>
            </Fade>
        </Container>
      </section>

    </div>
  );
}

export default Home;
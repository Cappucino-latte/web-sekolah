import React, { useState } from "react";
import { Container, Row, Col, Tab, Tabs, Carousel, Card } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import { Quote, BookHalf, PeopleFill, AwardFill, CheckCircleFill } from "react-bootstrap-icons";
import styles from "./Profil.module.css";

function Profil() {
  const [key, setKey] = useState('sekolah');

  // Data Gambar (Tetap sama, bisa ditambah)
  const schoolImages = [
    { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", title: "Gedung Utama MTs", desc: "Pusat kegiatan akademik yang representatif." },
    { src: "https://images.unsplash.com/photo-1510531704581-5b2870972060?q=80&w=1200", title: "Laboratorium Komputer", desc: "Fasilitas digital untuk menunjang pembelajaran IT." },
    { src: "https://images.unsplash.com/photo-1577896332189-d42125f171bc?q=80&w=1200", title: "Ruang Kelas Digital", desc: "Kenyamanan belajar dengan teknologi multimedia." },
  ];

  const pondokImages = [
    { src: "https://images.unsplash.com/photo-1564682054942-127926b4791e?q=80&w=1200", title: "Masjid Jami'", desc: "Pusat ibadah dan kajian kitab kuning." },
    { src: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1200", title: "Kegiatan Mengaji", desc: "Membangun karakter santri yang berakhlak mulia." },
    { src: "https://images.unsplash.com/photo-1594142118536-e06969eb2eb8?q=80&w=1200", title: "Halaqah Tahfizh", desc: "Program unggulan penghafal Al-Qur'an." },
  ];

  return (
    <div className={styles.pageWrapper}>
      
      {/* 1. HERO SECTION (Cinematic Parallax) */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <Container className="h-100 d-flex flex-column justify-content-center align-items-center text-center">
          <Fade direction="up" cascade triggerOnce damping={0.2}>
            <span className={styles.badgeHero}>BERAKHLAK • BERILMU • BERPRESTASI</span>
            <h1 className={styles.heroTitle}>Mengenal Roudlotush Sholihin</h1>
            <p className={styles.heroSubtitle}>
              Sinergi pendidikan modern dan nilai-nilai pesantren salafiyah<br/>di jantung Yogyakarta.
            </p>
          </Fade>
        </Container>
        <div className={styles.waveDivider}>
           <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
            </svg>
        </div>
      </section>

      {/* 2. STATS BAR (Floating Card) */}
      <Container className={styles.statsContainer}>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className={styles.statsCard}>
              <Row>
                <Col md={4} className={styles.statItem}>
                  <BookHalf size={32} className={styles.statIcon}/>
                  <h3>2023</h3>
                  <p>Tahun Berdiri</p>
                </Col>
                <Col md={4} className={styles.statItem}>
                  <PeopleFill size={32} className={styles.statIcon}/>
                  <h3>Santri</h3>
                  <p>Berakhlak Mulia</p>
                </Col>
                <Col md={4} className={styles.statItem}>
                  <AwardFill size={32} className={styles.statIcon}/>
                  <h3>A</h3>
                  <p>Akreditasi Target</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      {/* 3. SEJARAH & STORYTELLING */}
      <section className={styles.sectionHistory}>
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <Slide direction="left" triggerOnce>
                <div className={styles.imageStack}>
                  <img src="https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=800" alt="Landscape" className={styles.imgBack} />
                  <img src="https://images.unsplash.com/photo-1560167016-015b630dc65a?q=80&w=800" alt="Portrait" className={styles.imgFront} />
                  <div className={styles.experienceBadge}>
                    <span>Est.</span>
                    <strong>2023</strong>
                  </div>
                </div>
              </Slide>
            </Col>
            
            <Col lg={6}>
              <Fade direction="right" triggerOnce>
                <h4 className={styles.subHeading}>SEJARAH KAMI</h4>
                <h2 className={styles.heading}>Lahir dari Keikhlasan, Tumbuh dengan Prestasi</h2>
                <div className={styles.historyText}>
                  <p>
                    Pondok Pesantren & MTs Roudlotush Sholihin berdiri pada tahun 2023 di Bimomartani, Ngemplak, Sleman. Kami hadir sebagai jawaban atas kegelisahan umat akan kebutuhan pendidikan yang menyeimbangkan <strong>Iptek (Ilmu Pengetahuan Teknologi)</strong> dan <strong>Imtaq (Iman dan Taqwa)</strong>.
                  </p>
                  <p>
                    Nama <em>"Roudlotush Sholihin"</em> berarti "Taman Orang-Orang Saleh". Filosofi ini menjadi doa agar setiap jengkal tanah di pesantren ini menjadi tempat berseminya generasi saleh yang menyejukkan pandangan.
                  </p>
                  
                  <div className={styles.featureList}>
                    <div className={styles.featureItem}>
                        <CheckCircleFill className="text-success me-2"/> Kurikulum Terintegrasi
                    </div>
                    <div className={styles.featureItem}>
                        <CheckCircleFill className="text-success me-2"/> Lingkungan Asri & Kondusif
                    </div>
                    <div className={styles.featureItem}>
                        <CheckCircleFill className="text-success me-2"/> Program Tahfizh Intensif
                    </div>
                  </div>

                  <div className={styles.quoteBox}>
                    <Quote size={24} className={styles.quoteIcon}/>
                    <p>"Mencetak generasi yang tidak hanya pintar secara akademis, tetapi juga mapan secara spiritual."</p>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 4. VISI & MISI CARDS */}
      <section className={styles.visionSection}>
        <Container>
            <div className="text-center mb-5">
                <h2 className={styles.headingLight}>Visi & Misi</h2>
                <div className={styles.dividerCenter}></div>
            </div>
            <Row className="g-4">
                <Col md={6}>
                    <Card className={styles.visionCard}>
                        <Card.Body>
                            <div className={styles.iconCircle}>
                                <starFill size={24} />
                            </div>
                            <h3>Visi</h3>
                            <p>“Terwujudnya Generasi Islam yang Hafizh Qur’an, Berwawasan Global, dan Berakhlakul Karimah.”</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className={styles.visionCard}>
                        <Card.Body>
                            <div className={styles.iconCircle}>
                                <BookHalf size={24} />
                            </div>
                            <h3>Misi Utama</h3>
                            <ul>
                                <li>Menyelenggarakan pendidikan berbasis Al-Qur'an.</li>
                                <li>Mengembangkan potensi akademik dan non-akademik.</li>
                                <li>Membekali santri dengan keterampilan teknologi (IT).</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
      </section>

      {/* 5. GALERI FASILITAS (Modern Tabs) */}
      <section className={styles.gallerySection}>
        <Container>
          <div className="text-center mb-5">
            <Fade direction="up" triggerOnce>
              <h4 className={styles.subHeading}>FASILITAS & LINGKUNGAN</h4>
              <h2 className={styles.heading}>Menunjang Kreativitas Santri</h2>
            </Fade>
          </div>

          <Tabs
            id="gallery-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className={`justify-content-center mb-4 ${styles.customTabs}`} 
          >
            <Tab eventKey="sekolah" title="Gedung Madrasah (MTs)">
               <ModernCarousel images={schoolImages} />
            </Tab>
            <Tab eventKey="pondok" title="Lingkungan Pesantren">
               <ModernCarousel images={pondokImages} />
            </Tab>
          </Tabs>
        </Container>
      </section>

    </div>
  );
}

// Komponen Helper untuk Carousel agar lebih bersih
const ModernCarousel = ({ images }) => (
    <div className={styles.carouselWrapper}>
        <Carousel fade interval={3000} controls={true} indicators={false} nextLabel="" prevLabel="">
            {images.map((img, idx) => (
                <Carousel.Item key={idx}>
                    <div className={styles.carouselSlide}>
                        <div className={styles.imgContainer}>
                            <img className="d-block w-100" src={img.src} alt={img.title} />
                        </div>
                        <div className={styles.captionOverlay}>
                            <div className={styles.captionContent}>
                                <h3>{img.title}</h3>
                                <p>{img.desc}</p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
);

export default Profil;
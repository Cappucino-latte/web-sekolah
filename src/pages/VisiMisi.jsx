import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal"; 
import { CheckCircleFill, Gem, BookHalf, HeartFill } from "react-bootstrap-icons"; 
import styles from './VisiMisi.module.css'; 

function VisiMisi() {
  return (
    <div className={styles.pageWrapper}>
      
      {/* 1. HERO SECTION (Konsisten dengan halaman lain) */}
      <section className={styles.heroSection}>
        <Container>
          <Fade direction="up" triggerOnce>
            <div className="text-center">
              <span className={styles.heroLabel}>OUR COMPASS</span>
              <h1 className={styles.heroTitle}>Visi - Missi</h1>
              <div className={styles.heroLine}></div>
              <p className={styles.heroSubtitle}>
                Arah dan tujuan kami dalam membentuk generasi Roudlotush Sholihin yang berintegritas, cerdas, dan berakhlak mulia.
              </p>
            </div>
          </Fade>
        </Container>
      </section>

      {/* 2. VISION SECTION (Split Layout) */}
      <section className={styles.visionSection}>
        <Container>
            <Row className="align-items-center gx-5">
                <Col lg={5} className="mb-5 mb-lg-0">
                    <Fade direction="left" triggerOnce>
                        <div className={styles.imageContainer}>
                            <img 
                                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop" 
                                alt="Vision" 
                                className={styles.visionImage} 
                            />
                            <div className={styles.imageDecor}></div>
                        </div>
                    </Fade>
                </Col>
                <Col lg={7}>
                    <Fade direction="right" triggerOnce cascade damping={0.2}>
                        <div className="ps-lg-4">
                            <span className={styles.sectionLabel}>VISI KAMI</span>
                            <h2 className={styles.visionStatement}>
                                "Terwujudnya insan yang beriman, berilmu, dan berakhlakul karimah serta unggul dalam prestasi di era global."
                            </h2>
                            <p className={styles.visionDesc}>
                                Kami berkomitmen untuk menyelaraskan keunggulan akademik dengan kedalaman spiritual. Visi ini menjadi landasan setiap kebijakan dan langkah pendidikan yang kami ambil.
                            </p>
                            
                            {/* Key Points */}
                            <div className={styles.visionPoints}>
                                <div className={styles.pointItem}>
                                    <Gem className={styles.pointIcon} />
                                    <span>Unggul Prestasi</span>
                                </div>
                                <div className={styles.pointItem}>
                                    <BookHalf className={styles.pointIcon} />
                                    <span>Wawasan Luas</span>
                                </div>
                                <div className={styles.pointItem}>
                                    <HeartFill className={styles.pointIcon} />
                                    <span>Berakhlak Mulia</span>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </Col>
            </Row>
        </Container>
      </section>

      {/* 3. MISSION SECTION (Grid Layout) */}
      <section className={styles.missionSection}>
        <Container>
            <Fade direction="up" triggerOnce>
                <div className="text-center mb-5">
                    <span className={styles.sectionLabel}>MISI KAMI</span>
                    <h2 className={styles.sectionHeading}>Langkah Nyata Mewujudkan Visi</h2>
                </div>
            </Fade>

            <Row className="g-4">
                {[
                    "Menanamkan nilai-nilai keimanan dan ketakwaan melalui pembiasaan ibadah sehari-hari.",
                    "Melaksanakan pembelajaran aktif, inovatif, kreatif, efektif, dan menyenangkan (PAIKEM).",
                    "Mengembangkan potensi akademik dan non-akademik peserta didik sesuai minat dan bakat.",
                    "Mewujudkan lingkungan madrasah yang bersih, sehat, asri, dan islami.",
                    "Membangun kerjasama harmonis antar warga madrasah, wali murid, dan masyarakat."
                ].map((item, index) => (
                    <Col md={6} lg={4} key={index}>
                        <Fade direction="up" delay={index * 100} triggerOnce className="h-100">
                            <div className={styles.missionCard}>
                                <div className={styles.numberBadge}>0{index + 1}</div>
                                <p className={styles.missionText}>{item}</p>
                                <CheckCircleFill className={styles.checkIcon} />
                            </div>
                        </Fade>
                    </Col>
                ))}
            </Row>
        </Container>
      </section>

      {/* 4. QUOTE / FOOTER SECTION */}
      <section className={styles.quoteSection}>
        <Container>
            <Fade direction="up" triggerOnce>
                <div className={styles.quoteBox}>
                    <p>"Pendidikan bukan sekadar mengisi wadah, tetapi menyalakan api."</p>
                    <span>— W.B. Yeats</span>
                </div>
            </Fade>
        </Container>
      </section>

    </div>
  );
}

export default VisiMisi;
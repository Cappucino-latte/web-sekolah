import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import { LinkContainer } from "react-router-bootstrap";
import styles from "./Kepesantrenan.module.css";

import {
  Book,
  HeartFill,
  Gem,
  CheckCircle,
  GeoAltFill,
  PeopleFill
} from "react-bootstrap-icons";

// --- DATA STRUKTUR ORGANISASI (SESUAI GAMBAR) ---
const leaders = [
  {
    name: "Mufti al Lutfi",
    role: "Ketua Yayasan",
    // Gunakan foto placeholder atau ganti dengan foto asli
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Mohammad Yazid",
    role: "Direktur Pesantren",
    img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Muhammad Asyrofuddin, S.Ag., M.Pd.",
    role: "Direktur Madrasah",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Muhammad Muflih al-Mahiry",
    role: "Kepala Pesantren",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Azis Zulfian Adisianto, S.S., M.A.",
    role: "Kepala Madrasah",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
  }
];

// --- DATA PROGRAM (SESUAI DOKUMEN & STYLE KUNING) ---
const unggulanPesantren = [
  {
    icon: <Book size={32} />,
    title: "Tahfidz Bersanad",
    desc: "Program menghafal Al-Qur'an menggunakan metode Yanbu'a, dibimbing pengajar bersanad hingga Rasulullah SAW.",
  },
  {
    icon: <Gem size={32} />,
    title: "Kitab Kuning",
    desc: "Kajian turats terintegrasi dengan metode Al-Miftah Lil Ulum Sidogiri untuk pemahaman mendalam.",
  },
  {
    icon: <HeartFill size={32} />,
    title: "Pesantren Ramah Anak",
    desc: "Lingkungan pondok yang aman, hangat, dan anti-bullying demi kesehatan mental santri.",
  },
  {
    icon: <PeopleFill size={32} />,
    title: "Madrasah Terintegrasi",
    desc: "Kurikulum Merdeka yang dipadukan dengan nilai-nilai kepesantrenan dan Project Based Learning.",
  }
];

function Kepesantrenan() {
  return (
    <div className={styles.pageWrapper}>
      
      {/* 1. HERO HEADER */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <Container className="position-relative h-100 d-flex align-items-center justify-content-center text-center">
          <Fade direction="up" triggerOnce>
            <div className="text-white">
              <span className={styles.heroBadge}>PONDOK PESANTREN</span>
              <h1 className={styles.heroTitle}>Roudlotush Sholihin</h1>
              <p className={styles.heroSubtitle}>"Taman Orang-Orang Saleh"</p>
              <div className={styles.heroLine}></div>
            </div>
          </Fade>
        </Container>
      </section>

      {/* 2. FILOSOFI (TENTANG KAMI) */}
      <section className={styles.philosophySection}>
        <Container>
          <Row className="align-items-center gx-lg-5">
            <Col lg={6} className="mb-5 mb-lg-0">
               <Slide direction="left" triggerOnce>
                  <div className={styles.imgFrame}>
                    <img 
                        src="https://images.unsplash.com/photo-1596920676231-c4238e8869a8?q=80&w=1000&auto=format&fit=crop" 
                        alt="Santri Mengaji" 
                        className={styles.philosophyImg}
                    />
                    <div className={styles.accentBox}></div>
                  </div>
               </Slide>
            </Col>
            <Col lg={6}>
              <Slide direction="right" triggerOnce>
                <span className={styles.sectionTag}>TENTANG KAMI</span>
                <h2 className={styles.sectionHeading}>Lahir dari Keikhlasan</h2>
                <p className="text-muted mb-3">
                  Pondok Pesantren Roudlotush Sholihin berdiri pada tahun 2023 di Bimomartani, Sleman. Nama ini bermakna <strong>"Taman Orang-Orang Saleh"</strong>, tempat tumbuhnya generasi yang menyejukkan hati.
                </p>
                <p className="text-muted mb-4">
                  Visi kami adalah mewujudkan Penghafal Qur’an yang <strong>Amali</strong> (mengamalkan ilmu) dan <strong>Berwawasan Global</strong> (siap menghadapi tantangan zaman).
                </p>
                
                <div className={styles.quoteBox}>
                  "Mengintegrasikan ilmu agama, sains, dan keterampilan hidup dalam satu tarikan nafas pendidikan."
                </div>
              </Slide>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. PROGRAM PRIORITAS (STYLE KUNING) */}
      <section className={styles.programSection}>
        <Container>
            <div className="text-center mb-5">
                <span className={styles.programTag}>PROGRAM PRIORITAS</span>
                <h2 className={styles.programHeading}>Keunggulan Pesantren</h2>
            </div>
            <Row className="g-4 justify-content-center">
                {unggulanPesantren.map((item, idx) => (
                    <Col lg={3} md={6} key={idx}>
                        <Fade direction="up" delay={idx * 100} triggerOnce className="h-100">
                            <div className={styles.programCard}>
                                <div className={styles.iconCircle}>
                                    {item.icon}
                                </div>
                                <h4 className={styles.cardTitle}>{item.title}</h4>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </div>
                        </Fade>
                    </Col>
                ))}
            </Row>
        </Container>
      </section>

      {/* 4. STRUKTUR ORGANISASI */}
      <section className={styles.teamSection}>
        <Container>
            <div className="text-center mb-5">
                <span className={styles.sectionTag}>STRUKTUR ORGANISASI</span>
                <h2 className={styles.sectionHeading}>Pengasuh & Pimpinan</h2>
                <div className={styles.separatorCenter}></div>
            </div>

            <Row className="justify-content-center g-4">
                {leaders.map((leader, i) => (
                    <Col md={6} lg={4} key={i}>
                        <Fade direction="up" delay={i * 100} triggerOnce>
                            <div className={styles.teamCard}>
                                <div className={styles.teamImgWrapper}>
                                    <img src={leader.img} alt={leader.name} className={styles.teamImg} />
                                </div>
                                <div className={styles.teamInfo}>
                                    <h5 className={styles.leaderName}>{leader.name}</h5>
                                    <span className={styles.leaderRole}>{leader.role}</span>
                                </div>
                            </div>
                        </Fade>
                    </Col>
                ))}
            </Row>
        </Container>
      </section>

      {/* 5. FASILITAS (LIST) */}
      <section className={styles.facilitySection}>
        <Container>
            <Row className="align-items-center">
                <Col lg={5} className="mb-4 mb-lg-0">
                    <h2 className={styles.sectionHeading}>Fasilitas Mukim</h2>
                    <p className="text-muted">
                        Kami menyediakan lingkungan asrama yang bersih, sehat, dan kondusif untuk mendukung proses belajar dan menghafal santri.
                    </p>
                    <ul className={styles.facilityList}>
                        <li><CheckCircle className={styles.checkIcon}/> Masjid Jami'</li>
                        <li><CheckCircle className={styles.checkIcon}/> Asrama Putra & Putri Terpisah</li>
                        <li><CheckCircle className={styles.checkIcon}/> Dapur Umum Higienis</li>
                        <li><CheckCircle className={styles.checkIcon}/> Ruang Belajar & Aula</li>
                    </ul>
                </Col>
                <Col lg={7}>
                    <Row className="g-2">
                        <Col xs={6}>
                            <img src="https://images.unsplash.com/photo-1542045648-5c4d0812b46f?q=80&w=600&auto=format&fit=crop" className={styles.facilityImg} alt="Asrama" />
                        </Col>
                        <Col xs={6}>
                             <img src="https://images.unsplash.com/photo-1583537265436-1e0e7a2b96e4?q=80&w=600&auto=format&fit=crop" className={styles.facilityImg} alt="Masjid" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      </section>

      {/* 6. CTA / LOKASI */}
      <section className={styles.ctaSection}>
         <Container className="text-center text-white">
            <GeoAltFill size={40} className="mb-3 opacity-75"/>
            <h2 className="mb-3 fw-bold">Mari Bergabung Menjadi Keluarga Santri</h2>
            <p className="mb-4 opacity-90">
                Jalan Cangkringan No. 8, Pondok Dawung, Bimomartani, Ngemplak, Sleman, DIY.
            </p>
            <LinkContainer to="/ppdb">
                <button className={styles.btnCta}>Daftar Santri Baru</button>
            </LinkContainer>
         </Container>
      </section>

    </div>
  );
}

export default Kepesantrenan;
import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import styles from "./Akademik.module.css";

import {
  BookHalf,
  Translate,
  Laptop,
  Award,
  ClockHistory,
  FileEarmarkPdf
} from "react-bootstrap-icons";

// --- DATA ---
const programs = [
  {
    icon: <BookHalf size={32} />,
    title: "Tahfidz Al-Qur'an",
    desc: "Program intensif hafalan Al-Qur'an dengan target minimal 3 Juz per tahun disertai pemahaman tajwid dan makhorijul huruf."
  },
  {
    icon: <Translate size={32} />,
    title: "Bilingual Area",
    desc: "Lingkungan berbahasa Arab dan Inggris dalam percakapan sehari-hari untuk melatih kepercayaan diri dan komunikasi santri."
  },
  {
    icon: <Laptop size={32} />,
    title: "Sains & Teknologi",
    desc: "Pembelajaran berbasis STEAM (Science, Tech, Engineering, Art, Math) dan coding dasar untuk kesiapan era digital."
  },
  {
    icon: <Award size={32} />,
    title: "Kajian Kitab Kuning",
    desc: "Melestarikan tradisi keilmuan pesantren melalui kajian Fiqih, Aqidah, dan Akhlak bersumber dari kitab turats mu'tabarah."
  }
];

const dailySchedule = [
  { time: "03.30 - 04.30", activity: "Qiyamul Lail & Sholat Subuh" },
  { time: "04.30 - 06.00", activity: "Halaqah Tahfidz / Ngaji Kitab Pagi" },
  { time: "06.00 - 07.00", activity: "Persiapan Sekolah & Sarapan" },
  { time: "07.00 - 13.30", activity: "KBM Formal (Sekolah)" },
  { time: "13.30 - 15.00", activity: "Istirahat & Sholat Ashar" },
  { time: "15.30 - 17.00", activity: "Ekstrakurikuler / Diniyah Sore" },
  { time: "18.00 - 19.30", activity: "Sholat Maghrib & Kajian Kitab" },
  { time: "20.00 - 21.30", activity: "Belajar Mandiri / Tutorial Malam" },
];

function Akademik() {
  return (
    <div className={styles.pageWrapper}>

      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <Container>
          <Fade direction="up" triggerOnce>
            <div>
              <span className={styles.heroLabel}>AKADEMIK & KURIKULUM</span>
              <h1 className={styles.heroTitle}>Pilar Keilmuan</h1>
              <div className={styles.heroLine}></div>
              <p className={styles.heroSubtitle}>
               Membangun integrasi kokoh antara kedalaman ilmu agama (Tafaqquh Fiddin) 
               dan wawasan sains modern demi mencetak generasi Ulul Albab.
              </p>
            </div>
          </Fade>
        </Container>
      </section>

      {/* 2. KURIKULUM (TABS) */}
      <section className={`${styles.sectionPadding} ${styles.bgLight}`}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <span className={styles.badgeLabel}>SISTEM PENDIDIKAN</span>
              <h2 className={styles.sectionHeading}>Integrasi Kurikulum</h2>
              <p className="text-muted">
                Kami menerapkan kurikulum yang adaptif dan holistik untuk menjawab tantangan zaman tanpa kehilangan jati diri pesantren.
              </p>
            </Col>
          </Row>

          <Tab.Container id="curriculum-tabs" defaultActiveKey="nasional">
            <Row>
              <Col lg={4} className="mb-4 mb-lg-0">
                <Nav variant="pills" className="flex-column gap-2">
                  <Nav.Item>
                    <Nav.Link eventKey="nasional" className={styles.customTab}>
                      Kurikulum Nasional (Merdeka)
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="pesantren" className={styles.customTab}>
                      Kurikulum Kepesantrenan
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="pengembangan" className={styles.customTab}>
                      Pengembangan Diri (Ekskul)
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={8}>
                <Tab.Content className={styles.tabContentArea}>
                  <Tab.Pane eventKey="nasional">
                    <Fade triggerOnce>
                        <h3 className="fw-bold mb-3" style={{color: 'var(--text-dark)'}}>Kurikulum Merdeka</h3>
                        <p className="text-muted">Mengedepankan pembelajaran berbasis proyek (Project Based Learning) untuk menguatkan profil Pelajar Pancasila Rahmatan Lil Alamin.</p>
                        <ul className={styles.subjectList}>
                            <li>Matematika & Sains Terpadu</li>
                            <li>Literasi Bahasa (Indo, Inggris, Arab)</li>
                            <li>IPS & Kewarganegaraan</li>
                            <li>Teknologi Informatika & Digital Skill</li>
                        </ul>
                    </Fade>
                  </Tab.Pane>
                  <Tab.Pane eventKey="pesantren">
                    <Fade triggerOnce>
                        <h3 className="fw-bold mb-3" style={{color: 'var(--text-dark)'}}>Dirasah Islamiyah</h3>
                        <p className="text-muted">Materi keagamaan mendalam (Tafaqquh Fiddin) khas pesantren salaf:</p>
                        <ul className={styles.subjectList}>
                            <li>Tahfidz Al-Qur'an (Target 3 Juz)</li>
                            <li>Fiqih Ibadah (Safinatun Najah / Fathul Qorib)</li>
                            <li>Nahwu Shorof (Jurumiyah / 'Imriti)</li>
                            <li>Aqidah Akhlak (Ta'lim Muta'allim)</li>
                        </ul>
                    </Fade>
                  </Tab.Pane>
                   <Tab.Pane eventKey="pengembangan">
                    <Fade triggerOnce>
                        <h3 className="fw-bold mb-3" style={{color: 'var(--text-dark)'}}>Minat & Bakat</h3>
                        <p className="text-muted">Wadah penyaluran potensi non-akademik santri:</p>
                        <Row>
                            <Col md={6}>
                                <ul className={styles.subjectList}>
                                    <li>Pramuka (Wajib)</li>
                                    <li>Pencak Silat Pagar Nusa</li>
                                    <li>Seni Hadrah & Sholawat</li>
                                    <li>Public Speaking (Muhadhoroh)</li>
                                </ul>
                            </Col>
                            <Col md={6}>
                                <ul className={styles.subjectList}>
                                    <li>Klub Robotik & Coding</li>
                                    <li>Jurnalistik & Desain Grafis</li>
                                    <li>Klub Bahasa Asing</li>
                                    <li>Kaligrafi & Qira'ah</li>
                                </ul>
                            </Col>
                        </Row>
                    </Fade>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>

      {/* 3. PROGRAM UNGGULAN (Cards) */}
      <section className={styles.sectionPadding}>
        <Container>
           <div className="text-center mb-5">
              <span className={styles.badgeLabel}>PROGRAM PRIORITAS</span>
              <h2 className={styles.sectionHeading}>Keunggulan Akademik</h2>
           </div>
           
           <Row className="g-4">
              {programs.map((item, index) => (
                <Col md={6} lg={3} key={index}>
                    <Slide direction="up" delay={index * 100} triggerOnce>
                        <div className={styles.programCard}>
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <h4 className={styles.programTitle}>{item.title}</h4>
                            <p className={styles.programDesc}>{item.desc}</p>
                        </div>
                    </Slide>
                </Col>
              ))}
           </Row>
        </Container>
      </section>

      {/* 4. DAILY ACTIVITY (Timeline) */}
      <section className={`${styles.sectionPadding} ${styles.bgLight}`}>
        <Container>
            <Row className="align-items-start">
                <Col lg={5} className="mb-5 mb-lg-0 sticky-top" style={{top: '100px', zIndex: 1}}>
                    <Fade direction="left" triggerOnce>
                        <span className={styles.badgeLabel}>KEHIDUPAN SANTRI</span>
                        <h2 className={styles.sectionHeading}>Rutinitas Harian</h2>
                        <p className="text-muted mb-4 text-justify">
                            Disiplin adalah kunci kesuksesan. Jadwal harian santri diatur ketat namun humanis, menyeimbangkan kebutuhan jasmani, rohani, dan intelektual (24 Jam Pendidikan).
                        </p>
                        <div className={styles.infoBox}>
                            <ClockHistory size={20} className="text-warning"/>
                            <span>Full Day & Boarding System</span>
                        </div>
                    </Fade>
                </Col>
                <Col lg={7}>
                    <div className={styles.timelineWrapper}>
                        {dailySchedule.map((item, idx) => (
                            <div className={styles.timelineItem} key={idx}>
                                <div className={styles.timeBadge}>{item.time}</div>
                                <div className={styles.activityName}>{item.activity}</div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
      </section>

      {/* 5. DOWNLOAD CTA */}
      <section className={styles.ctaSection}>
        <Container className="text-center">
            <h3 className="mb-3">Ingin Tahu Lebih Detail?</h3>
            <p className="mb-5 opacity-90">Unduh dokumen resmi Kalender Akademik dan Brosur Kurikulum terbaru.</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
                <button className={styles.btnOutline}>
                    <FileEarmarkPdf className="me-2"/> Kalender Akademik
                </button>
                <button className={styles.btnSolid}>
                    <FileEarmarkPdf className="me-2"/> Brosur PPDB
                </button>
            </div>
        </Container>
      </section>

    </div>
  );
}

export default Akademik;
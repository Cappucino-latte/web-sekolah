import React from "react";
import Hero from "../components/Hero.jsx";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Fade } from "react-awesome-reveal";
import styles from "./Home.module.css";

// Import Ikon
import {
  ArrowRight,
  CheckCircleFill,
  Trophy,
  Book,
  Building,
  Display,
  PencilSquare,
  Telephone,
} from "react-bootstrap-icons";

// Data Berita (tetap)
const newsData = [
  // ... (data Anda tidak berubah)
  {
    slug: "/berita/slug-berita-satu",
    title: "Rekrutmen Guru Pendidikan Pancasila",
    date: "Jul 31, 2025",
    category: "Berita",
    excerpt: "Syarat: Beragama Islam, memiliki ijazah minimal S1, dan berkomitmen mendidik generasi berakhlak.",
    color: "primary"
  },
  {
    slug: "/berita/slug-berita-dua",
    title: "Rekrutmen Guru Matematika & Seni",
    date: "Jul 23, 2025",
    category: "Berita",
    excerpt: "Dibutuhkan Guru Matematika dan Seni Rupa untuk memperkuat tenaga pendidik kami.",
    color: "success"
  },
  {
    slug: "/berita/slug-berita-tiga",
    title: "Rekrutmen Guru Teknologi Informasi",
    date: "Jul 7, 2025",
    category: "Berita",
    excerpt: "Satu orang guru TIK dengan kompetensi digital yang mumpuni untuk mendukung pembelajaran modern.",
    color: "info"
  }
];

// Data Program (tetap)
const programsData = [
  // ... (data Anda tidak berubah)
  { 
    title: "Botanical", 
    img: "https://source.unsplash.com/400x300/?botanical",
    description: "Program pengenalan dan penelitian flora"
  },
  { 
    title: "Tahfizh", 
    img: "https://source.unsplash.com/400x300/?quran",
    description: "Menghafal Al-Quran dengan metode modern"
  },
  { 
    title: "Entrepreneurship", 
    img: "https://source.unsplash.com/400x300/?business,market",
    description: "Mengembangkan jiwa wirausaha muda"
  },
  { 
    title: "Research", 
    img: "https://source.unsplash.com/400x300/?research,lab",
    description: "Riset dan inovasi sains terapan"
  }
];

// --- PERUBAHAN ---
// Data Info diperbarui dengan Komponen Ikon
const infoData = [
  {
    title: "Program Unggulan",
    icon: <Trophy size={24} />,
    description: "Tahfizh, Research & Entrepreneurship",
  },
  {
    title: "Kurikulum Sekolah",
    icon: <Book size={24} />,
    description: "Kurikulum Merdeka & Cambridge",
  },
  {
    title: "Semi Boarding",
    icon: <Building size={24} />,
    description: "Asrama dengan pendampingan 24/7",
  },
  {
    title: "Sarana Digital",
    icon: <Display size={24} />,
    description: "Lab komputer & pembelajaran digital",
  },
];

function Home() {
  return (
    <div className={styles.homeWrapper}>
      {/* === HERO SECTION === */}
      <Hero />

      {/* === BERITA SEKOLAH === */}
      <Fade direction="up" triggerOnce>
        {/* Menggunakan 'py-5' (padding y-axis) & 'bg-light' dari Bootstrap */}
        <section className="py-5 bg-light">
          <Container>
            {/* Menggunakan kelas 'display-5', 'fw-bold', 'lead', 'text-muted' dari Bootstrap */}
            <div className="text-center mb-5">
              <Badge bg="primary" className="mb-3 px-3 py-2">
                TERBARU
              </Badge>
              <h2 className="display-5 fw-bold">Berita Sekolah</h2>
              <p className="lead text-muted">
                Kabar dan informasi terbaru dari kami
              </p>
            </div>

            <Row className="g-4">
              {newsData.map((news, i) => (
                <Col md={4} key={i}>
                  {/* Menambahkan kelas 'styles.newsCard' untuk efek hover */}
                  <Card
                    className={`${styles.newsCard} h-100 border-0 shadow-sm`}
                  >
                    <Card.Body className="d-flex flex-column p-4">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <Badge bg={news.color} className="px-3 py-2">
                          {news.category}
                        </Badge>
                        <small className="text-muted">{news.date}</small>
                      </div>
                      <Card.Title className={`${styles.newsTitle} mb-3`}>
                        {news.title}
                      </Card.Title>
                      <Card.Text
                        className={`${styles.newsExcerpt} mb-4 flex-grow-1`}
                      >
                        {news.excerpt}
                      </Card.Text>
                      <LinkContainer to={news.slug}>
                        {/* Mengganti panah teks dengan Ikon Bootstrap */}
                        <Button
                          variant="link"
                          className={`${styles.newsButton} p-0 text-decoration-none fw-bold`}
                        >
                          Baca Selengkapnya <ArrowRight className="ms-1" />
                        </Button>
                      </LinkContainer>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </Fade>

      {/* === PROGRAM SEKOLAH === */}
      <Fade direction="up" triggerOnce>
        {/* Menggunakan 'py-5', 'bg-dark', 'text-white' dari Bootstrap */}
        <section className="py-5 bg-dark text-white">
          <Container>
            <Row className="align-items-center g-5">
              <Col lg={5} className="mb-4">
                <Badge bg="light" text="dark" className="mb-3 px-3 py-2">
                  PROGRAM UNGGULAN
                </Badge>
                {/* Menggunakan kelas 'display-5', 'fw-bold', 'lead' dari Bootstrap */}
                <h2 className="display-5 fw-bold mb-4">
                  School of Tahfizh, Research, and Entrepreneurship
                </h2>
                <p className="lead mb-3">
                  Membekali peserta didik dengan tiga pilar utama yang
                  mendukung potensi akademik dan karakter islami.
                </p>
                <p className="text-white-50 mb-4">
                  Didukung oleh laboratorium integratif dan lingkungan belajar
                  inovatif yang menginspirasi.
                </p>
                <div className="d-flex gap-3">
                  <Button
                    variant="light"
                    size="lg"
                    className={`${styles.joinButton} rounded-pill px-4 fw-bold`}
                  >
                    Bergabung Sekarang
                  </Button>
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="rounded-pill px-4"
                  >
                    Lihat Detail
                  </Button>
                </div>
              </Col>

              <Col lg={7}>
                <Row className="g-4">
                  {programsData.map((program, i) => (
                    <Col sm={6} key={i}>
                      <Card
                        className={`${styles.programCard} border-0 overflow-hidden h-100`}
                      >
                        <div className={styles.programImageWrapper}>
                          <Card.Img
                            src={program.img}
                            alt={program.title}
                            className={styles.programImage}
                          />
                          <div className={styles.programOverlay}>
                            <div className={styles.programContent}>
                              <h5 className={styles.programTitle}>
                                {program.title}
                              </h5>
                              <p className={styles.programDesc}>
                                {program.description}
                              </p>
                              <a href="#" className={styles.programLink}>
                                Lihat Detail <ArrowRight className="ms-1" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </Fade>

      {/* === PROGRAM BEASISWA === */}
      <Fade direction="up" triggerOnce>
        {/* Menggunakan 'py-5' dan 'bg-white' */}
        <section className="py-5 bg-white">
          <Container>
            <Row className="align-items-center g-5">
              <Col md={5} className="mb-4 mb-md-0">
                <Badge bg="success" className="mb-3 px-3 py-2">
                  BEASISWA
                </Badge>
                <h2 className="display-5 fw-bold mb-4">Program Beasiswa</h2>
                <p className="lead text-muted mb-4">
                  Kami menyediakan berbagai jalur beasiswa bagi siswa
                  berprestasi dan dhuafa agar pendidikan berkualitas dapat
                  diakses semua kalangan.
                </p>
                {/* Menggunakan Ikon Bootstrap & menghapus list-style */}
                <ul className={`${styles.beasiswaList} list-unstyled fs-5 mb-4`}>
                  <li className="mb-2">
                    <CheckCircleFill className="text-success me-2" />
                    Beasiswa Penuh hingga 100%
                  </li>
                  <li className="mb-2">
                    <CheckCircleFill className="text-success me-2" />
                    Proses Seleksi Transparan
                  </li>
                  <li>
                    <CheckCircleFill className="text-success me-2" />
                    Pendampingan Akademik
                  </li>
                </ul>
                <Button
                  variant="success"
                  size="lg"
                  className={`${styles.beasiswaButton} rounded-pill px-4 fw-bold`}
                >
                  Info Beasiswa
                </Button>
              </Col>

              <Col md={7}>
                {/* Kartu beasiswa kustom Anda tetap dipertahankan */}
                <Row className="g-4">
                  <Col sm={6}>
                    <div
                      className={`${styles.beasiswaCard} position-relative overflow-hidden rounded-4 shadow`}
                    >
                      <img
                        src="https://source.unsplash.com/500x350/?quran,reading"
                        alt="Jalur Dhuafa"
                        className={styles.beasiswaImage}
                      />
                      <div className={styles.beasiswaOverlay}>
                        <div className={styles.beasiswaContent}>
                          <h4 className={styles.beasiswaTitle}>Jalur Dhuafa</h4>
                          <p className={styles.beasiswaText}>
                            Untuk siswa kurang mampu dengan potensi akademik
                            baik
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div
                      className={`${styles.beasiswaCard} position-relative overflow-hidden rounded-4 shadow`}
                    >
                      <img
                        src="https://source.unsplash.com/500x350/?trophy,award"
                        alt="Jalur Prestasi"
                        className={styles.beasiswaImage}
                      />
                      <div className={styles.beasiswaOverlay}>
                        <div className={styles.beasiswaContent}>
                          <h4 className={styles.beasiswaTitle}>Jalur Prestasi</h4>
                          <p className={styles.beasiswaText}>
                            Untuk siswa berprestasi di bidang akademik &
                            non-akademik
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </Fade>

      {/* === UNLOCK POTENTIAL === */}
      <Fade direction="up" triggerOnce>
        <section className="py-5 bg-light">
          <Container>
            <Row className="align-items-center g-5">
              <Col lg={6} className="mb-4 mb-lg-0">
                <div className={styles.potentialImageWrapper}>
                  <img
                    src="https://source.unsplash.com/700x500/?education,students"
                    alt="Galeri Siswa"
                    className={`${styles.potentialImage} img-fluid rounded-4 shadow-lg`}
                  />
                  <div className={styles.imageAccent}></div>
                </div>
              </Col>
              <Col lg={6}>
                <Badge bg="warning" text="dark" className="mb-3 px-3 py-2">
                  PRESTASI
                </Badge>
                <h2 className="display-5 fw-bold mb-4">
                  Unlock Your Potential, Be an Incredible Student!
                </h2>
                <p className="lead mb-3">
                  Kami berkomitmen memberikan layanan pendidikan terbaik agar
                  setiap peserta didik dapat berkembang secara optimal dengan
                  bimbingan guru profesional.
                </p>
                <p className="text-muted mb-5">
                  Dukungan fasilitas digital, kurikulum modern, dan bimbingan
                  karakter menjadikan kami tempat terbaik untuk belajar dan
                  tumbuh menjadi generasi unggul.
                </p>

                {/* --- DESAIN ULANG KARTU INFO --- */}
                <Row className="g-4">
                  {infoData.map((info, i) => (
                    <Col sm={6} key={i}>
                      {/* Menggunakan d-flex untuk tata letak ikon + teks */}
                      <div className="d-flex align-items-start h-100">
                        <div
                          className={`${styles.infoIconWrapper} flex-shrink-0`}
                        >
                          {info.icon}
                        </div>
                        <div className="ms-3">
                          <h5 className="fw-bold mb-1">{info.title}</h5>
                          <p className="text-muted mb-0">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </Fade>

      {/* === CTA SECTION === */}
      <Fade direction="up" triggerOnce>
        {/* Menambahkan 'py-5' */}
        <section className={`${styles.ctaSection} py-5 text-center text-white`}>
          <Container>
            <h2 className="display-5 fw-bold mb-4">
              Siap Bergabung dengan Kami?
            </h2>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: "600px" }}>
              Daftarkan putra-putri Anda sekarang dan wujudkan masa depan
              gemilang bersama MTSS Roudlotush Sholihin
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              {/* Menggunakan LinkContainer untuk navigasi */}
              <LinkContainer to="/pendaftaran">
                <Button
                  variant="light"
                  size="lg"
                  className="rounded-pill px-5 py-3 fw-bold"
                >
                  <PencilSquare className="me-2" /> Daftar Sekarang
                </Button>
              </LinkContainer>
              <Button
                variant="outline-light"
                size="lg"
                className="rounded-pill px-5 py-3"
              >
                <Telephone className="me-2" /> Hubungi Kami
              </Button>
            </div>
          </Container>
        </section>
      </Fade>
    </div>
  );
}

export default Home;
import React, { useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import styles from "./Profil.module.css"; 
import { Quote } from "react-bootstrap-icons";

function Profil() {
  const [key, setKey] = useState('sekolah');

  // Data Gambar Sekolah (MTs)
  const schoolImages = [
    { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop", title: "Gedung Utama MTs" },
    { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop", title: "Kegiatan Belajar Mengajar" },
    { src: "https://images.unsplash.com/photo-1510531704581-5b2870972060?q=80&w=600&auto=format&fit=crop", title: "Laboratorium Komputer" },
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop", title: "Perpustakaan" },
    { src: "https://images.unsplash.com/photo-1577896332189-d42125f171bc?q=80&w=600&auto=format&fit=crop", title: "Ruang Kelas Digital" },
    { src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=600&auto=format&fit=crop", title: "Lapangan Olahraga" },
  ];

  // Data Gambar Pondok Pesantren
  const pondokImages = [
    { src: "https://images.unsplash.com/photo-1564682054942-127926b4791e?q=80&w=600&auto=format&fit=crop", title: "Masjid Jami' Pondok" },
    { src: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=600&auto=format&fit=crop", title: "Kegiatan Mengaji Kitab" },
    { src: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=600&auto=format&fit=crop", title: "Asrama Santri Putra" },
    { src: "https://images.unsplash.com/photo-1594142118536-e06969eb2eb8?q=80&w=600&auto=format&fit=crop", title: "Halaqah Tahfizh" },
    { src: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=600&auto=format&fit=crop", title: "Suasana Lingkungan Asri" },
    { src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600&auto=format&fit=crop", title: "Gedung Asrama Putri" },
  ];

  return (
    <div className={styles.pageWrapper}>
      
      {/* 1. HERO HEADER */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <Container className={styles.heroContent}>
          <Fade direction="down" triggerOnce>
            <h1 className={styles.heroTitle}>Profil Lengkap</h1>
            <p className={styles.heroSubtitle}>
              Mengenal lebih dekat Pondok Pesantren & MTs Roudlotush Sholihin.
            </p>
          </Fade>
        </Container>
      </section>

      {/* 2. SEJARAH LENGKAP */}
      <section className={styles.sectionWrapper}>
        <Container>
          <Row className="g-5">
            {/* Kolom Teks Sejarah */}
            <Col lg={7}>
              <Fade direction="left" triggerOnce>
                <h2 className={styles.sectionTitle}>Sejarah Berdiri</h2>
                
                <div className={styles.historyText}>
                  <p>
                    <strong>Awal Mula Perjuangan (1995)</strong><br/>
                    Pondok Pesantren Roudlotush Sholihin didirikan pada tahun 1995 oleh Al-Maghfurlah KH. Ahmad Sholihin. Berawal dari sebuah surau kecil dan keinginan luhur untuk memberantas kebodohan serta menanamkan nilai-nilai Islam Ahlussunnah wal Jamaah di tengah masyarakat, beliau mulai mengajar segelintir santri yang datang dari warga sekitar. Dengan kesederhanaan dan keikhlasan, pondok ini perlahan tumbuh menjadi pusat kajian ilmu agama yang disegani.
                  </p>
                  
                  <p>
                    <strong>Pengembangan Dakwah</strong><br/>
                    Seiring berjalannya waktu, jumlah santri yang ingin menimba ilmu semakin bertambah. Tidak hanya dari lingkungan sekitar, tetapi juga dari luar daerah. Melihat antusiasme ini, Yayasan mulai membangun asrama permanen, masjid jami', dan fasilitas penunjang lainnya untuk memastikan kenyamanan para santri dalam menuntut ilmu (Tafaqquh Fiddin) dan menghafal Al-Qur'an.
                  </p>

                  <p>
                    <strong>Lahirnya MTs Roudlotush Sholihin (2023)</strong><br/>
                    Menyadari tantangan zaman yang semakin kompleks, di mana generasi muda tidak hanya butuh bekal agama tetapi juga ilmu pengetahuan umum dan teknologi, pada tahun 2023 Yayasan resmi mendirikan lembaga pendidikan formal <strong>Madrasah Tsanawiyyah (MTs) Roudlotush Sholihin</strong>.
                  </p>

                  <p>
                    Pendirian MTs ini bertujuan untuk mencetak kader ulama yang intelek; santri yang tidak hanya fasih membaca kitab kuning dan hafal Al-Qur'an, tetapi juga menguasai sains, teknologi, dan memiliki wawasan global. Kini, Roudlotush Sholihin terus berkembang memadukan sistem pendidikan Salafiyah (tradisional) dengan sistem Khalafiyah (modern) yang terintegrasi.
                  </p>
                </div>
              </Fade>
            </Col>

            {/* Kolom Gambar Historis */}
            <Col lg={5}>
              <Fade direction="right" triggerOnce>
                <div className={styles.historyImage}>
                  <img 
                    src="https://images.unsplash.com/photo-1560167016-015b630dc65a?q=80&w=800&auto=format&fit=crop" 
                    alt="Foto Sejarah Pondok" 
                  />
                </div>
                <div className="mt-4 p-4 bg-light rounded shadow-sm border-start border-4 border-warning">
                  <Quote size={30} className="text-warning mb-2"/>
                  <p className="fst-italic mb-0 text-secondary">
                    "Pondok ini bukan hanya tempat belajar, tapi tempat menempa hati dan akhlak. Ilmu tanpa adab ibarat pohon tanpa buah."
                  </p>
                  <p className="fw-bold mt-2 text-dark">- KH. Ahmad Sholihin</p>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. GALERI FOTO (Sekolah & Pondok) */}
      <section className={styles.gallerySection}>
        <Container>
          <div className="text-center mb-5">
            <Fade direction="up" triggerOnce>
              <h2 className={styles.sectionTitle}>Galeri Fasilitas</h2>
              <p className="text-muted">Potret lingkungan belajar yang nyaman di Madrasah dan Pondok Pesantren.</p>
            </Fade>
          </div>

          {/* TAB NAVIGASI */}
          <Tabs
            id="gallery-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className={`border-0 ${styles.customTabs}`} // Gunakan class module di sini
          >
            <Tab eventKey="sekolah" title="🏫 Gedung Sekolah (MTs)">
              <Row className="g-4">
                {schoolImages.map((img, idx) => (
                  <Col md={4} sm={6} key={idx}>
                    <Fade direction="up" delay={idx * 100} triggerOnce>
                      <div className={styles.galleryCard}>
                        <img src={img.src} alt={img.title} />
                        <div className={styles.galleryOverlay}>
                          <span className={styles.galleryCaption}>{img.title}</span>
                        </div>
                      </div>
                    </Fade>
                  </Col>
                ))}
              </Row>
            </Tab>

            <Tab eventKey="pondok" title="🕌 Pondok Pesantren">
              <Row className="g-4">
                {pondokImages.map((img, idx) => (
                  <Col md={4} sm={6} key={idx}>
                    <Fade direction="up" delay={idx * 100} triggerOnce>
                      <div className={styles.galleryCard}>
                        <img src={img.src} alt={img.title} />
                        <div className={styles.galleryOverlay}>
                          <span className={styles.galleryCaption}>{img.title}</span>
                        </div>
                      </div>
                    </Fade>
                  </Col>
                ))}
              </Row>
            </Tab>
          </Tabs>

        </Container>
      </section>

    </div>
  );
}

export default Profil;
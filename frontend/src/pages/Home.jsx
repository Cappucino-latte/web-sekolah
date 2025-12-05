import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import styles from "./Home.module.css";
import { supabase } from "../lib/supabaseClient";


// Import Icons
import {
  ArrowRight,
  Trophy,
  Award,
  Book,
  Building,
  StarFill,
  CalendarEvent,
  CheckCircleFill,
  Quote,
  ArrowUpRight
} from "react-bootstrap-icons";

// --- DATA CONTENT ---
const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541339907198-e021fc9e2752?q=80&w=1920",
    title: "Membangun Generasi Berkarakter",
    subtitle: "Pondasi intelektual dan spiritual yang kokoh untuk menghadapi tantangan global."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1577896332189-d42125f171bc?q=80&w=1920",
    title: "Sinergi Tradisi dan Inovasi",
    subtitle: "Memadukan kedalaman ilmu agama (Kitab Kuning) dengan kemajuan sains & teknologi."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1920",
    title: "Siap Berprestasi",
    subtitle: "Lingkungan belajar yang mendukung santri untuk menggali potensi terbaik mereka."
  }
];

const facilitiesData = [
  {
    icon: <Building />,
    title: "Gedung Milik Sendiri",
    desc: "Bangunan 3 lantai representatif & kondusif."
  },
  {
    icon: <Book />,
    title: "Perpustakaan Digital",
    desc: "Akses ribuan buku & e-book terintegrasi."
  },
  {
    icon: <Trophy />,
    title: "Sport Center",
    desc: "Lapangan Futsal, Basket, & Badminton."
  },
  {
    icon: <Award />,
    title: "Lab Multimedia",
    desc: "Komputer High-End untuk desain & coding."
  }
];

const featuresData = [
  {
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?q=80&w=600",
    title: "Tahfidz & Kitab Kuning",
    desc: "Program unggulan hafalan Al-Qur'an dan kajian kitab klasik metode praktis."
  },
  {
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=600",
    title: "Akreditasi A (Unggul)",
    desc: "Jaminan mutu pendidikan yang diakui secara nasional oleh BAN-S/M."
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600",
    title: "Ekosistem Digital",
    desc: "Pembelajaran berbasis Smart Classroom, CBT, dan Learning Management System."
  },
  {
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600",
    title: "Boarding School",
    desc: "Asrama yang nyaman dengan pembinaan karakter 24 jam."
  }
];

const schoolPrograms = [
  {
    title: "Sains & Riset",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600",
    description: "Laboratorium modern untuk pengembangan nalar kritis."
  },
  {
    title: "Entrepreneur",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600",
    description: "Inkubator bisnis siswa untuk mencetak wirausahawan."
  },
  {
    title: "Kelas Digital",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600",
    description: "Pembelajaran coding, desain grafis, dan IoT."
  },
  {
    title: "Bilingual",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600",
    description: "Program intensif Bahasa Arab dan Inggris."
  }
];

function Home() {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);
  const [achievementsData, setAchievementsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch berita dari Supabase
  useEffect(() => {
    const fetchBerita = async () => {
      const { data, error } = await supabase
        .from("berita")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

      if (error) {
        console.error("Error fetching berita:", error);
        return;
      }

      const formatted = data.map((b) => {
        const dateObj = new Date(b.tanggal || b.created_at);
        const month = dateObj.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        const formattedDate = `${day} ${month} ${year}`;

        return {
          id: b.id,
          slug: `/detail-berita/${b.id}`,
          title: b.judul,
          date: formattedDate,
          category: b.kategori || "Info Sekolah",
          image: b.thumbnail || "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600"
        };
      });

      setNewsData(formatted);
    };

    fetchBerita();
  }, []);

  // Fetch prestasi dari Supabase
  useEffect(() => {
    const fetchPrestasi = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("prestasi")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(4);

      if (error) {
        console.error("Error fetching prestasi:", error);
        setLoading(false);
        return;
      }

      const formatted = data.map((p) => {
        const dateObj = new Date(p.tanggal || p.created_at);
        const year = dateObj.getFullYear();

        return {
          id: p.id,
          image: p.gambar || "https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=800",
          level: p.tingkat || "Kabupaten",
          year: year.toString(),
          title: p.judul,
          desc: p.deskripsi || "Prestasi membanggakan santri kami."
        };
      });

      setAchievementsData(formatted);
      setLoading(false);
    };

    fetchPrestasi();
  }, []);

  return (
    <div className={styles.pageWrapper}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <Carousel fade controls={false} indicators={false} interval={6000} pause={false}>
          {heroSlides.map((slide) => (
            <Carousel.Item key={slide.id} className={styles.heroItem}>
              <div className={styles.heroBg}>
                <img className={styles.heroImg} src={slide.image} alt={slide.title} />
                <div className={styles.heroOverlay}></div>
              </div>
              <Container className="h-100 position-relative z-2">
                <div className={styles.heroContent}>
                  <Fade direction="up" triggerOnce cascade damping={0.2}>
                    <span className={styles.heroBadge}>MTs ROUDLOTUSH SHOLIHIN</span>
                    <h1 className={styles.heroTitle}>{slide.title}</h1>
                    <p className={styles.heroSubtitle}>{slide.subtitle}</p>
                    <div className="d-flex justify-content-center gap-3">
                      <LinkContainer to="/ppdb">
                        <button className={`${styles.btnCustom} ${styles.btnGold}`}>
                          Daftar Sekarang <ArrowUpRight className="ms-2"/>
                        </button>
                      </LinkContainer>
                      <LinkContainer to="/profil">
                        <button className={`${styles.btnCustom} ${styles.btnOutlineWhite}`}>
                          Profil Sekolah
                        </button>
                      </LinkContainer>
                    </div>
                  </Fade>
                </div>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* 2. ABOUT YAYASAN */}
      <section className={styles.aboutSection}>
        <Container>
          <Row className="align-items-center gx-lg-5">
            <Col lg={6} className="mb-5 mb-lg-0 position-relative">
              <Fade direction="left" triggerOnce>
                <div className={styles.aboutImgWrapper}>
                  <img
                    src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=1000"
                    alt="Suasana Belajar"
                    className={styles.aboutImg}
                  />
                  <div className={styles.experienceBadge}>
                    <span>EST.</span>
                    <strong>2023</strong>
                  </div>
                  {/* Decorative Element */}
                  <div className={styles.dotPattern}></div>
                </div>
              </Fade>
            </Col>
            <Col lg={6}>
              <Fade direction="right" triggerOnce>
                <span className={styles.sectionLabel}>TENTANG KAMI</span>
                <h2 className={styles.sectionHeading}>
                  Membangun Karakter,<br />
                  <span className="text-muted">Mencerdaskan Kehidupan.</span>
                </h2>
                <p className={styles.leadText}>
                  MTs Roudlotush Sholihin berdiri di atas fondasi nilai Islam yang kokoh.
                  Kami hadir tidak hanya sebagai tempat belajar, tetapi sebagai ekosistem
                  tumbuh kembang yang memadukan kecerdasan intelektual dengan kemuliaan akhlak.
                </p>
                <LinkContainer to="/profil">
                  <div className={styles.readMoreLink}>
                    BACA SEJARAH LENGKAP <ArrowRight />
                  </div>
                </LinkContainer>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. PRINCIPAL WELCOME */}
      <section className={styles.principalSection}>
        <Container>
           <Fade direction="up" triggerOnce>
             <div className={styles.principalCard}>
                  <Row>
                    <Col md={12} className="text-center mb-4">
                        <div className={styles.principalImgWrapper}>
                          <img
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800"
                            alt="Kepala Madrasah"
                            className={styles.principalImg}
                          />
                        </div>
                        <h5 className="fw-bold mt-3 mb-1 font-serif">Azis Zulfian Adisianto, S.S., M.A.</h5>
                        <span className="text-muted small text-uppercase ls-2">Kepala Madrasah</span>
                    </Col>
                    <Col md={12}>
                        <div className={styles.principalContent}>
                          <p className={styles.principalGreeting}>Bismillahirrahmanirrahim<br/>Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
                          
                          <p className={styles.principalText}>
                            Alhamdulillahi rabbil 'alamin, segala puji hanya milik Allah SWT, Tuhan semesta alam. 
                            Shalawat serta salam semoga senantiasa tercurah kepada junjungan kita Nabi Muhammad SAW, 
                            keluarga, sahabat, dan seluruh umatnya yang istiqamah mengikuti ajarannya hingga akhir zaman.
                          </p>
                          
                          <p className={styles.principalText}>
                            Dengan penuh rasa syukur, kami persembahkan kehadiran Website MTs Roudlotush Sholihin Ngemplak Sleman DIY 
                            sebagai salah satu media informasi, komunikasi, dan publikasi madrasah. Kehadiran website ini merupakan bentuk 
                            komitmen kami dalam mewujudkan madrasah yang adaptif terhadap perkembangan teknologi dan informasi di era digital, 
                            tanpa meninggalkan nilai-nilai keislaman dan karakter kepesantrenan.
                          </p>
                          
                          <p className={styles.principalText}>
                            Website ini diharapkan menjadi jembatan antara madrasah, peserta didik, orang tua, alumni, serta masyarakat luas 
                            untuk mengenal lebih dekat berbagai kegiatan, program unggulan, dan dinamika pendidikan di MTs Roudlotush Sholihin. 
                            Melalui laman ini, kami ingin menghadirkan wajah madrasah yang ramah, terbuka, dan terus berinovasi dalam mencetak 
                            generasi berilmu, berakhlakul karimah, dan berdaya saing.
                          </p>
                          
                          <p className={styles.principalText}>
                            Kami juga mengajak seluruh warga madrasah untuk menjadikan website ini sebagai sarana berbagi inspirasi, karya, dan prestasi. 
                            Semoga dengan kehadiran website ini, segala aktivitas dan cita-cita kita dalam mencerdaskan generasi Islam yang beriman, 
                            berilmu, dan beramal dapat terwujud dengan ridha Allah SWT.
                          </p>
                          
                          <p className={styles.principalText}>
                            Terima kasih kepada seluruh tim, guru, dan tenaga kependidikan yang telah berperan aktif dalam pengembangan website ini. 
                            Kritik dan saran yang membangun sangat kami harapkan demi penyempurnaan layanan informasi madrasah ke depan.
                          </p>
                          
                          <p className={styles.principalClosing}>Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
                        </div>
                    </Col>
                  </Row>
             </div>
           </Fade>
        </Container>
      </section>

      {/* 4. PRESTASI (Bento Grid) */}
      <section className={styles.prestasiSection}>
        <Container>
          <div className="d-flex justify-content-between align-items-end mb-5">
            <div>
              <span className={styles.sectionLabel}>HALL OF FAME</span>
              <h2 className={styles.sectionHeading}>Jejak Juara Santri</h2>
            </div>
            <div className="d-flex justify-content-center gap-3">
                     <LinkContainer to="/prestasi">
                <button className={`${styles.btnCustom} ${styles.btnOutlineDark} ${styles.btnOutlineDark} d-none d-md-block`}>
                  Lihat Semua Prestasi
                </button>
            </LinkContainer>
                    </div>
            
          </div>
          
          <div className={styles.bentoGrid}>
            <Fade cascade damping={0.1} triggerOnce>
              {achievementsData.map((item) => (
                  <div className={styles.bentoItem} key={item.id}>
                      <img src={item.image} alt={item.title} className={styles.achImg} />
                      <div className={styles.achOverlay}>
                          <div className={styles.achContent}>
                            <span className={styles.achBadge}>{item.level}</span>
                            <h4 className={styles.achTitle}>{item.title}</h4>
                            <p className={styles.achDesc}>{item.desc}</p>
                          </div>
                      </div>
                  </div>
              ))}
            </Fade>
          </div>
          
          <div className="d-md-none text-center mt-4">
             <LinkContainer to="/prestasi">
                <button className={`${styles.btnCustom} ${styles.btnOutlineDark}`}>Lihat Semua</button>
             </LinkContainer>
          </div>
        </Container>
      </section>

      {/* 5. FASILITAS */}
      <section className={styles.facilitySection}>
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6}>
                 <span className={styles.sectionLabel}>INFRASTRUKTUR</span>
                 <h2 className={styles.sectionHeading}>Fasilitas Modern</h2>
            </Col>
            <Col lg={6}>
                 <p className="text-muted lead mb-0">
                    Lingkungan belajar yang kondusif didukung fasilitas lengkap untuk menunjang potensi akademik dan non-akademik santri.
                 </p>
            </Col>
          </Row>

          <div className={styles.facilityGrid}>
            <Fade cascade damping={0.1} triggerOnce>
              {facilitiesData.map((item, i) => (
                <div className={styles.facilityCard} key={i}>
                  <div className={styles.facIconWrapper}>{item.icon}</div>
                  <h4 className={styles.facTitle}>{item.title}</h4>
                  <p className="text-muted small mt-2 mb-0">{item.desc}</p>
                </div>
              ))}
            </Fade>
          </div>
        </Container>
      </section>

      {/* 6. KEPESANTRENAN  */}
      <section className={styles.pesantrenSection}>
        <Container className="position-relative z-2">
          <Row className="align-items-center mb-5">
            <Col lg={6}>
               <span className={styles.sectionLabelAccent}>KEPESANTRENAN</span>
               <h2 className="display-4 fw-bold mb-4 font-serif">Taman Orang Saleh.</h2>
            </Col>
            <Col lg={6}>
                <p className="lead opacity-75">
                  Mengintegrasikan kurikulum merdeka dengan kurikulum pesantren salaf.
                  Mewujudkan santri penghafal Qur'an yang <strong>Amali</strong> dan <strong>Berwawasan Global</strong>.
                </p>
            </Col>
          </Row>

          <div className={styles.darkCardGrid}>
             <Fade cascade damping={0.2} direction="up" triggerOnce>
              <div className={styles.darkCard}>
                <StarFill className={styles.accentIcon} size={32}/>
                <h4 className="text-white fw-bold mt-4">Tahfidz Bersanad</h4>
                <p className="text-white-50">Program hafalan Al-Qur'an dibimbing pengajar bersanad.</p>
              </div>
              <div className={styles.darkCard}>
                <Book className={styles.accentIcon} size={32}/>
                <h4 className="text-white fw-bold mt-4">Kitab Kuning</h4>
                <p className="text-white-50">Kajian kitab turats menggunakan metode Al-Miftah Lil Ulum.</p>
              </div>
              <div className={styles.darkCard}>
                <CheckCircleFill className={styles.accentIcon} size={32}/>
                <h4 className="text-white fw-bold mt-4">Pesantren Ramah</h4>
                <p className="text-white-50">Lingkungan aman dan menyenangkan untuk karakter santri.</p>
              </div>
            </Fade>
          </div>
        </Container>
      </section>

      {/* 7. KEUNGGULAN */}
      <section className={styles.featureSection}>
        <Container>
          <div className="text-center mb-5">
            <span className={styles.sectionLabel}>KENAPA KAMI?</span>
            <h2 className={styles.sectionHeading}>Alasan Memilih Kami</h2>
          </div>

          <Row className="g-4">
            {featuresData.map((item, i) => (
              <Col lg={3} md={6} key={i}>
                <Fade delay={i * 100} triggerOnce>
                  <div className={styles.featureCard}>
                     <div className={styles.featImgWrap}>
                        <img src={item.image} alt={item.title} />
                        <div className={styles.featNumber}>{i+1}</div>
                     </div>
                     <h5 className={styles.featTitle}>{item.title}</h5>
                     <p className="text-muted small px-2">{item.desc}</p>
                  </div>
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 8. ACADEMIC PROGRAM */}
      <section className={styles.academicSection}>
        <Container fluid className="px-0">
          <Row className="g-0">
            <Col lg={3} className={styles.academicIntro}>
                <Slide direction="left" triggerOnce>
                  <div>
                    <span className={styles.sectionLabel}>KURIKULUM</span>
                    <h2 className={styles.sectionHeading}>Program<br />Unggulan</h2>
                    <p className="text-dark opacity-75 mb-4">Menyiapkan bekal akademik dan keterampilan masa depan.</p>
                    <LinkContainer to="/program/akademik">
                      <button className={`${styles.btnCustom} ${styles.btnOutlineDark}`}>Lihat Kurikulum</button>
                    </LinkContainer>
                  </div>
                </Slide>
            </Col>
            {schoolPrograms.map((prog, i) => (
              <Col lg={2} md={4} sm={6} key={i} className="position-relative">
                  <div className={styles.tileCard}>
                    <img src={prog.img} alt={prog.title} className={styles.tileImage} />
                    <div className={styles.tileOverlay}>
                        <h4 className={styles.tileTitle}>{prog.title}</h4>
                        <div className={styles.tileContentHid}>
                           <p className={styles.tileText}>{prog.description}</p>
                           <ArrowRight className="text-white" />
                        </div>
                    </div>
                  </div>
              </Col>
            ))}
             <Col lg={1} className={styles.moreProgramsBtn}>
                <LinkContainer to="/program" style={{cursor:'pointer', width: '100%', height: '100%'}}>
                   <div className="d-flex flex-column align-items-center justify-content-center h-100 w-100 text-white">
                      <span className="text-center small fw-bold ls-2">MORE<br/>PROGRAMS</span>
                      <ArrowRight className="mt-2"/>
                   </div>
                </LinkContainer>
             </Col>
          </Row>
        </Container>
      </section>

      {/* 9. NEWS */}
      <section className={styles.newsSection}>
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div>
               <span className={styles.sectionLabel}>UPDATE TERKINI</span>
               <h2 className={styles.sectionHeading}>Kabar Madrasah</h2>
            </div>
            <LinkContainer to="/berita">
              <span className={styles.linkArrow}>Lihat Semua <ArrowRight/></span>
            </LinkContainer>
          </div>
          <Row className="g-4">
            {newsData.map((news, i) => (
              <Col lg={4} md={6} key={news.id || i}>
                <Fade delay={i * 100} triggerOnce>
                  <div 
                    className={styles.newsCard}
                    onClick={() => navigate(news.slug)}
                    style={{ cursor: 'pointer' }}
                  >
                     <div className={styles.newsImgContainer}>
                        <img src={news.image} alt={news.title} />
                        <div className={styles.dateBadge}>
                          <span className="fw-bold d-block fs-4">{news.date.split(" ")[0]}</span>
                          <span className="small text-uppercase">{news.date.split(" ")[1]}</span>
                        </div>
                     </div>
                     <div className={styles.newsBody}>
                        <span className={styles.newsCat}>{news.category}</span>
                        <h4 className={styles.newsTitle}>{news.title}</h4>
                        <span className={styles.readMoreSmall}>Baca Selengkapnya</span>
                     </div>
                  </div>
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 10. CTA */}
      <section className={styles.ctaSection}>
         <div className={styles.ctaBg}></div>
         <Container className="position-relative z-2 text-center text-white">
            <Fade direction="up" triggerOnce>
              <h2 className={styles.ctaHeading}>Siap Bergabung Bersama Kami?</h2>
              <p className="lead mb-5 opacity-90">Wujudkan masa depan gemilang dengan pendidikan karakter dan prestasi.</p>
              <div className="d-flex justify-content-center gap-3">
                  <LinkContainer to="/ppdb">
                      <button className={`${styles.btnCustom} ${styles.btnGold}`}>PPDB Online</button>
                  </LinkContainer>
                  <LinkContainer to="/kontak">
                      <button className={`${styles.btnCustom} ${styles.btnOutlineWhite}`}>Hubungi Kami</button>
                  </LinkContainer>
              </div>
            </Fade>
         </Container>
      </section>

    </div>
  );
}

export default Home;
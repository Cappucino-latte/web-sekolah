import React, { useState, useEffect } from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal"; 
import { Trophy, CalendarEvent, StarFill } from "react-bootstrap-icons";
import styles from './Prestasi.module.css'; 
import { supabase } from "../lib/supabaseClient";

const categories = ['Semua', 'Akademik', 'Olahraga', 'Seni'];

function Prestasi() {
  const [filter, setFilter] = useState('Semua');
  const [daftarPrestasi, setDaftarPrestasi] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data dari Supabase
  useEffect(() => {
    const fetchPrestasi = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("prestasi")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching prestasi:", error);
        setLoading(false);
        return;
      }

      const formatted = data.map((p) => {
        const dateObj = new Date(p.tanggal || p.created_at);
        const month = dateObj.toLocaleDateString("id-ID", { month: "long" });
        const year = dateObj.getFullYear();
        const formattedDate = `${month} ${year}`;

        return {
          id: p.id,
          title: p.judul,
          category: p.kategori || "Akademik",
          date: formattedDate,
          level: p.tingkat || "Kabupaten",
          img: p.gambar || "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?w=800&auto=format&fit=crop"
        };
      });

      setDaftarPrestasi(formatted);
      setLoading(false);
    };

    fetchPrestasi();
  }, []);

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
            <div 
              className={styles.filterContainer} 
              style={{ 
                display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'center', 
                flexWrap: 'wrap', 
                gap: '0.75rem',
                alignItems: 'center'
              }}
            >
                {categories.map(category => (
                    <button 
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`${styles.filterBtn} ${filter === category ? styles.active : ''}`}
                        style={{ 
                          display: 'inline-block',
                          minWidth: 'auto',
                          width: 'auto',
                          flex: '0 0 auto'
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid Kartu */}
            {loading ? (
              <div className="text-center py-5">
                <p className="text-muted">Memuat data prestasi...</p>
              </div>
            ) : (
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
                {filteredPrestasi.length === 0 && !loading && (
                    <Col className="text-center py-5">
                        <p className="text-muted fst-italic">Belum ada data prestasi untuk kategori ini.</p>
                    </Col>
                )}
              </Row>
            )}
        </Container>
      </section>
    </div>
  );
}

export default Prestasi;
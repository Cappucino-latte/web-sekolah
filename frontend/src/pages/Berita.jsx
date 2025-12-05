import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Fade } from "react-awesome-reveal"; 
import { ArrowRight, CalendarEvent } from "react-bootstrap-icons"; 
import styles from './Berita.module.css'; 
import { supabase } from "../lib/supabaseClient";

function Berita() {
  const [daftarBerita, setDaftarBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch berita dari Supabase
  useEffect(() => {
    const fetchBerita = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("berita")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching berita:", error);
        setLoading(false);
        return;
      }

      const formatted = data.map((b) => {
        const dateObj = new Date(b.tanggal || b.created_at);
        const month = dateObj.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;

        return {
          id: b.id,
          slug: b.slug || `berita-${b.id}`,
          title: b.judul,
          category: b.kategori || "NEWS",
          date: formattedDate,
          image: b.thumbnail 
        };
      });

      setDaftarBerita(formatted);
      setLoading(false);
    };

    fetchBerita();
  }, []);

  return (
    <div className={styles.pageWrapper}>
      
      {/* 1. HEADER SECTION - Clean & Editorial Style */}
      <section className={styles.heroSection}>
        <Container>
          <Fade direction="up" triggerOnce>
            <div className="text-center">
              <span className={styles.heroLabel}>UPDATES & INSIGHTS</span>
              <h1 className={styles.heroTitle}>Berita</h1>
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
          {loading ? (
            <div className="text-center py-5">
              <p className="text-muted">Memuat berita...</p>
            </div>
          ) : (
            <Row className="g-5"> {/* g-5 memberikan jarak antar kolom yang luas (breathing room) */}
              {daftarBerita.map((berita, index) => (
              <Col md={6} lg={4} key={berita.id}>
                <Fade direction="up" delay={index * 100} triggerOnce>
                  <div className={styles.newsCard} onClick={() => navigate(`/detail-berita/${berita.id}`)} style={{cursor: 'pointer'}}>
                      
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
                </Fade>
              </Col>
            ))}
            
            {/* Empty State */}
            {daftarBerita.length === 0 && !loading && (
              <Col className="text-center py-5">
                <p className="text-muted fst-italic">Belum ada berita tersedia.</p>
              </Col>
            )}
          </Row>
          )}
        </Container>
      </section>

    </div>
  );
}

export default Berita;
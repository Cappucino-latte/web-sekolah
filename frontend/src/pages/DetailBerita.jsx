import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { CalendarEvent, ArrowLeft, PersonFill, House, ChevronRight } from "react-bootstrap-icons";
import { supabase } from "../lib/supabaseClient";
import styles from "./DetailBerita.module.css";

export default function DetailBerita() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetail() {
      const { data, error } = await supabase
        .from("berita")
        .select("*")
        .eq("id", id)
        .single();

      if (!error) setBerita(data);
      setLoading(false);
    }

    fetchDetail();
  }, [id]);

  if (loading) {
    return (
      <div className={styles.pageWrapper}>
        <Container className="py-5 text-center">
          <p className="text-muted">Memuat berita...</p>
        </Container>
      </div>
    );
  }

  if (!berita) {
    return (
      <div className={styles.pageWrapper}>
        <Container className="py-5 text-center">
          <p className="text-muted">Berita tidak ditemukan.</p>
        </Container>
      </div>
    );
  }

  const dateObj = new Date(berita.tanggal || berita.created_at);
  const formattedDate = dateObj.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div style={{ background: '#ffffff' }}>
      {/* Breadcrumb */}
      <div style={{ 
        background: '#f8fafc', 
        borderBottom: '1px solid #e2e8f0',
        padding: '1rem 0'
      }}>
        <Container>
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.85rem',
            color: '#64748b'
          }}>
            <button
              onClick={() => navigate('/')}
              style={{
                background: 'none',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              <House size={14} /> Home
            </button>
            <ChevronRight size={12} />
            <button
              onClick={() => navigate('/berita')}
              style={{
                background: 'none',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                padding: 0
              }}
            >
              Berita
            </button>
            <ChevronRight size={12} />
            <span style={{ color: '#15803d', fontWeight: 600 }}>Detail</span>
          </nav>
        </Container>
      </div>

      {/* Hero Section with Image */}
      <section style={{ 
        background: '#ffffff',
        paddingTop: '2rem',
        paddingBottom: '0'
      }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={9}>
              <Fade direction="up" triggerOnce>
                {/* Kategori Badge */}
                {berita.kategori && (
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '0.5rem 1.2rem',
                      background: '#15803d',
                      color: 'white',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px'
                    }}>
                      {berita.kategori}
                    </span>
                  </div>
                )}
                
                {/* Title */}
                <h1 style={{ 
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  color: '#0f172a',
                  lineHeight: 1.3,
                  marginBottom: '1.5rem',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {berita.judul}
                </h1>
                
                {/* Meta Info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  flexWrap: 'wrap',
                  fontSize: '0.875rem',
                  color: '#64748b',
                  marginBottom: '2rem',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid #e2e8f0'
                }}>
                  {berita.penulis && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}>
                      <PersonFill size={15} style={{ color: '#15803d' }} />
                      <span style={{ fontWeight: 500, color: '#334155' }}>
                        Oleh {berita.penulis}
                      </span>
                    </div>
                  )}
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    <CalendarEvent size={14} style={{ color: '#15803d' }} />
                    <span>{formattedDate}</span>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>

        {/* Featured Image */}
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={9}>
              {berita.thumbnail && (
                <Fade direction="up" triggerOnce delay={100}>
                  <div style={{
                    width: '100%',
                    height: '450px',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    marginBottom: '3rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                  }}>
                    <img
                      src={berita.thumbnail}
                      alt={berita.judul}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  </div>
                </Fade>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Content Section */}
      <section style={{ 
        padding: '2rem 0 4rem',
        background: '#ffffff'
      }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <Fade direction="up" triggerOnce>
                {/* Article Content */}
                <article style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: '#1e293b',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  <div style={{ 
                    whiteSpace: 'pre-line',
                    marginBottom: '3rem'
                  }}>
                    {berita.isi}
                  </div>
                </article>

                {/* Divider */}
                <div style={{
                  width: '100%',
                  height: '1px',
                  background: '#e2e8f0',
                  margin: '3rem 0 2.5rem'
                }}></div>

                {/* Navigation Buttons */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  <button 
                    onClick={() => navigate('/berita')}
                    style={{
                      background: 'transparent',
                      color: '#15803d',
                      border: '2px solid #15803d',
                      padding: '0.7rem 1.5rem',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = '#15803d';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#15803d';
                    }}
                  >
                    <ArrowLeft size={16} /> Kembali
                  </button>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

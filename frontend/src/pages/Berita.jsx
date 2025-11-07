// src/pages/Berita.jsx
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from './About.module.css';
import { supabase } from '../lib/supabaseClient';

function Berita() {
  const [daftarBerita, setDaftarBerita] = useState([]);

  useEffect(() => {
    const fetchBerita = async () => {
      const { data, error } = await supabase
        .from("berita")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetch berita:", error);
      } else {
        const formatted = data.map(b => ({
          id: b.id,
          slug: b.judul.toLowerCase().replace(/ /g, "-"),
          title: b.judul,
          date: new Date(b.created_at).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric"
          }) + " | Berita",
          excerpt: b.isi.length > 120 ? b.isi.substring(0,120) + "..." : b.isi
        }));
        setDaftarBerita(formatted);
      }
    };

    fetchBerita();
  }, []);

  return (
    <div>
      {/* Header */}
      <div className={styles.pageHeader}>
        <Container>
          <h1 className={styles.pageTitle}>Berita Sekolah</h1>
          <p className="fs-5 text-muted">
            Dapatkan kabar dan kegiatan terbaru dari MTSS Roudlotush Sholihin
          </p>
        </Container>
      </div>

      {/* Grid Berita */}
      <Container className="my-5">
        <Row>
          {daftarBerita.map((berita) => (
            <Col md={4} key={berita.id} className="mb-4">
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{berita.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {berita.date}
                  </Card.Subtitle>
                  <Card.Text>{berita.excerpt}</Card.Text>

                  <LinkContainer to={`/berita/${berita.slug}`}>
                    <Card.Link className="mt-auto">read more</Card.Link>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Berita;

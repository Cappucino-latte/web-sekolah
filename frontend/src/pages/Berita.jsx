// src/pages/Berita.jsx
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styles from "./Berita.module.css";
import { supabase } from "../lib/supabaseClient";

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
        return;
      }

      const formatted = data.map((b) => ({
        id: b.id,
        slug: b.judul.toLowerCase().replace(/ /g, "-"),
        title: b.judul,
        date:
          new Date(b.created_at).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }) + " • Berita",
        excerpt:
          b.isi && b.isi.length > 120 ? b.isi.substring(0, 120) + "..." : (b.isi || ""),
        thumbnail: b.thumbnail,
      }));

      setDaftarBerita(formatted);
    };

    fetchBerita();
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
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
              <Card className={styles.card}>
                {/* Thumbnail */}
                {berita.thumbnail && (
                  <div className={styles.cardImageWrapper}>
                    <img
                      src={berita.thumbnail}
                      alt={berita.title}
                      className={styles.cardImage}
                    />
                  </div>
                )}

                <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.cardTitle}>
                    {berita.title}
                  </Card.Title>

                  <Card.Subtitle className={styles.cardDate}>
                    {berita.date}
                  </Card.Subtitle>

                  <Card.Text className={styles.cardExcerpt}>
                    {berita.excerpt}
                  </Card.Text>

                  <LinkContainer to={`/detail-berita/${berita.id}`}>
                    <Card.Link className={styles.readMore}>
                      Baca Selengkapnya →
                    </Card.Link>
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

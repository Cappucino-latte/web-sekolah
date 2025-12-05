import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import styles from "./Contact.module.css";

import {
  GeoAltFill,
  TelephoneFill,
  EnvelopeFill,
  Whatsapp,
  SendFill,
  ClockFill
} from "react-bootstrap-icons";

function Contact() {
  return (
    <div className={styles.pageWrapper}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <Container className="text-center">
          <Fade direction="up" triggerOnce>
            <span className={styles.heroBadge}>HUBUNGI KAMI</span>
            <h1 className={styles.heroTitle}>Kontak</h1>
            <div className={styles.heroLine}></div>
            <p className={styles.heroSubtitle}>
              Kami siap melayani informasi seputar pendaftaran santri, 
              kunjungan, dan kerjasama pendidikan.
            </p>
          </Fade>
        </Container>
      </section>

      {/* 2. MAIN CONTENT (INFO & FORM) */}
      <section className={styles.contentSection}>
        <Container>
          <Row className="g-5">
            
            {/* KOLOM KIRI: INFO KONTAK */}
            <Col lg={5}>
              <Slide direction="left" triggerOnce>
                <div className={styles.infoCard}>
                  <h3 className={styles.cardHeading}>Informasi Kontak</h3>
                  <p className="text-muted mb-4">
                    Silakan hubungi kami melalui saluran berikut. Tim kami akan merespons pesan Anda secepatnya.
                  </p>

                  <div className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                        <GeoAltFill />
                    </div>
                    <div>
                        <h5 className="fw-bold mb-1">Alamat Pesantren</h5>
                        <p className="text-muted mb-0 small">
                          Jl. Cangkringan No. 8, Pondok Dawung, Bimomartani, 
                          Ngemplak, Sleman, DIY.
                        </p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                        <Whatsapp />
                    </div>
                    <div>
                        <h5 className="fw-bold mb-1">WhatsApp / Telepon</h5>
                        <p className="text-muted mb-0 small">
                          +62 852-2997-6036
                        </p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                        <EnvelopeFill />
                    </div>
                    <div>
                        <h5 className="fw-bold mb-1">Email</h5>
                        <p className="text-muted mb-0 small">
                          mtsroudlotussholihinjogja@gmail.com
                        </p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                        <ClockFill />
                    </div>
                    <div>
                        <h5 className="fw-bold mb-1">Jam Operasional Kantor</h5>
                        <p className="text-muted mb-0 small">
                          Senin - Sabtu: 07.00 - 15.00 WIB
                        </p>
                    </div>
                  </div>

                </div>
              </Slide>
            </Col>

            {/* KOLOM KANAN: FORMULIR */}
            <Col lg={7}>
              <Slide direction="right" triggerOnce>
                <div className={styles.formCard}>
                  <h3 className={styles.sectionHeading}>Kirim Pesan</h3>
                  <p className="text-muted mb-4">
                    Punya pertanyaan khusus? Isi formulir di bawah ini.
                  </p>
                  
                  <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-4" controlId="formNama">
                                <Form.Label className={styles.formLabel}>Nama Lengkap</Form.Label>
                                <Form.Control type="text" placeholder="Nama Anda" className={styles.formInput} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-4" controlId="formEmail">
                                <Form.Label className={styles.formLabel}>Email / WhatsApp</Form.Label>
                                <Form.Control type="text" placeholder="Kontak yang bisa dihubungi" className={styles.formInput} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-4" controlId="formSubjek">
                        <Form.Label className={styles.formLabel}>Subjek Pesan</Form.Label>
                        <Form.Select className={styles.formInput}>
                            <option>Informasi PPDB</option>
                            <option>Kunjungan Pesantren</option>
                            <option>Lainnya</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formPesan">
                        <Form.Label className={styles.formLabel}>Isi Pesan</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Tulis pertanyaan Anda..." className={styles.formInput} />
                    </Form.Group>

                    <Button className={styles.submitBtn} type="submit">
                      Kirim Pesan Sekarang <SendFill className="ms-2"/>
                    </Button>
                  </Form>
                </div>
              </Slide>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. PETA LOKASI */}
      <section className={styles.mapSection}>
        <Container fluid className="p-0">
            <iframe 
                src="https://maps.google.com/maps?q=Pondok%20Pesantren%20Roudlotush%20Sholihin%20Sleman&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="500" 
                style={{ border: 0, filter: "grayscale(20%)" }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi MTs Roudlotush Sholihin"
            ></iframe>
        </Container>
      </section>

    </div>
  );
}

export default Contact;
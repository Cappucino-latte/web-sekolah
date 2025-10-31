// src/pages/Contact.jsx

import React from 'react';
// 1. Import semua komponen Bootstrap yang kita butuhkan
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// 2. Import CSS Module yang baru kita buat
import styles from './Contact.module.css';

function Contact() {
  return (
    <div>
      {/* 1. BAGIAN JUDUL HALAMAN */}
      <div className={styles.pageHeader}>
        <Container>
          <h1 className={styles.pageTitle}>Hubungi Kami</h1>
        </Container>
      </div>

      {/* 2. BAGIAN UTAMA (Form & Info) */}
      <Container className="my-5">
        <Row>
          
          {/* KOLOM KIRI: INFO KONTAK */}
          <Col md={6} className="mb-4">
            <h3 className="mb-3 fw-bold">Informasi Kontak</h3>
            <p>
              Kami senang mendengar dari Anda. Silakan hubungi kami 
              melalui detail di bawah ini atau isi formulir di samping.
            </p>
            <hr />
            {/* Kita ambil info dari Footer yang sudah kita buat */}
            <p style={{ lineHeight: 1.8 }}>
              <strong>Alamat:</strong><br />
              Jalan Cangkringan No. 8, Pondok Dawung, KABUPATEN SLEMAN, 
              Kota Yogyakarta
            </p>
            <p>
              <strong>Telepon:</strong><br />
              +62 274 3900192
            </p>
            <p>
              <strong>Email:</strong><br />
              info@mtss-rs.sch.id
            </p>
          </Col>

          {/* KOLOM KANAN: FORMULIR KONTAK */}
          <Col md={6}>
            <h3 className="mb-3 fw-bold">Kirim Pesan</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formNama">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" placeholder="Masukkan nama Anda" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Alamat Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email Anda" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPesan">
                <Form.Label>Pesan</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Tulis pesan Anda di sini..." />
              </Form.Group>

              {/* Tombol ini belum akan berfungsi mengirim email 
                  karena kita butuh back-end, tapi tampilannya sudah jadi.
              */}
              <Button variant="primary" type="submit">
                Kirim Pesan
              </Button>
            </Form>
          </Col>
        </Row>

        {/* 3. BAGIAN PETA LOKASI */}
        <Row className="mt-5">
          <Col>
            <h3 className="text-center mb-4 fw-bold">Lokasi Kami</h3>
            <div className={styles.mapWrapper}>
              {/* PENTING: 
                Nanti Anda harus ganti 'src' ini dengan kode embed 
                dari Google Maps untuk alamat sekolah Anda. 
              */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.932906877022!2d110.3754294153913!3d-7.80731447970924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57a15147c2b5%3A0x6a0f4435555e7188!2sJl.%20Taman%20Siswa%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1731166123456!5m2!1sid!2sid"
                width="100%" 
                height="450" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Contact;
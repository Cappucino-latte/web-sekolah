import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import styles from "./PPDB.module.css"; // Pastikan import CSS baru

import {
  FileEarmarkText,
  Whatsapp,
  PencilSquare,
  Megaphone,
  CheckCircleFill,
  TelephoneFill,
  GeoAltFill
} from "react-bootstrap-icons";

// DATA
const requirements = [
  "FC/Scan Akta Kelahiran",
  "FC/Scan Kartu Keluarga",
  "FC/Scan KTP Orang Tua/Wali",
  "FC/Scan Rapor Semester Terakhir",
  "Surat Persetujuan Bermaterai",
  "Piagam Penghargaan* (jika ada)",
  "Kartu KIP, BPJS, dll* (jika ada)",
  "FC Ijazah / SKL** (menyusul)"
];

const registrationSteps = [
  {
    id: "01",
    icon: <Whatsapp size={28} />,
    title: "Daftar via WhatsApp",
    desc: "Kirim pesan pendaftaran dengan format: Nama_TTL_Alamat_Sekolah Asal.",
    link: "wa.me/6285229976036",
    action: "Chat Admin Sekarang"
  },
  {
    id: "02",
    icon: <FileEarmarkText size={28} />,
    title: "Isi Formulir",
    desc: "Lengkapi data diri calon santri secara lengkap melalui formulir online.",
    link: "s.id/PSBRS2026",
    action: "Isi Formulir"
  },
  {
    id: "03",
    icon: <PencilSquare size={28} />,
    title: "Ujian Seleksi",
    desc: "Ikuti tes seleksi masuk (baca Al-Qur'an & wawancara) sesuai jadwal.",
    action: null
  },
  {
    id: "04",
    icon: <Megaphone size={28} />,
    title: "Pengumuman",
    desc: "Hasil seleksi akan diumumkan via WA. Lakukan daftar ulang jika lolos.",
    action: null
  }
];

function PPDB() {
  return (
    <div className={styles.pageWrapper}>
      
      {/* 1. HERO HEADER (Style Sama dengan Prestasi) */}
      <section className={styles.heroSection}>
        <Container>
          <Fade direction="up" triggerOnce>
            <span className={styles.heroLabel}>TAHUN AJARAN 2026/2027</span>
            <h1 className={styles.heroTitle}>Penerimaan Santri Baru</h1>
            <div className={styles.heroLine}></div>
            <p className={styles.heroSubtitle}>
                Bergabunglah bersama keluarga besar MTs & Pondok Pesantren Roudlotush Sholihin. Membangun generasi Qur'ani yang berwawasan global.
            </p>
          </Fade>
        </Container>
      </section>

      {/* 2. PERSYARATAN */}
      <section className={styles.contentSection}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <Slide direction="up" triggerOnce>
                <h2 className={styles.sectionHeading}>Syarat Pendaftaran</h2>
                <div className={styles.sectionLine}></div>
                <p style={{color:'var(--text-grey)'}}>
                  Persiapkan dokumen berikut dalam bentuk hardcopy (FC) maupun softcopy (Scan) untuk kelancaran administrasi.
                </p>
              </Slide>
            </Col>
          </Row>

          <Row className="justify-content-center">
             <Col lg={10}>
                <Fade triggerOnce>
                    <div className={styles.reqCard}>
                        <Row>
                            {requirements.map((req, idx) => (
                                <Col md={6} key={idx}>
                                    <div className={styles.reqItem}>
                                        <CheckCircleFill className={styles.checkIcon} />
                                        <span>{req}</span>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <div className="mt-4 pt-4 border-top text-center">
                            <small className="text-danger fst-italic" style={{fontSize:'0.85rem'}}>
                                * Wajib dibawa saat ujian seleksi / daftar ulang.
                            </small>
                        </div>
                    </div>
                </Fade>
             </Col>
          </Row>
        </Container>
      </section>

      {/* 3. ALUR PENDAFTARAN */}
      <section className={styles.flowSection}>
        <Container>
            <div className="text-center mb-5">
                <h2 className={styles.sectionHeading}>Alur Pendaftaran</h2>
                <div className={styles.sectionLine}></div>
            </div>

            <Row className="g-4">
                {registrationSteps.map((step, idx) => (
                    <Col lg={3} md={6} key={idx}>
                        <Zoom delay={idx * 100} triggerOnce className="h-100">
                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>{step.id}</div>
                                <div className={styles.stepIconWrapper}>
                                    {step.icon}
                                </div>
                                <h5 className={styles.stepTitle}>{step.title}</h5>
                                <p className={styles.stepDesc}>{step.desc}</p>
                                
                                {step.action && (
                                    <a href={`https://${step.link}`} target="_blank" rel="noreferrer" className={styles.stepLink}>
                                        {step.action} &rarr;
                                    </a>
                                )}
                            </div>
                        </Zoom>
                    </Col>
                ))}
            </Row>
        </Container>
      </section>

      {/* 4. CONTACT & INFO */}
      <section className={styles.contactSection}>
        <Container>
            <Row className="align-items-center gx-lg-5">
                <Col lg={5} className="mb-5 mb-lg-0">
                    <h2 className={styles.sectionHeading} style={{textAlign:'left'}}>Butuh Bantuan?</h2>
                    <div className={styles.sectionLine} style={{margin:'0 0 2rem'}}></div>
                    <p className="mb-4" style={{color:'var(--text-grey)'}}>
                        Tim panitia kami siap membantu jika Anda mengalami kendala saat mendaftar.
                    </p>
                    
                    <div className={styles.contactItem}>
                        <Whatsapp className={styles.contactIcon}/>
                        <div>
                            <span className={styles.contactLabel}>Admin PPDB</span>
                            <span className={styles.contactValue}>0852 2997 6036</span>
                        </div>
                    </div>
                    <div className={styles.contactItem}>
                        <TelephoneFill className={styles.contactIcon}/>
                        <div>
                            <span className={styles.contactLabel}>Hotline Info</span>
                            <span className={styles.contactValue}>0858 6562 1037</span>
                        </div>
                    </div>
                </Col>
                <Col lg={7}>
                    <div className={styles.mapCard}>
                         <iframe 
                            src="https://maps.google.com/maps?q=Pondok%20Pesantren%20Roudlotush%20Sholihin%20Sleman&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                            width="100%" 
                            height="350" 
                            style={{border:0, display:'block'}} 
                            allowFullScreen="" 
                            loading="lazy"
                            title="Lokasi Pesantren"
                        ></iframe>
                    </div>
                    <div className="mt-3 d-flex align-items-center text-muted small">
                        <GeoAltFill className="me-2 text-warning"/> 
                        Jl. Cangkringan No. 8, Pondok Dawung, Bimomartani, Ngemplak, Sleman.
                    </div>
                </Col>
            </Row>
        </Container>
      </section>

    </div>
  );
}

export default PPDB;
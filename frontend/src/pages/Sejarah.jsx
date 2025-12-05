import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";
import styles from './Profil.module.css';

function Sejarah() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section with Wave */}
      <section className={styles.heroSection}>
        <Container>
          <div className={styles.heroContent}>
            <Fade direction="up" triggerOnce>
              <div className="text-center">
                <span className={styles.badgeHero}>TENTANG KAMI</span>
                <h1 className={styles.heroTitle}>Sejarah</h1>
                <p className={styles.heroSubtitle}>
                  Perjalanan panjang MTSS Roudlotush Sholihin dalam mencetak generasi berakhlak mulia
                </p>
              </div>
            </Fade>
          </div>
        </Container>
        
        {/* Wave Divider */}
        <div className={styles.waveDivider}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  className={styles.shapeFill}></path>
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.sectionHistory}>
        <Container>
          <Row>
            <Col md={12}>
              <Fade direction="up" triggerOnce>
                <div>
                  <h2 className={styles.heading}>Sejarah MTSS Roudlotush Sholihin</h2>
                  
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: '#64748b',
                    marginBottom: '2rem'
                  }}>
                    <strong>MTSS Roudlotush Sholihin</strong> didirikan pada tahun [tahun berdiri] dengan semangat 
                    untuk memberikan pendidikan Islam yang berkualitas dan berakhlak mulia. Berawal dari visi para pendiri 
                    yang ingin mencetak generasi muda yang tidak hanya cerdas secara intelektual, tetapi juga kuat dalam 
                    iman dan takwa.
                  </p>

                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: '#15803d',
                    marginTop: '3rem',
                    marginBottom: '1rem'
                  }}>Awal Pendirian</h3>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: '#64748b',
                    marginBottom: '2rem'
                  }}>
                    Pada awalnya, sekolah ini dimulai dengan jumlah siswa yang terbatas dan fasilitas yang sederhana. 
                    Namun berkat dukungan masyarakat dan dedikasi para pengajar, MTSS Roudlotush Sholihin terus berkembang 
                    dan mengalami berbagai peningkatan baik dari segi fasilitas maupun kualitas pendidikan.
                  </p>

                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: '#15803d',
                    marginTop: '3rem',
                    marginBottom: '1rem'
                  }}>Perkembangan</h3>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: '#64748b',
                    marginBottom: '2rem'
                  }}>
                    Seiring berjalannya waktu, sekolah kami terus melakukan berbagai inovasi dan perbaikan. Kami menambah 
                    berbagai program unggulan seperti program Tahfizh Al-Qur'an, kegiatan ekstrakurikuler yang beragam, 
                    serta pengembangan fasilitas pembelajaran yang modern.
                  </p>

                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: '#15803d',
                    marginTop: '3rem',
                    marginBottom: '1rem'
                  }}>Pencapaian</h3>
                  <ul style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: '#64748b',
                    marginBottom: '2rem',
                    paddingLeft: '2rem'
                  }}>
                    <li style={{ marginBottom: '0.5rem' }}>Meraih berbagai prestasi di tingkat regional dan nasional</li>
                    <li style={{ marginBottom: '0.5rem' }}>Menghasilkan lulusan yang berkualitas dan berakhlak mulia</li>
                    <li style={{ marginBottom: '0.5rem' }}>Memiliki program Tahfizh Al-Qur'an yang terstruktur</li>
                    <li style={{ marginBottom: '0.5rem' }}>Mengembangkan kerjasama dengan berbagai institusi pendidikan</li>
                    <li style={{ marginBottom: '0.5rem' }}>Meningkatkan fasilitas pembelajaran secara berkelanjutan</li>
                  </ul>

                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: '#64748b',
                    marginBottom: '2rem'
                  }}>
                    Hingga saat ini, MTSS Roudlotush Sholihin terus berkomitmen untuk memberikan pendidikan terbaik 
                    bagi para siswa, dengan tetap menjaga nilai-nilai Islam sebagai fondasi utama dalam setiap kegiatan 
                    pembelajaran dan pembinaan karakter.
                  </p>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Sejarah;
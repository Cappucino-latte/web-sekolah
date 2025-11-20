import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './ProfilPerusahaan.module.css';

function Sejarah() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Content */}
      <Container className={styles.contentWrapper}>
        <Row>
          {/* Main Content */}
          <Col md={12}>
            <div className={styles.mainContent}>
              <h2 className={styles.contentTitle}>Sejarah MTSS Roudlotush Sholihin</h2>
              
              <p className={styles.contentText}>
                <strong>MTSS Roudlotush Sholihin</strong> didirikan pada tahun [tahun berdiri] dengan semangat 
                untuk memberikan pendidikan Islam yang berkualitas dan berakhlak mulia. Berawal dari visi para pendiri 
                yang ingin mencetak generasi muda yang tidak hanya cerdas secara intelektual, tetapi juga kuat dalam 
                iman dan takwa.
              </p>

              <h3 className={styles.subTitle}>Awal Pendirian</h3>
              <p className={styles.contentText}>
                Pada awalnya, sekolah ini dimulai dengan jumlah siswa yang terbatas dan fasilitas yang sederhana. 
                Namun berkat dukungan masyarakat dan dedikasi para pengajar, MTSS Roudlotush Sholihin terus berkembang 
                dan mengalami berbagai peningkatan baik dari segi fasilitas maupun kualitas pendidikan.
              </p>

              <h3 className={styles.subTitle}>Perkembangan</h3>
              <p className={styles.contentText}>
                Seiring berjalannya waktu, sekolah kami terus melakukan berbagai inovasi dan perbaikan. Kami menambah 
                berbagai program unggulan seperti program Tahfizh Al-Qur'an, kegiatan ekstrakurikuler yang beragam, 
                serta pengembangan fasilitas pembelajaran yang modern.
              </p>

              <h3 className={styles.subTitle}>Pencapaian</h3>
              <ul className={styles.contentList}>
                <li>Meraih berbagai prestasi di tingkat regional dan nasional</li>
                <li>Menghasilkan lulusan yang berkualitas dan berakhlak mulia</li>
                <li>Memiliki program Tahfizh Al-Qur'an yang terstruktur</li>
                <li>Mengembangkan kerjasama dengan berbagai institusi pendidikan</li>
                <li>Meningkatkan fasilitas pembelajaran secara berkelanjutan</li>
              </ul>

              <p className={styles.contentText}>
                Hingga saat ini, MTSS Roudlotush Sholihin terus berkomitmen untuk memberikan pendidikan terbaik 
                bagi para siswa, dengan tetap menjaga nilai-nilai Islam sebagai fondasi utama dalam setiap kegiatan 
                pembelajaran dan pembinaan karakter.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sejarah;
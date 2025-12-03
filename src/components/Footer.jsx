import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { 
  GeoAltFill, 
  TelephoneFill, 
  EnvelopeFill, 
  Instagram, 
  Facebook, 
  Youtube, 
  Whatsapp 
} from 'react-bootstrap-icons';

import styles from './Footer.module.css';

// Pastikan path logo sesuai
import logoImg from '../assets/inilogo.png';

function Footer() {
  return (
    <footer className={styles.footerSection}>
      <Container>
        <Row className="gy-5">
          
          {/* KOLOM 1: IDENTITAS SEKOLAH */}
          <Col lg={4} md={6}>
            <img
              src={logoImg}
              alt="Logo MTs Roudlotush Sholihin"
              className={styles.footerLogo}
            />
            <div className={styles.brandName}>
              Pondok Pesantren &<br />MTs Roudlotus Sholihin
            </div>
            <p className={styles.schoolDesc}>
              Mencetak generasi santri yang berakhlakul karimah, cerdas secara intelektual, 
              dan mandiri berlandaskan nilai-nilai Ahlussunnah wal Jama'ah.
            </p>
            <div className={styles.socialWrapper}>
                <a href="https://instagram.com/roudlotushsholihin.yk" target="_blank" rel="noreferrer" className={styles.socialBtn} title="Instagram">
                    <Instagram size={16}/>
                </a>
                <a href="#" className={styles.socialBtn} title="Facebook">
                    <Facebook size={16}/>
                </a>
                <a href="#" className={styles.socialBtn} title="Youtube">
                    <Youtube size={16}/>
                </a>
                <a href="https://wa.me/6285229976036" target="_blank" rel="noreferrer" className={styles.socialBtn} title="WhatsApp Admin">
                    <Whatsapp size={16}/>
                </a>
            </div>
          </Col>

          {/* KOLOM 2: JELAJAHI (QUICK LINKS) */}
          <Col lg={2} md={6}>
            <h5 className={styles.footerHeading}>Jelajahi</h5>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <LinkContainer to="/profil">
                    <span className={styles.footerLink} role="button">Profil & Sejarah</span>
                </LinkContainer>
              </li>
              <li className={styles.linkItem}>
                <LinkContainer to="/visi-misi">
                    <span className={styles.footerLink} role="button">Visi Misi</span>
                </LinkContainer>
              </li>
              <li className={styles.linkItem}>
                <LinkContainer to="/prestasi">
                    <span className={styles.footerLink} role="button">Prestasi Santri</span>
                </LinkContainer>
              </li>
              <li className={styles.linkItem}>
                <LinkContainer to="/berita">
                    <span className={styles.footerLink} role="button">Kabar Madrasah</span>
                </LinkContainer>
              </li>
              <li className={styles.linkItem}>
                <LinkContainer to="/ppdb">
                    <span className={styles.footerLink} role="button">Info PPDB</span>
                </LinkContainer>
              </li>
            </ul>
          </Col>

          {/* KOLOM 3: PROGRAM AKADEMIK */}
          <Col lg={3} md={6}>
            <h5 className={styles.footerHeading}>Program Unggulan</h5>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <LinkContainer to="/kepesantrenan">
                    <span className={styles.footerLink} role="button">Tahfidz Al-Qur'an</span>
                </LinkContainer>
              </li>
              <li className={styles.linkItem}>
                <LinkContainer to="/kepesantrenan">
                    <span className={styles.footerLink} role="button">Kajian Kitab Kuning</span>
                </LinkContainer>
              </li>
              <li className={styles.linkItem}>
                <LinkContainer to="/akademik">
                    <span className={styles.footerLink} role="button">Bilingual Class</span>
                </LinkContainer>
              </li>
              <li className={styles.linkItem}>
                <LinkContainer to="/akademik">
                    <span className={styles.footerLink} role="button">Sains & Robotik</span>
                </LinkContainer>
              </li>
            </ul>
            
            {/* Badge Akreditasi */}
            <div className="mt-4">
               <div className={styles.accreditationBadge}>
                  TERAKREDITASI
               </div>
            </div>
          </Col>

          {/* KOLOM 4: KONTAK (DATA DARI GAMBAR) */}
          <Col lg={3} md={6}>
            <h5 className={styles.footerHeading}>Hubungi Kami</h5>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                 <GeoAltFill className={styles.contactIcon} />
                 <span>
                    Pondok, Bimomartani,<br/>
                    Kec. Ngemplak, Kab. Sleman,<br/>
                    D.I. Yogyakarta
                 </span>
              </div>
              <div className={styles.contactItem}>
                 <TelephoneFill className={styles.contactIcon} />
                 <div>
                    <span className="d-block">0852 2997 6036 (Admin)</span>
                    <span className="d-block small opacity-75">0858 6562 1037</span>
                 </div>
              </div>
              <div className={styles.contactItem}>
                 <EnvelopeFill className={styles.contactIcon} />
                 <span style={{fontSize:'0.9rem', wordBreak:'break-all'}}>
                    mtsroudlotussholihinjogja@gmail.com
                 </span>
              </div>
            </div>
          </Col>

        </Row>

        {/* COPYRIGHT */}
        <div className={styles.copyrightSection}>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} MTs Roudlotus Sholihin. All Rights Reserved. 
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
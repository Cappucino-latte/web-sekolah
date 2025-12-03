import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { 
  Search, 
  BookmarkFill, 
  List, 
  X,
  ChevronDown
} from "react-bootstrap-icons";
import styles from "./Navbar.module.css";

// IMPORT GAMBAR
import logoImg from "../assets/inilogo.png"; 

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerInner}>
        
        {/* === 1. LOGO (KIRI) === */}
        <LinkContainer to="/">
          <div className={styles.logoSection}>
            <img 
              src={logoImg} 
              alt="Logo MTs" 
              className={styles.logoImg} 
            />
            <div className={styles.brandText}>
              <span className={styles.brandTop}>MTs Roudlotush</span>
              <span className={styles.brandBottom}>SHOLIHIN</span>
            </div>
          </div>
        </LinkContainer>

        {/* === 2. NAVIGASI DESKTOP (TENGAH) === */}
        <nav className={styles.navContainer}>
            <LinkContainer to="/">
              <span className={styles.navLink}>Beranda</span>
            </LinkContainer>

            {/* DROPDOWN PROFIL (Berisi Visi Misi) */}
            <div className={styles.navItemDropdown} style={{position: 'relative'}}>
                <button className={styles.dropdownToggle}>
                    PROFIL <ChevronDown size={12} />
                </button>
                <div className={styles.dropdownMenu}>
                    <LinkContainer to="/profil">
                        <span className={styles.dropdownItem}>Sejarah</span>
                    </LinkContainer>
                    <LinkContainer to="/visi-misi">
                        <span className={styles.dropdownItem}>Visi & Misi</span>
                    </LinkContainer>
                </div>
            </div>

            {/* DROPDOWN PROFIL (Berisi Visi Misi) */}
            <div className={styles.navItemDropdown} style={{position: 'relative'}}>
                <button className={styles.dropdownToggle}>
                    PROGRAM <ChevronDown size={12} />
                </button>
                <div className={styles.dropdownMenu}>
                    <LinkContainer to="/akademik">
                        <span className={styles.dropdownItem}>Akademik</span>
                    </LinkContainer>
                    <LinkContainer to="/kepesantrenan">
                        <span className={styles.dropdownItem}>Kepesantrenan</span>
                    </LinkContainer>
                </div>
            </div>

            <LinkContainer to="/prestasi">
              <span className={styles.navLink}>Prestasi</span>
            </LinkContainer>
            
            <LinkContainer to="/berita">
              <span className={styles.navLink}>Berita</span>
            </LinkContainer>

            <LinkContainer to="/kontak">
              <span className={styles.navLink}>Kontak</span>
            </LinkContainer>
        </nav>

        {/* === 3. ACTIONS & CTA (KANAN) === */}
        <div className={styles.actionSection}>
             {/* Ikon Search Minimalis */}
             <Search size={18} className={styles.iconBtn} title="Cari" />
             
             {/* Tombol PPDB */}
             <LinkContainer to="/ppdb">
                <span className={styles.ctaButton} role="button">
                    <BookmarkFill size={16} /> PPDB ONLINE
                </span>
             </LinkContainer>
        </div>

        {/* === 4. MOBILE TOGGLE (KANAN - HP ONLY) === */}
        <button 
          className={styles.mobileToggle} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={40} /> : <List size={40} />}
        </button>

      </div>

      {/* === MOBILE MENU DRAWER === */}
      {isOpen && (
        <div className={styles.mobileMenu}>
            <LinkContainer to="/ppdb" onClick={() => setIsOpen(false)}>
                <span className={styles.mobileLink} style={{color: '#ffc72c', borderBottom: '2px solid #ffc72c'}}>DAFTAR PPDB</span>
            </LinkContainer>

            <LinkContainer to="/" onClick={() => setIsOpen(false)}>
                <span className={styles.mobileLink}>Beranda</span>
            </LinkContainer>
            
            {/* Profil Mobile (Langsung list ke bawah atau link induk) */}
            <LinkContainer to="/profil" onClick={() => setIsOpen(false)}>
                <span className={styles.mobileLink}>Profil (Sejarah)</span>
            </LinkContainer>
            <LinkContainer to="/visi-misi" onClick={() => setIsOpen(false)}>
                <span className={styles.mobileLink}>- Visi & Misi</span>
            </LinkContainer>

            <LinkContainer to="/akademik" onClick={() => setIsOpen(false)}>
                <span className={styles.mobileLink}>Akademik</span>
            </LinkContainer>
            <LinkContainer to="/kepesantrenan" onClick={() => setIsOpen(false)}>
                <span className={styles.mobileLink}>Kepesantrenan</span>
            </LinkContainer>
            <LinkContainer to="/berita" onClick={() => setIsOpen(false)}>
                <span className={styles.mobileLink}>Berita</span>
            </LinkContainer>
             <LinkContainer to="/kontak" onClick={() => setIsOpen(false)}>
                <span className={styles.mobileLink}>Kontak</span>
            </LinkContainer>
        </div>
      )}
    </header>
  );
}

export default NavigationBar;
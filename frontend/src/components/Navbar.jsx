// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';

function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      className={`main-navbar ${scrolled ? 'scrolled' : ''}`}
      variant="dark" 
      expand="lg" 
      fixed="top"
    >
      <Container>
        
        {/* LOGO & BRAND */}
        <LinkContainer to="/">
          <Navbar.Brand className="brand-logo">
            <div className="logo-wrapper">
              {/* Ganti dengan <img src="/path/to/logo.png" alt="Logo" /> jika ada file logo */}
              <div className="logo-placeholder">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="url(#gradient)"/>
                  <path d="M20 10L28 20L20 30L12 20L20 10Z" fill="white" opacity="0.9"/>
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
                      <stop offset="0%" stopColor="#667eea"/>
                      <stop offset="100%" stopColor="#764ba2"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="brand-text">
                <span className="brand-name">MTSS Roudlotush</span>
                <span className="brand-subtitle">Sholihin</span>
              </div>
            </div>
          </Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        
        <Navbar.Collapse id="main-navbar-nav">
          
          {/* NAVIGATION LINKS */}
          <Nav className="mx-auto nav-links"> 
            <LinkContainer to="/" exact>
              <Nav.Link className="nav-link-item">
                <span>Beranda</span>
              </Nav.Link>
            </LinkContainer>

            <NavDropdown 
              title={<span>Profil</span>} 
              id="profil-dropdown"
              className="nav-link-item"
            >
              <LinkContainer to="/tentang/sejarah">
                <NavDropdown.Item>Sejarah</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/tentang/visi-misi">
                <NavDropdown.Item>Visi & Misi</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/tentang/struktur">
                <NavDropdown.Item>Struktur Organisasi</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/tentang/fasilitas">
                <NavDropdown.Item>Fasilitas</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <NavDropdown 
              title={<span>Program</span>} 
              id="program-dropdown"
              className="nav-link-item"
            >
              <LinkContainer to="/program/tahfizh">
                <NavDropdown.Item>Tahfizh Quran</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/program/research">
                <NavDropdown.Item>Research</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/program/entrepreneurship">
                <NavDropdown.Item>Entrepreneurship</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/program/botanical">
                <NavDropdown.Item>Botanical</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/program/beasiswa">
                <NavDropdown.Item className="dropdown-highlight">
                  <span>🎓</span> Program Beasiswa
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            
            <LinkContainer to="/berita">
              <Nav.Link className="nav-link-item">
                <span>Berita</span>
              </Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/prestasi">
              <Nav.Link className="nav-link-item">
                <span>Prestasi</span>
              </Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/kontak">
              <Nav.Link className="nav-link-item">
                <span>Kontak</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>

          {/* CTA BUTTONS */}
          <Nav className="ms-auto nav-actions">
            <LinkContainer to="/ppdb">
              <Button className="ppdb-button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
                <span>PPDB Online</span>
              </Button>
            </LinkContainer>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { List } from "react-bootstrap-icons";
import "./Navbar.module.css"; // Menggunakan CSS biasa agar aman

function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Efek Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container className="px-lg-5">
        
        {/* LOGO & BRAND */}
        <LinkContainer to="/">
          <Navbar.Brand className="brand-logo d-flex align-items-center gap-2">
            {/* Menggunakan Logo Asli Anda */}
            <img
              src="/assets/inilogo.png" 
              alt="Logo MTs"
              className="logo-img"
              width="45"
            />
            <div className="brand-text d-flex flex-column">
              <span className="brand-name">MTs Roudlotush</span>
              <span className="brand-subtitle">SHOLIHIN</span>
            </div>
          </Navbar.Brand>
        </LinkContainer>

        {/* TOGGLE MOBILE */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          className="border-0 toggle-btn"
        >
            <List size={30} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          
          {/* NAVIGATION LINKS */}
          <Nav className="mx-auto align-items-center gap-1">
            
            <LinkContainer to="/">
                <Nav.Link className="nav-item-custom" onClick={() => setExpanded(false)}>Beranda</Nav.Link>
            </LinkContainer>
            
            {/* DROPDOWN PROFIL (Disesuaikan dengan Route App.jsx) */}
            <NavDropdown title="Profil" id="profil-dropdown" className="nav-item-custom custom-dropdown">
                <LinkContainer to="/profil">
                    <NavDropdown.Item onClick={() => setExpanded(false)}>Sejarah Singkat</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/visi-misi">
                    <NavDropdown.Item onClick={() => setExpanded(false)}>Visi & Misi</NavDropdown.Item>
                </LinkContainer>
            </NavDropdown>

            {/* DROPDOWN PROGRAM (Disesuaikan dengan Route App.jsx) */}
            <NavDropdown title="Program" id="program-dropdown" className="nav-item-custom custom-dropdown">
                <LinkContainer to="/program/akademik">
                    <NavDropdown.Item onClick={() => setExpanded(false)}>Akademik</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/program/pesantren">
                    <NavDropdown.Item onClick={() => setExpanded(false)}>Kepesantrenan</NavDropdown.Item>
                </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/berita">
                <Nav.Link className="nav-item-custom" onClick={() => setExpanded(false)}>Berita</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/prestasi">
                <Nav.Link className="nav-item-custom" onClick={() => setExpanded(false)}>Prestasi</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/kontak">
                <Nav.Link className="nav-item-custom" onClick={() => setExpanded(false)}>Kontak</Nav.Link>
            </LinkContainer>

          </Nav>

          {/* CTA BUTTONS */}
          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <LinkContainer to="/ppdb">
                <Button className="btn-ppdb rounded-pill px-4" onClick={() => setExpanded(false)}>
                PPDB ONLINE
                </Button>
            </LinkContainer>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
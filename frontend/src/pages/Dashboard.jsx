import React from "react";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import ".//Dashboard.module.css"; // jika kamu sudah buat style tambahan

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "240px", width: "100%", padding: "2rem" }}>
        <Container fluid>
          <Fade direction="down" triggerOnce>
            <h2 className="fw-bold mb-4">Dashboard Admin</h2>
            <p className="text-muted mb-5">Selamat datang di panel admin sekolah.</p>
          </Fade>

          <Row className="g-4">
            <Col md={4}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <h6 className="text-muted">Total Siswa</h6>
                  <h3 className="fw-bold">240</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <h6 className="text-muted">Total Guru</h6>
                  <h3 className="fw-bold">25</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <h6 className="text-muted">Total Berita</h6>
                  <h3 className="fw-bold">12</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Dashboard;

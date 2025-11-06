import React from "react";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />

      <div className={styles.dashboardContent}>
        <Container fluid>

          <Fade direction="down" triggerOnce>
            <h2 className={styles.title}>Dashboard Admin</h2>
            <p className={styles.subtitle}>Selamat datang di panel admin sekolah.</p>
          </Fade>

          <Row className="g-4 mt-2">

            <Col md={4}>
              <Card className={`${styles.card} ${styles.hover}`}>
                <Card.Body>
                  <h6>Total Siswa</h6>
                  <h3>240</h3>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className={`${styles.card} ${styles.hover}`}>
                <Card.Body>
                  <h6>Total Guru</h6>
                  <h3>25</h3>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className={`${styles.card} ${styles.hover}`}>
                <Card.Body>
                  <h6>Total Berita</h6>
                  <h3>12</h3>
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

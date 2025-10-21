// src/components/Hero.jsx

// 1. Import Carousel dari react-bootstrap
// Kita tidak perlu 'Button' atau 'LinkContainer' lagi di sini
import { Carousel } from 'react-bootstrap';

function Hero() {
  // Ini style untuk memastikan gambar tidak terlalu tinggi
  // dan ukurannya pas di dalam carousel
  const imgStyle = {
    height: '75vh', // 75% dari tinggi layar
    objectFit: 'cover', // Memastikan gambar menutupi area tanpa gepeng
    width: '100%'
  };

  // Style untuk overlay (agar teks lebih mudah dibaca)
  const captionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Latar belakang hitam transparan
    borderRadius: '10px',
    padding: '20px'
  };

  return (
    <Carousel>
      
      {/* SLIDE 1 */}
      <Carousel.Item>
        {/* Ganti URL src="..." dengan gambar Anda sendiri nanti */}
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/1600x700/?students"
          alt="Siswa Berprestasi"
          style={imgStyle}
        />
        <Carousel.Caption style={captionStyle}>
          <h3>INCREDIBLE STUDENT</h3>
          <p>Mencetak Generasi Unggul dan Berkarakter.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* SLIDE 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/1600x700/?school,building"
          alt="Gedung Sekolah"
          style={imgStyle}
        />
        <Carousel.Caption style={captionStyle}>
          <h3>FASILITAS MODERN</h3>
          <p>Didukung Sarana dan Prasarana Terbaik.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* SLIDE 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/1600x700/?classroom"
          alt="Ruang Kelas"
          style={imgStyle}
        />
        <Carousel.Caption style={captionStyle}>
          <h3>LINGKUNGAN BELAJAR</h3>
          <p>Menciptakan Suasana Belajar yang Nyaman dan Kondusif.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Hero;
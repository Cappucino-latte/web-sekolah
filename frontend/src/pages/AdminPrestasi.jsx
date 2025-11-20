import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./AdminPrestasi.module.css";

export default function AdminPrestasi() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    judul: "",
    kategori: "Akademik",
    tanggal: "",
    deskripsi: "",
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // Fetch data dari backend
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/prestasi");
      setItems(res.data);
    } catch (err) {
      console.error("Gagal mengambil data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Submit data + upload gambar
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("file", file);
    fd.append("judul", form.judul);
    fd.append("kategori", form.kategori);
    fd.append("tanggal", form.tanggal);
    fd.append("deskripsi", form.deskripsi); // ⬅️ penting

    try {
      await axios.post("http://localhost:5001/api/prestasi/upload", fd);
      alert("Prestasi berhasil ditambahkan!");

      setForm({
        judul: "",
        kategori: "Akademik",
        tanggal: "",
        deskripsi: "",
      });

      setFile(null);
      setPreview(null);

      fetchData();
    } catch (err) {
      alert("Upload gagal!");
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus data ini?")) return;

    try {
      await axios.delete(`http://localhost:5001/api/prestasi/${id}`);
      fetchData();
    } catch (err) {
      console.error("Gagal menghapus:", err);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Admin Prestasi</h2>

      {/* FORM INPUT */}
      <form className={styles.form} onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Judul Prestasi"
    value={form.judul}
    onChange={(e) => setForm({ ...form, judul: e.target.value })}
  />

  <select
    value={form.kategori}
    onChange={(e) => setForm({ ...form, kategori: e.target.value })}
  >
    <option>Akademik</option>
    <option>Olahraga</option>
    <option>Seni</option>
  </select>

  <input
    type="date"
    value={form.tanggal}
    onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
  />

  {/* ⬇️ Tambahkan ini */}
  <textarea
    placeholder="Deskripsi Prestasi"
    value={form.deskripsi}
    onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
    className={styles.textarea}
  />

  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      setFile(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }}
  />

  <button type="submit">Simpan</button>
</form>


      {/* PREVIEW GAMBAR */}
      {preview && <img src={preview} className={styles.preview} />}

      {/* TABLE DATA */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Gambar</th>
            <th>Judul</th>
            <th>Kategori</th>
            <th>Tanggal</th>
            <th>Deskripsi</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {items.map((p) => (
            <tr key={p.id}>
              <td>
                <img src={p.gambar} className={styles.thumb} />
              </td>
              <td>{p.judul}</td>
              <td>{p.kategori}</td>
              <td>{p.tanggal}</td>
              <td>{p.deskripsi}</td>
              <td>
                <button onClick={() => handleDelete(p.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

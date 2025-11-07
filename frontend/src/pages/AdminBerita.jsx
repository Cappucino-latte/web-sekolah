import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { supabase } from "../lib/supabaseClient";
import styles from "./AdminBerita.module.css";

export default function AdminBerita() {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({ judul: "", isi: "", penulis: "" });
  const [editId, setEditId] = useState(null);

  const fetchNews = async () => {
    const { data } = await supabase.from("berita").select("*");
    setNews(data);
  };

  useEffect(() => { fetchNews(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await supabase.from("berita").update(form).eq("id", editId);
      setEditId(null);
    } else {
      await supabase.from("berita").insert([form]);
    }

    setForm({ judul: "", isi: "", penulis: "" });
    fetchNews();
  };

  const handleEdit = (b) => {
    setEditId(b.id);
    setForm({ judul: b.judul, isi: b.isi, penulis: b.penulis });
  };

  const handleDelete = async (id) => {
    await supabase.from("berita").delete().eq("id", id);
    fetchNews();
  };

  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.content}>
        <h2>Kelola Berita</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input placeholder="Judul" value={form.judul}
            onChange={(e) => setForm({ ...form, judul: e.target.value })} required />

          <input placeholder="Penulis" value={form.penulis}
            onChange={(e) => setForm({ ...form, penulis: e.target.value })} />

          <textarea placeholder="Isi berita" value={form.isi}
            onChange={(e) => setForm({ ...form, isi: e.target.value })} required />

          <button type="submit">{editId ? "Update" : "Tambah"}</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Judul</th>
              <th>Penulis</th>
              <th>Tanggal</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {news.map((b) => (
              <tr key={b.id}>
                <td>{b.judul}</td>
                <td>{b.penulis}</td>
                <td>{new Date(b.created_at).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => handleEdit(b)}>Edit</button>
                  <button onClick={() => handleDelete(b.id)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

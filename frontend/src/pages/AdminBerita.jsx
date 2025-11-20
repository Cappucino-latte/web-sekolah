import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import styles from "./AdminBerita.module.css";

export default function AdminBerita() {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({ judul: "", isi: "", penulis: "" });
  const [thumbnail, setThumbnail] = useState(null);
  const [editId, setEditId] = useState(null);

  const fetchNews = async () => {
    const { data } = await supabase.from("berita").select("*");
    setNews(data);
  };

  useEffect(() => { fetchNews(); }, []);

  const uploadThumbnail = async (file) => {
    const fileName = Date.now() + "-" + file.name;

    const { error } = await supabase.storage
      .from("berita-thumb")           // ⚠️ pastikan bucket sudah dibuat
      .upload(fileName, file);

    if (error) {
      console.error("Upload error:", error);
      return null;
    }

    const url = `${supabase.storageUrl}/object/public/berita-thumb/${fileName}`;
    return url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = null;

    // Jika ada gambar baru
    if (thumbnail) {
      imageUrl = await uploadThumbnail(thumbnail);
    }

    if (editId) {
      const updateData = {
        ...form,
        ...(imageUrl && { thumbnail: imageUrl }),
      };

      await supabase.from("berita").update(updateData).eq("id", editId);
      setEditId(null);
    } else {
      await supabase.from("berita").insert([
        {
          ...form,
          thumbnail: imageUrl,
        },
      ]);
    }

    setForm({ judul: "", isi: "", penulis: "" });
    setThumbnail(null);
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
    <div className={styles.container}>
      <h2>Kelola Berita</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
          <input
            placeholder="Judul"
            value={form.judul}
            onChange={(e) => setForm({ ...form, judul: e.target.value })}
            required
          />

          <input
            placeholder="Penulis"
            value={form.penulis}
            onChange={(e) => setForm({ ...form, penulis: e.target.value })}
          />

          <textarea
            placeholder="Isi berita..."
            value={form.isi}
            onChange={(e) => setForm({ ...form, isi: e.target.value })}
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />

          <button type="submit">{editId ? "Update" : "Tambah"}</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Judul</th>
              <th>Penulis</th>
              <th>Tanggal</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {news.map((b) => (
              <tr key={b.id}>
                <td>
                  {b.thumbnail ? (
                    <img
                      src={b.thumbnail}
                      alt="thumb"
                      width="80"
                      style={{ borderRadius: "6px" }}
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
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
  );
}

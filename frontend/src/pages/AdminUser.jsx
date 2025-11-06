import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  // ✅ READ DATA USER
  const fetchUsers = async () => {
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      console.error("Error saat mengambil data:", error);
      return;
    }
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ CREATE USER
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      // ✅ UPDATE USER
      await supabase.from("users").update(form).eq("id", editingId);
      setEditingId(null);
    } else {
      // ✅ INSERT USER BARU
      await supabase.from("users").insert([form]);
    }

    setForm({ name: "", email: "" });
    fetchUsers();
  };

  // ✅ DELETE USER
  const handleDelete = async (id) => {
    await supabase.from("users").delete().eq("id", id);
    fetchUsers();
  };

  // ✅ UPDATE MODE
  const handleEdit = (user) => {
    setEditingId(user.id);
    setForm({
      name: user.name,
      email: user.email,
    });
  };

  return (
    <div style={{ padding: "2rem",}}>
      <h2>Kelola User</h2>

      {/* Form Input */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Nama"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <button type="submit">{editingId ? "Update" : "Tambah User"}</button>
      </form>

      {/* Tabel User */}
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Hapus</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                Tidak ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}



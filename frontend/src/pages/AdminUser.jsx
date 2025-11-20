import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import styles from "./AdminUser.module.css";

export default function AdminUsers() {
  const [admins, setAdmins] = useState([]);
  const [form, setForm] = useState({ username: "", password: "" });
  const [editId, setEditId] = useState(null);

  const fetchAdmins = async () => {
    const { data } = await supabase.from("admin").select("*");
    setAdmins(data);
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await supabase
        .from("admin")
        .update({ username: form.username })
        .eq("id", editId);

      setEditId(null);
    } else {
      await supabase.rpc("add_admin", {
        uname: form.username,
        pass: form.password,
      });
    }

    setForm({ username: "", password: "" });
    fetchAdmins();
  };

  const handleEdit = (a) => {
    setEditId(a.id);
    setForm({ username: a.username, password: "" });
  };

  const handleDelete = async (id) => {
    await supabase.from("admin").delete().eq("id", id);
    fetchAdmins();
  };

  return (
    <div className={styles.container}>
      <h2>Kelola Admin</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
          <input
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          {!editId && (
            <input
              placeholder="Password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          )}

          <button type="submit">{editId ? "Update" : "Tambah Admin"}</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr key={a.id}>
                <td>{a.username}</td>
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => handleEdit(a)}>Edit</button>
                    <button onClick={() => handleDelete(a.id)}>Hapus</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

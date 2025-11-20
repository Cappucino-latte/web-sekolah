import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function DetailBerita() {
  const { id } = useParams();
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetail() {
      const { data, error } = await supabase
        .from("berita")
        .select("*")
        .eq("id", id)
        .single();

      if (!error) setBerita(data);
      setLoading(false);
    }

    fetchDetail();
  }, [id]);

  if (loading) return <p className="p-4">Memuat...</p>;
  if (!berita) return <p className="p-4">Berita tidak ditemukan.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Thumbnail */}
      {berita.thumbnail && (
        <img
          src={berita.thumbnail}
          alt={berita.judul}
          className="w-100 rounded-lg mb-4"
        />
      )}

      {/* Judul */}
      <h1 className="text-3xl font-bold mb-2">{berita.judul}</h1>

      {/* Tanggal */}
      <p className="text-gray-600 mb-4">
        {new Date(berita.created_at).toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {/* Isi Berita */}
      <div className="text-lg leading-relaxed whitespace-pre-line">
        {berita.isi}
      </div>
    </div>
  );
}

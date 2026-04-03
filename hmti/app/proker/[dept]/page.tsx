"use client";

import { use, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ====== DATA DETAIL ======
const detailProker: Record<string, any> = {
  BPH: {
    title: "Monitoring & Evaluasi",
    desc: "Evaluasi program internal untuk memastikan kegiatan berjalan efektif.",
    dept: "BPH",
    gallery: ["/images/monev.jpg"],
    goals: ["Evaluasi berkala", "Pendampingan", "Review program"],
  },
  RISTEK: {
    title: "Pelatihan Web Development",
    desc: "Workshop intensif untuk meningkatkan skill mahasiswa dalam Web Dev.",
    dept: "RISTEK",
    gallery: ["/images/webdev.jpg"],
    goals: ["Frontend", "Backend", "Mini Project"],
  },
  HUMAS: {
    title: "Publikasi & Kemitraan",
    desc: "Branding dan publikasi official HMTI.",
    dept: "HUMAS",
    gallery: ["/images/proker/humas.jpg"],
    goals: ["Branding", "Media Partner", "Kampanye Publik"],
  },
  PSDM: {
    title: "Pengembangan SDM",
    desc: "Peningkatan skill dan karakter anggota.",
    dept: "PSDM",
    gallery: ["/images/proker/psdm.jpg"],
    goals: ["Leadership", "Training", "Motivasi"],
  },
  EKRAF: {
    title: "Karya & Merchandise",
    desc: "Produksi desain dan merchandise resmi HMTI.",
    dept: "EKRAF",
    gallery: ["/images/proker/ekraf.jpg"],
    goals: ["Desain", "Produksi", "Branding"],
  },
  KOMINFO: {
    title: "Media & Dokumentasi",
    desc: "Pengelolaan konten digital dan dokumentasi kegiatan.",
    dept: "KOMINFO",
    gallery: ["/images/proker/kominfo.jpg"],
    goals: ["Editing", "Konten Media", "Dokumentasi"],
  },
  ADVO: {
    title: "Advokasi Mahasiswa",
    desc: "Menampung aspirasi mahasiswa terkait kebijakan kampus.",
    dept: "ADVO",
    gallery: ["/images/proker/advo.jpg"],
    goals: ["Aspirasi", "Pendampingan", "Mediasi"],
  },
};

export default function Page({ params }: any) {
  const { dept } = use(params);
  const data = detailProker[String(dept).toUpperCase()];

  const [preview, setPreview] = useState<string | null>(null);

  // AOS LOAD
  useEffect(() => {
    async function loadAOS() {
      const AOS = (await import("aos")).default;
      await import("aos/dist/aos.css");
      AOS.init({ duration: 900, easing: "ease-out-cubic" });
    }
    loadAOS();
  }, []);

  // HANDLE NOT FOUND
  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold">Proker Tidak Ditemukan ❌</h1>
        <a href="/proker" className="mt-4 px-6 py-3 bg-blue-600 rounded-xl">
          Kembali
        </a>
      </div>
    );
  }

  // PROKER LAINNYA (selain dept yang sedang dibuka)
  const otherProker = Object.values(detailProker)
    .filter((p: any) => p.dept !== data.dept)
    .slice(0, 3);

  return (
    <main className="w-full text-white">

      {/* ===================== PARALLAX HEADER ===================== */}
      <section
        className="relative py-32 px-6"
        style={{
          backgroundImage: "url('/images/bg-stars.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h1
            data-aos="fade-down"
            className="text-5xl font-extrabold text-center mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {data.title}
            </span>
          </h1>
          <p className="text-center text-blue-300 mb-14 text-lg tracking-wide">
            Departemen {data.dept}
          </p>

          {/* GRID CONTENT */}
          <div className="grid md:grid-cols-3 gap-12">

            {/* LEFT CONTENT */}
            <div className="md:col-span-2 space-y-12">

              {/* DESKRIPSI */}
              <div
                data-aos="fade-up"
                className="bg-white/5 p-8 rounded-2xl shadow-lg backdrop-blur border border-white/10"
              >
                <h2 className="text-2xl font-bold mb-2">Deskripsi Program</h2>
                <p className="text-gray-300 leading-relaxed">{data.desc}</p>
              </div>

              {/* TUJUAN */}
              <div
                data-aos="fade-right"
                className="bg-white/5 p-8 rounded-2xl shadow-lg backdrop-blur border border-white/10"
              >
                <h2 className="text-2xl font-bold mb-3">Tujuan Program</h2>
                <div className="space-y-4 border-l-2 border-blue-500 pl-6">
                  {data.goals.map((goal: any, i: number) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-3 top-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                      <p className="text-gray-300">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* GALLERY */}
              <div
                data-aos="zoom-in-up"
                className="bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10 backdrop-blur-xl"
              >
                <h2 className="text-2xl font-bold mb-5">Galeri Program</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  {data.gallery.map((img: any, i: number) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.07 }}
                      className="rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-white/10 backdrop-blur shadow-lg"
                      onClick={() => setPreview(img)}
                    >
                      <img src={img} className="w-full h-40 object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div
              data-aos="fade-left"
              className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl space-y-4 h-fit"
            >
              <h3 className="text-2xl font-bold">Informasi Singkat</h3>
              <ul className="text-gray-300 space-y-2">
                <li>📌 Departemen: {data.dept}</li>
                <li>⭐ Prioritas: Tinggi</li>
                <li>📅 Durasi: 1 Semester</li>
                <li>👥 Penanggung jawab: Ketua Departemen</li>
              </ul>

              <a
                href="/proker"
                className="block text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-bold shadow-lg mt-6"
              >
                ← Kembali ke Proker
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROKER LAINNYA ===================== */}
      <section className="bg-[#0a0f1e] py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-extrabold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Proker Lainnya
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {otherProker.map((p: any, i: number) => (
              <motion.div
                key={i}
                data-aos="zoom-in"
                whileHover={{ scale: 1.06 }}
                className="relative h-64 rounded-2xl overflow-hidden group
                bg-white/5 backdrop-blur-md border border-white/10
                shadow-lg transition-all"
              >
                <img
                  src={p.gallery[0]}
                  className="w-full h-full object-cover group-hover:scale-125 
                  transition duration-[1200ms]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-5 left-5">
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <a
                    href={`/proker/${p.dept}`}
                    className="text-blue-300 underline underline-offset-4 hover:text-blue-400"
                  >
                    Lihat detail ▢
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== LIGHTBOX ===================== */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-lg z-[999]
            flex items-center justify-center p-6"
            onClick={() => setPreview(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="relative max-w-3xl w-full bg-black rounded-2xl
              overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={preview} className="w-full max-h-[80vh] object-contain" />

              <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur 
              p-4 flex justify-between items-center border-t border-white/10">
                <button
                  onClick={() => setPreview(null)}
                  className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20"
                >
                  Tutup ✕
                </button>

                <a
                  href={preview}
                  download
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
                >
                  Download ⬇
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
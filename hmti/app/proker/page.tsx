"use client";

import { useState, useEffect } from "react";
import Hero from "../../components/hero/Hero";
import { motion } from "framer-motion";
import CardTilt from "../../components/proker/CardTilt";

// ======================= DATA ============================
const dataProker = [
  {
    dept: "BPH",
    title: "Monitoring & Evaluasi",
    desc: "Evaluasi program internal BPH.",
    img: "/images/monev.jpg",
  },
  {
    dept: "RISTEK",
    title: "Pelatihan Web Development",
    desc: "Workshop pengembangan website.",
    img: "/images/webdev.jpg",
  },
  {
    dept: "HUMAS",
    title: "Publikasi & Kemitraan",
    desc: "Branding dan komunikasi publik.",
    img: "/images/proker/humas.jpg",
  },
  {
    dept: "PSDM",
    title: "Pengembangan SDM",
    desc: "Pelatihan karakter & skill.",
    img: "/images/proker/psdm.jpg",
  },
  {
    dept: "EKRAF",
    title: "Karya & Merchandise",
    desc: "Produksi kreatif HMTI.",
    img: "/images/proker/ekraf.jpg",
  },
  {
    dept: "KOMINFO",
    title: "Media & Dokumentasi",
    desc: "Konten digital dan dokumentasi.",
    img: "/images/proker/kominfo.jpg",
  },
  {
    dept: "ADVO",
    title: "Advokasi Mahasiswa",
    desc: "Aspirasi dan kebijakan kampus.",
    img: "/images/proker/advo.jpg",
  },
];

const filters = [
  { name: "SEMUA", icon: "/icons/all.png" },
  { name: "BPH", icon: "/icons/bph.png" },
  { name: "RISTEK", icon: "/icons/ristek.png" },
  { name: "HUMAS", icon: "/icons/humas.png" },
  { name: "PSDM", icon: "/icons/psdm.png" },
  { name: "EKRAF", icon: "/icons/ekraf.png" },
  { name: "KOMINFO", icon: "/icons/kominfo.png" },
  { name: "ADVO", icon: "/icons/advo.png" },
];

// =========================================================

const Proker = () => {
  const [filter, setFilter] = useState("SEMUA");
  const [visible, setVisible] = useState(3);

  // SAFE CLIENT-SIDE AOS INIT
  useEffect(() => {
    async function loadAOS() {
      const AOS = (await import("aos")).default;
      await import("aos/dist/aos.css");
      AOS.init({
        duration: 900,
        easing: "ease-out-cubic",
        mirror: true,
      });
    }
    loadAOS();
  }, []);

  const filtered =
    filter === "SEMUA"
      ? dataProker
      : dataProker.filter((item) => item.dept === filter);

  return (
    <main className="w-full">

      {/* HERO */}
      <Hero title="Program Kerja" />

      {/* PARALLAX SECTION */}
      <section
        id="list-proker"
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

          {/* HEADING */}
          <h2
            data-aos="fade-down"
            className="text-4xl font-extrabold text-center mb-3 text-white"
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Proker HMTI UMP
            </span>
          </h2>

          <p
            data-aos="fade-up"
            className="text-center text-gray-300 mb-14 text-lg"
          >
            Berbagai program kerja inspiratif dari setiap departemen HMTI.
          </p>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-5 mb-14">
            {filters.map((item) => {
              const active = filter === item.name;

              return (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    setFilter(item.name);
                    setVisible(3);
                  }}
                  whileTap={{ scale: 0.92 }}
                  className={`
                    flex items-center gap-3 px-7 py-3 rounded-full font-semibold relative
                    transition-all duration-300 overflow-hidden
                    ${
                      active
                        ? "bg-blue-600 text-white scale-110 shadow-lg shadow-blue-600/40"
                        : "bg-white/10 text-blue-300 border border-white/20 backdrop-blur hover:bg-white/20 hover:scale-105"
                    }
                  `}
                >
                  {active && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 250, damping: 25 }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-3">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={`
                        object-contain transition-all duration-300
                        ${
                          active
                            ? "w-8 h-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.95)] brightness-150"
                            : "w-7 h-7 opacity-90 drop-shadow-[0_0_8px_rgba(0,150,255,0.6)]"
                        }
                      `}
                    />
                    {item.name}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* PROKER CARDS */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
            {filtered.slice(0, visible).map((item, index) => (
              <CardTilt key={index}>
                <motion.div
                  data-aos="zoom-in-up"
                  className="
                    relative h-64 rounded-2xl overflow-hidden group
                    bg-white/5 backdrop-blur-md border border-white/10
                    shadow-xl transition-all
                  "
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                >
                  <img
                    src={item.img}
                    alt={item.dept}
                    className="
                      w-full h-full object-cover
                      group-hover:scale-125 transition duration-[1200ms]
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  <div className="absolute bottom-5 left-5 right-5 space-y-1">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-300 drop-shadow">
                      {item.desc}
                    </p>

                    <a
                      href={`/proker/${item.dept}`}
                      className="text-blue-300 underline underline-offset-4 hover:text-blue-400 text-sm font-medium"
                    >
                      Lihat detail ▢
                    </a>
                  </div>
                </motion.div>
              </CardTilt>
            ))}
          </div>

          {/* LOAD MORE */}
          <div className="flex justify-center mt-16 gap-6">
            {visible < filtered.length && (
              <button
                onClick={() => setVisible((prev) => prev + 3)}
                className="
                  px-8 py-3 bg-blue-600 text-white rounded-xl
                  hover:bg-blue-700 transition-all duration-300
                  hover:scale-105 shadow-lg hover:shadow-blue-600/40
                "
              >
                Lihat Program Lainnya
              </button>
            )}

            {visible > 3 && (
              <button
                onClick={() => setVisible(3)}
                className="
                  px-8 py-3 bg-white/10 text-white rounded-xl border border-white/20
                  hover:bg-white/20 transition-all hover:scale-105
                "
              >
                Lebih Sedikit
              </button>
            )}
          </div>

        </div>
      </section>
    </main>
  );
};

export default Proker;
"use client";

import { useState, useEffect } from "react";
import ProkerFilter from "./ProkerFilter";
import ProkerList from "./ProkerList";
import ProkerCard from "./ProkerCard";

type ProkerSectionProps = {
    proker: any[];
    filters: { name: string; icon: string }[];
};

export default function ProkerSection({ proker, filters }: ProkerSectionProps) {
  const [filter, setFilter] = useState("SEMUA");
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    async function loadAOS() {
      const AOS = (await import("aos")).default;
      // @ts-ignore
      await import("aos/dist/aos.css");
      AOS.init({ duration: 900, easing: "ease-out-cubic" });
    }
    loadAOS();
  }, []);

  const filteredProker =
    filter === "SEMUA"
      ? proker
      : proker.filter((item) => item.dept === filter);

  return (
    <section
      id="list-proker"
      className="relative py-20 md:py-28 px-4 sm:px-6 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('/images/bg-stars.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xs" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <h2 data-aos="fade-down" className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white">
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Program Kerja HMTI UMP
          </span>
        </h2>
        <p data-aos="fade-up" className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Berbagai program kerja inspiratif dari setiap departemen untuk membangun masa depan teknologi yang lebih baik.
        </p>

        {/* FILTER COMPONENT */}
        <ProkerFilter
          filters={filters}
          active={filter}
          setFilter={setFilter}
          resetVisible={() => setVisible(3)}
        />

        {/* LIST COMPONENT */}
        <ProkerList
          data={filteredProker}
          visible={visible}
        />

        {/* LOAD MORE BUTTONS */}
        <div className="flex justify-center mt-12 gap-4 md:gap-6">
          {visible < filteredProker.length && (
            <button
              onClick={() => setVisible((prev) => prev + 3)}
              className="px-6 py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl hover:scale-105 shadow-lg shadow-blue-500/20 active:scale-95 transition-all duration-300 cursor-pointer text-sm md:text-base"
            >
              Lihat Program Lainnya
            </button>
          )}

          {visible > 3 && (
            <button
              onClick={() => setVisible(3)}
              className="px-6 py-2.5 md:px-8 md:py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer text-sm md:text-base"
            >
              Lebih Sedikit
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
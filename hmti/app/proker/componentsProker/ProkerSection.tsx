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
      className="relative py-32 px-6 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('/images/bg-stars.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <h2 data-aos="fade-down" className="text-4xl font-extrabold text-center mb-3 text-white">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Proker HMTI UMP
          </span>
        </h2>
        <p data-aos="fade-up" className="text-center text-gray-300 mb-14 text-lg">
          Berbagai program kerja inspiratif dari setiap departemen.
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

        {/* LOAD MORE BUTTON */}
        <div className="flex justify-center mt-16 gap-6">
          {visible < filteredProker.length && (
            <button
              onClick={() => setVisible((prev) => prev + 3)}
              className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:scale-105 shadow-lg"
            >
              Lihat Program Lainnya
            </button>
          )}

          {visible > 3 && (
            <button
              onClick={() => setVisible(3)}
              className="px-8 py-3 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105"
            >
              Lebih Sedikit
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
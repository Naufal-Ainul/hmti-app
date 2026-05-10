"use client";

import { motion } from "framer-motion";
import { useFetchProker } from "../../../../api/proker/useFetchProker";

type proker = {
    id: number;
    dept?: string;
    title?: string;
    desc?: string;
    img?: string;
}

export default function ProkerLainnya({ list }: any) {
    const { proker } = useFetchProker();
  return (
    <section className="bg-black/60 backdrop-blur-sm py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-extrabold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Proker Lainnya
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {proker.map((proke: proker) => (
            <motion.div
              key={proke.id}
              whileHover={{ scale: 1.06 }}
              className="relative h-64 rounded-2xl overflow-hidden group
              bg-white/5 backdrop-blur-md border border-white/10
              shadow-lg transition-all"
            >
              <img
                src={proke.img}
                className="w-full h-full object-cover group-hover:scale-125 transition duration-[1200ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-5 left-5">
                <h3 className="text-xl font-bold text-white">{proke.title}</h3>
                <a
                  href={`/proker/${proke.dept}`}
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
  );
}
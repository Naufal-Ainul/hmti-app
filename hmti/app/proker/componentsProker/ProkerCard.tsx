"use client";

import { motion } from "framer-motion";

type ProkerCardProps = {
  proker: {
    img?: string;
    dept?: string;
    title?: string;
    desc?: string;
  };
};

export default function ProkerCard({ proker }: ProkerCardProps) {
  return (
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
        src={proker.img}
        alt={proker.dept}
        className="w-full h-full object-cover group-hover:scale-125 transition duration-[1200ms]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      <div className="absolute bottom-5 left-5 right-5 space-y-1">
        <h3 className="text-xl font-bold text-white drop-shadow-lg">{proker.title}</h3>
        <p className="text-sm text-gray-300">{proker.desc}</p>

        <a
          href={`/proker/${proker.dept}`}
          className="text-blue-300 underline underline-offset-4 hover:text-blue-400 text-sm font-medium"
        >
          Lihat detail ▢
        </a>
      </div>
    </motion.div>
  );
}
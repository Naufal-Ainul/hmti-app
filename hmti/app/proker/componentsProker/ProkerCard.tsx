"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ProkerCardProps = {
  proker: {
    id: number;
    img?: string;
    dept?: string;
    title?: string;
    desc?: string;
  };
};


export default function ProkerCard({ proker }: ProkerCardProps) {
  const imgSrc = proker.img && proker.img.trim() !== "" && proker.img !== "-"
    ? proker.img
    : "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop";

  return (
    <Link href={`/proker/${proker.id}`} className="block w-full h-full group">
      <motion.div
        data-aos="zoom-in-up"
        className="
          relative h-80 rounded-2xl overflow-hidden
          bg-white/5 backdrop-blur-md border border-white/10
          shadow-xl transition-all duration-500
          hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5
        "
      >
        {/* Badge Department */}
        {proker.dept && (
          <span className="absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-full bg-blue-600/80 backdrop-blur-md border border-white/20 text-white shadow-md">
            {proker.dept}
          </span>
        )}

        {/* Card Image */}
        <img
          src={imgSrc}
          alt={proker.title || proker.dept}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-300 group-hover:from-black/98 group-hover:via-black/60" />

        {/* Card Contents */}
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end transition-all duration-300">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 line-clamp-1">
            {proker.title}
          </h3>

          {proker.desc && (
            <p className="text-sm text-gray-300 line-clamp-2 mt-2 opacity-80 group-hover:opacity-100 transition-all duration-300">
              {proker.desc}
            </p>
          )}

          {/* Interactive Arrow Link */}
          <div className="pt-4 flex items-center">
            <span className="inline-flex items-center gap-1.5 text-blue-400 group-hover:text-blue-300 text-xs font-semibold uppercase tracking-wider transition-colors duration-300">
              Detail Program
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
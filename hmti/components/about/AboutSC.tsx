"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function AboutSC() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 md:mt-40 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative shadow-2xl shadow-slate-300/20 rounded-2xl overflow-hidden shrink-0"
      >
        <Image
          className="max-w-md w-full object-cover rounded-2xl"
          src="https://res.cloudinary.com/dxjptcgdd/image/upload/v1769555431/Screenshot_20251121_161631_Gallery_wjwfer.jpg"
          width={448}
          height={448}
          alt="Cerenity Study Club"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-sm text-slate-300 max-w-lg"
      >
        <h1 className="text-xl uppercase font-normal text-white mask-b-from-15%">
          What is cerenity?
        </h1>
        <div className="w-48 h-px m-px bg-gradient-to-r from-transparent to-transparent via-slate-400/90" />
        <p className="mt-6 sm:mt-8 leading-relaxed">
          Cerenity adalah study club yang jadi ruang belajar dan berkembang
          bareng buat mahasiswa yang tertarik di bidang teknologi. Dengan suasana
          yang santai, kolaboratif, dan suportif, Cerenity hadir sebagai tempat
          untuk eksplorasi, diskusi, dan ngembangin skill tanpa tekanan.
        </p>
        <p className="mt-4 leading-relaxed">
          Melalui sharing session, mentoring, workshop, dan project bersama,
          serta mengikuti berbagai IT competition, Cerenity fokus membantu
          mahasiswa mendalami programming, AI, cybersecurity, dan teknologi
          digital lainnya, sekaligus membangun pengalaman serta kesiapan untuk
          menghadapi dunia teknologi yang terus berkembang.
        </p>
        <p className="mt-4 leading-relaxed">
          Lebih dari sekadar tempat belajar, Cerenity adalah ruang untuk tumbuh
          bersama, membangun relasi, mengasah problem solving, dan mempersiapkan
          diri menghadapi perkembangan dunia teknologi yang terus bergerak cepat.
          Di sini, kita belajar bareng, berkembang bareng, dan siap melangkah
          lebih jauh bersama.
        </p>
        <a
          href="#"
          className="inline-flex items-center w-max gap-2 mt-6 sm:mt-8 hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-br from-slate-500/75 via-black to-slate-500 shadow-sm shadow-blue-400 py-3 px-8 rounded-full text-white text-sm"
        >
          <span>Read more</span>
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
              fill="#fff"
              className="mask-b-from-50%"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
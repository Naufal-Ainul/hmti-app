"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";

import Description from "./components/Description";
import Gallery from "./components/Gallery";
import ProkerLainnya from "./components/ProkerLainnya";
import Lightbox from "./components/Lightbox";
import { useFetchProker } from "../../../api/proker/useFetchProker";

export default function Page({ params }: any) {
  const { proker } = useFetchProker();
  const { dept } = use(params) as { dept: string }; // Next.js dynamic routing parameter (captures the proker ID)
  const data = proker.find((p: any) => String(p.id) === String(dept));
  const [preview, setPreview] = useState<string | null>(null);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] text-white">
        
      </div>
    );
  }

  const otherProker = Object.values(proker)
    .filter((p: any) => p.id !== data.id)
    .slice(0, 3);

  return (
    <main className="w-full text-zinc-100 min-h-screen bg-[#09090b]">
      {/* Editorial top layout container */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        
        {/* Back navigation & Category badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-12 border-b border-zinc-900 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <a
              href="/proker"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-200 transition-colors duration-250 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              <span>Kembali</span>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 text-xs tracking-widest text-zinc-500 uppercase font-medium"
          >
            <span>HMTI UMP</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
            <span className="text-zinc-400">Rincian Kegiatan</span>
          </motion.div>
        </div>

        {/* Hero Section - Editorial Headline */}
        <header className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-semibold tracking-wider uppercase rounded">
              DEPARTEMEN {data.dept}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl">
              {data.title}
            </h1>
          </motion.div>
        </header>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Media & Description (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Image Frame */}
            <div className="group/image relative overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950 p-2 shadow-sm transition-colors duration-300 hover:border-zinc-800">
              <Gallery img={data.img} onImageClick={setPreview} />
            </div>

            {/* Content Article */}
            <Description desc={data.desc} />
          </motion.div>

          {/* Right Column: Sticky Metadata & CTA (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 lg:sticky lg:top-32 space-y-8"
          >
            {/* Minimalist Info Card */}
            <div className="bg-zinc-900/20 border border-zinc-900 p-8 rounded-2xl space-y-6">
              <div className="border-b border-zinc-900 pb-4">
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Informasi Program</h3>
              </div>
              
              <div className="divide-y divide-zinc-900/60 text-sm">
                <div className="py-3 flex justify-between items-center gap-4">
                  <span className="text-zinc-500 text-xs uppercase tracking-wider">Departemen</span>
                  <span className="font-semibold text-zinc-200 text-right">{data.dept}</span>
                </div>
                <div className="py-3 flex justify-between items-center gap-4">
                  <span className="text-zinc-500 text-xs uppercase tracking-wider">Status Kegiatan</span>
                  <span className="inline-flex items-center gap-2 font-semibold text-emerald-400 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Terlaksana
                  </span>
                </div>
                <div className="py-3 flex justify-between items-center gap-4">
                  <span className="text-zinc-500 text-xs uppercase tracking-wider">Kategori</span>
                  <span className="font-semibold text-zinc-300">Program Kerja</span>
                </div>
              </div>
            </div>

            {/* Clean Interaction Box */}
            <div className="border border-zinc-900 p-8 rounded-2xl flex items-start gap-4 hover:border-zinc-800 transition-colors duration-300 bg-zinc-950/40">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.086.796L10.5 13.5h3.75m-6.75 6.75h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-zinc-200 font-semibold text-sm">Punya pertanyaan tentang program?</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Hubungi departemen terkait melalui halaman aspirasi atau media sosial resmi HMTI UMP.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Recommended Projects Feed */}
      <ProkerLainnya list={otherProker} />

      {/* Lightbox Modal */}
      <Lightbox preview={preview} setPreview={setPreview} />
    </main>
  );
}
"use client";

import React from "react";
import Hero from "../../components/hero/Hero";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <main className="min-h-screen bg-black text-slate-200 selection:bg-slate-500/30">
      <Hero title="About Us" />

      {/* About Info Section */}
      <div className="flex flex-col items-center justify-center mt-16 sm:mt-24 md:mt-32 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Glow effect di belakang judul */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-slate-500/10 blur-[100px] -z-10"></div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="sm:text-5xl text-3xl md:text-4xl font-bold mb-8 sm:mb-12 tracking-tight text-white"
        >
          <span className="text-gradient">About HMTI</span>
        </motion.h1>

        <div className="max-w-4xl text-center space-y-6 mb-16 sm:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300/80 font-light leading-relaxed"
          >
            Himpunan Mahasiswa Teknik Informatika merupakan suatu lembaga
            kemahasiswaan yang berada di lingkup Program Studi Teknik
            Informatika, Fakultas Teknik dan Sains, Universitas Muhammadiyah
            Purwokerto. HMTI FTS UMP didirikan pada tanggal 7 Oktober 2007 dan
            berkedudukan di markas besar HMPS Teknik Informatika Fakultas Teknik
            dan Sains Universitas Muhammadiyah Purwokerto Kampus I Dukuhwaluh.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300/80 font-light leading-relaxed"
          >
            HMTI UMP memiliki struktur organisasi yang terdiri atas Badan
            Pengurus Harian (BPH) serta enam departemen, yaitu Riset dan Teknologi
            (RISTEK), Hubungan Masyarakat (HUMAS), Komunikasi dan Informasi
            (KOMINFO), Pengembangan Sumber Daya Manusia (PSDM), Ekonomi Kreatif
            (EKRAF), serta ADVOKASI. Ketujuh divisi ini saling bersinergi dalam
            menjalankan roda organisasi.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-300/80 font-light leading-relaxed"
          >
            Seluruh divisi dan departemen berperan aktif dalam mendukung kinerja dan
            pencapaian visi misi himpunan.
          </motion.p>
        </div>

        {/* Highlight / Stat Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-full max-w-5xl gap-6 sm:gap-8 md:gap-10">
          {[
            { value: "2007", label: "Tahun Berdiri" },
            { value: "7", label: "Divisi & BPH" },
            { value: "25+", label: "Program Kerja" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative flex flex-col items-center justify-center p-8 sm:p-10 glass-panel min-w-[200px] sm:min-w-[240px] flex-1 transition-all duration-500 hover:shadow-primary-500/20 hover:border-primary-500/50 cursor-default w-full sm:w-auto"
            >
              <h3 className="text-4xl sm:text-5xl font-bold text-white mb-3 relative z-10 text-glow">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-widest uppercase relative z-10">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visi & Misi Section */}
      <div className="relative flex flex-col items-center justify-center mt-24 sm:mt-36 md:mt-48 mb-16 sm:mb-24 md:mb-32 px-4 sm:px-6 lg:px-8">
        {/* Glow effect pemisah */}
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="sm:text-5xl text-3xl md:text-4xl font-bold mb-12 sm:mb-20 tracking-tight text-white"
        >
          <span className="text-gradient">Visi & Misi</span>
        </motion.h1>

        <div className="flex flex-col md:flex-row items-stretch justify-center w-full max-w-7xl gap-6 sm:gap-8 md:gap-12">
          {/* Visi Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative flex flex-col p-8 sm:p-12 glass-panel rounded-2xl sm:rounded-[2.5rem] flex-1 transition-all duration-700 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10"
          >
            {/* Dekorasi sudut */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500/10 rounded-br-[2.5rem] blur-2xl transition-all duration-700 group-hover:bg-primary-500/20"></div>

            <h3 className="text-3xl sm:text-4xl font-extralight text-slate-200 mb-6 sm:mb-8 relative z-10 flex items-center gap-4">
              <span className="w-8 sm:w-12 h-[1px] bg-slate-400/40 block"></span>
              Visi
            </h3>
            <p className="text-slate-300/80 font-light leading-relaxed text-base sm:text-lg relative z-10">
              Menjadikan Himpunan Mahasiswa sebagai wadah pengembangan diri yang
              aktif, inklusif, dan progresif untuk seluruh mahasiswa Program
              Studi Teknik Informatika, guna menciptakan lingkungan akademik dan
              non-akademik yang berkualitas, solid, serta berdaya saing.
            </p>
          </motion.div>

          {/* Misi Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative flex flex-col p-8 sm:p-12 glass-panel rounded-2xl sm:rounded-[2.5rem] flex-1 transition-all duration-700 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10"
          >
            {/* Dekorasi sudut */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-500/10 rounded-tl-[2.5rem] blur-2xl transition-all duration-700 group-hover:bg-accent-500/20"></div>

            <h3 className="text-3xl sm:text-4xl font-extralight text-slate-200 mb-6 sm:mb-8 relative z-10 flex items-center gap-4">
              <span className="w-8 sm:w-12 h-[1px] bg-slate-400/40 block"></span>
              Misi
            </h3>
            <ul className="text-slate-300/80 font-light leading-relaxed text-base sm:text-lg space-y-4 relative z-10 list-disc list-outside ml-5 marker:text-slate-500">
              <li>
                Meningkatkan peran dan fungsi himpunan sebagai organisasi yang
                responsif terhadap kebutuhan dan aspirasi mahasiswa.
              </li>
              <li>
                Mengembangkan program kerja yang inovatif dan berkelanjutan
                dalam bidang akademik, minat bakat, serta pengabdian kepada
                masyarakat.
              </li>
              <li>
                Memperkuat solidaritas dan komunikasi internal antar anggota
                himpunan serta membangun hubungan harmonis dengan pihak luar,
                termasuk dosen, alumni, dan organisasi eksternal.
              </li>
              <li>
                Membangun sistem kerja yang transparan dan akuntabel dalam
                setiap kegiatan serta pengelolaan sumber daya organisasi.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default About;

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import GlowLine from "../components/ui/glowline/Glowline";
import { FiUsers, FiCpu, FiGlobe, FiTv, FiUserCheck, FiShoppingBag, FiShield, FiFolder, FiBookOpen, FiSend, FiLayout } from "react-icons/fi";

// ─── Data ────────────────────────────────────────────────────────
const stats = [
  {
    value: "40+",
    label: "Anggota Aktif",
    icon: <FiUsers className="w-5 h-5 text-primary-500" />,
  },
  {
    value: "25+",
    label: "Program Kerja",
    icon: <FiFolder className="w-5 h-5 text-primary-500" />,
  },
  {
    value: "17+",
    label: "Tahun Berdiri",
    icon: <FiGlobe className="w-5 h-5 text-primary-500" />,
  },
];

const aboutCards = [
  {
    title: "Est. 2007",
    desc: "17+ tahun membangun dan mengembangkan potensi mahasiswa informatika.",
    icon: <FiGlobe className="w-6 h-6 text-white" />,
  },
  {
    title: "7 Divisi Himpunan",
    desc: "BPH & 6 departemen aktif bersinergi memajukan potensi mahasiswa.",
    icon: <FiUsers className="w-6 h-6 text-white" />,
  },
  {
    title: "1 Study Club",
    desc: "Cerenity — ruang belajar dan berkembang bareng di bidang teknologi.",
    icon: <FiBookOpen className="w-6 h-6 text-white" />,
  },
  {
    title: "25+ Proker",
    desc: "Beragam program kerja untuk kegiatan dan inisiatif mahasiswa.",
    icon: <FiLayout className="w-6 h-6 text-white" />,
  },
];

const departments = [
  { name: "BPH", fullName: "Badan Pengurus Harian", icon: <FiUsers className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />, desc: "Mengoordinasikan, mengawasi, dan mengarahkan seluruh kegiatan & kebijakan internal organisasi." },
  { name: "RISTEK", fullName: "Riset dan Teknologi", icon: <FiCpu className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />, desc: "Mengembangkan riset, inovasi, dan teknologi di lingkungan mahasiswa teknik informatika." },
  { name: "HUMAS", fullName: "Hubungan Masyarakat", icon: <FiGlobe className="w-7 h-7 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />, desc: "Membangun jaringan komunikasi, kemitraan, dan hubungan baik dengan eksternal kampus." },
  { name: "KOMINFO", fullName: "Komunikasi dan Informasi", icon: <FiTv className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />, desc: "Mengelola media komunikasi visual, dokumentasi, dan penyebaran informasi himpunan." },
  { name: "PSDM", fullName: "Pengembangan SDM", icon: <FiUserCheck className="w-7 h-7 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />, desc: "Mewadahi pengembangan potensi akademik, karakter, kepemimpinan, dan kualitas anggota." },
  { name: "EKRAF", fullName: "Ekonomi Kreatif", icon: <FiShoppingBag className="w-7 h-7 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />, desc: "Mengembangkan minat kewirausahaan mandiri dan produk inovatif kreatif himpunan." },
  { name: "ADVOKASI", fullName: "Advokasi", icon: <FiShield className="w-7 h-7 text-rose-400 group-hover:text-rose-300 transition-colors duration-300" />, desc: "Menampung dan memperjuangkan aspirasi, hak, serta kesejahteraan mahasiswa." },
];

const quickLinks = [
  { title: "Program Kerja", desc: "Lihat berbagai program kerja inspiratif dari setiap departemen HMTI.", href: "/proker", icon: <FiLayout className="w-6 h-6 text-blue-400" /> },
  { title: "Anggota", desc: "Kenali anggota dan pengurus HMTI dari setiap departemen.", href: "/member", icon: <FiUsers className="w-6 h-6 text-emerald-400" /> },
  { title: "Study Club", desc: "Bergabung dengan Cerenity dan kembangkan skill teknologimu.", href: "/studyclub", icon: <FiBookOpen className="w-6 h-6 text-purple-400" /> },
  { title: "Aspirasi", desc: "Sampaikan aspirasi dan masukanmu untuk kemajuan bersama.", href: "/aspirasi", icon: <FiSend className="w-6 h-6 text-rose-400" /> },
];

// ─── Component ───────────────────────────────────────────────────
export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadAOS() {
      const AOS = (await import("aos")).default;
      // @ts-ignore
      await import("aos/dist/aos.css");
      AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
    }
    loadAOS();
  }, []);

  return (
    <main className="min-h-screen bg-black text-slate-200 overflow-hidden">
      {/* ════════════════════════════════════════════════════════════
          HERO — Two-column layout inspired by hmifunsri
         ════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background gradient & decorations */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 via-primary-500/5 to-transparent -z-10" />
        <div className="absolute -z-10 top-20 right-10 w-64 h-64 bg-primary-500/15 rounded-full blur-3xl" />
        <div className="absolute -z-10 bottom-10 left-10 w-64 h-64 bg-accent-500/15 rounded-full blur-3xl" />

        {/* Floating geometric shapes */}
        <div className="absolute top-40 left-[10%] w-8 h-8 bg-primary-500/30 rounded-lg animate-float" style={{ animationDuration: "6s" }} />
        <div className="absolute top-60 right-[15%] w-6 h-6 bg-accent-500/30 rounded-full animate-float" style={{ animationDuration: "8s", animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-[20%] w-10 h-10 bg-primary-500/20 rounded-md rotate-45 animate-float" style={{ animationDuration: "7s", animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div data-aos="fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium text-sm shadow-lg shadow-primary-500/20">
                  Welcome to HMTI UMP
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </div>

              {/* Headline */}
              <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Membangun</span>{" "}
                <span className="text-white relative">
                  Generasi
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary-500/15 -z-10 rounded" />
                </span>{" "}
                <span className="text-gradient">Informatika</span>
              </h1>

              {/* Description */}
              <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-slate-300/90 max-w-xl leading-relaxed">
                Himpunan Mahasiswa Teknik Informatika Universitas Muhammadiyah Purwokerto — Wadah kreativitas, inovasi, dan pengembangan potensi mahasiswa informatika.
              </p>

              {/* CTA Buttons */}
              <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap gap-4">
                <Link
                  href="/proker"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Programs
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-surface-hover text-white font-semibold rounded-xl border border-surface-border hover:border-primary-500/30 hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>

              {/* Stats Row */}
              <div data-aos="fade-up" data-aos-delay="400" className="grid grid-cols-3 gap-6 pt-6">
                {stats.map((s, i) => (
                  <div key={i} className="group space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors duration-300 text-primary-500">
                        {s.icon}
                      </div>
                      <span className="text-2xl font-bold text-primary-500">{s.value}</span>
                    </div>
                    <p className="text-sm text-slate-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Interactive Console Dashboard */}
            <div data-aos="fade-left" data-aos-delay="300" className="relative hidden lg:block">
              <div className="relative w-full aspect-square flex items-center justify-center">
                {/* Background glow blobs */}
                <div className="absolute top-1/4 -left-8 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-8 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />

                {/* Terminal window */}
                <div className="relative z-10 w-full max-w-md bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl overflow-hidden hover:border-primary-500/30 transition-colors duration-500">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 select-none">hmti-terminal.js</span>
                    <div className="w-12" />
                  </div>
                  
                  {/* Terminal Body */}
                  <div className="p-6 font-mono text-[11px] md:text-xs space-y-4">
                    <div className="flex gap-2 text-primary-400">
                      <span className="text-slate-600 select-none">~</span>
                      <span>npm run dev:hmti</span>
                    </div>
                    <div className="text-slate-400 space-y-1">
                      <p className="text-slate-500">// Memuat Struktur Organisasi...</p>
                      <p className="flex items-center gap-2">
                        <span className="text-emerald-400 font-bold">✓</span> 
                        <span>Badan Pengurus Harian (BPH) aktif</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-emerald-400 font-bold">✓</span> 
                        <span>6 Departemen Himpunan terhubung</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-emerald-400 font-bold">✓</span> 
                        <span>Cerenity Study Club online</span>
                      </p>
                    </div>
                    
                    <div className="space-y-1.5 border-t border-slate-800/60 pt-4">
                      <p className="text-primary-450 font-bold">const HMTI_UMP = &#123;</p>
                      <p className="pl-4 text-slate-300">akronim: <span className="text-amber-400">"Himpunan Mahasiswa Teknik Informatika"</span>,</p>
                      <p className="pl-4 text-slate-300">didirikan: <span className="text-purple-400">2007</span>,</p>
                      <p className="pl-4 text-slate-300">divisi: <span className="text-sky-400">7</span>,</p>
                      <p className="pl-4 text-slate-300">visi: <span className="text-emerald-400">"Aktif, Inklusif, Progresif"</span></p>
                      <p className="text-primary-450 font-bold">&#125;;</p>
                    </div>
                    
                    <div className="flex gap-2 text-slate-400 animate-pulse pt-2">
                      <span className="text-slate-600 select-none">&gt;</span>
                      <span className="w-1.5 h-3.5 bg-slate-400 inline-block" />
                    </div>
                  </div>
                </div>

                {/* Interactive overlapping photo card */}
                <div className="absolute -bottom-6 -left-8 z-20 w-48 bg-slate-900/90 border border-slate-800/80 p-2.5 rounded-xl shadow-2xl rotate-[-4deg] hover:rotate-0 hover:scale-105 transition-all duration-500 group">
                  <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-slate-800">
                    <Image 
                      src="https://res.cloudinary.com/di9ls9t2u/image/upload/v1779888772/fotstud_hcgwkq.jpg"
                      alt="HMTI Members"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="200px"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-[11px] font-semibold text-white">Sinergi Bersama</p>
                    <p className="text-[9px] text-slate-400">HMTI FTS UMP</p>
                  </div>
                </div>

                {/* Another small decorative card */}
                <div className="absolute -top-6 -right-6 z-20 w-40 bg-slate-900/95 border border-slate-800/80 p-2.5 rounded-xl shadow-2xl rotate-[6deg] hover:rotate-0 hover:scale-105 transition-all duration-500 flex items-center gap-2">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <Image
                      src="https://res.cloudinary.com/dxjptcgdd/image/upload/v1769009884/HMTI_dj9rvx.png"
                      alt="HMTI Logo"
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white leading-tight">Est. 2007</p>
                    <p className="text-[8px] text-slate-400">UMP Purwokerto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          ABOUT SECTION
         ════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-24 relative overflow-hidden">
        {/* Section background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/3 via-primary-500/8 to-primary-500/3" />
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent" />

        {/* Floating shapes */}
        <div className="absolute top-40 right-[10%] w-8 h-8 bg-primary-500/20 rounded-lg animate-float" style={{ animationDuration: "6s" }} />
        <div className="absolute bottom-60 left-[15%] w-6 h-6 bg-accent-500/20 rounded-full animate-float" style={{ animationDuration: "8s", animationDelay: "1s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div data-aos="fade-up" className="inline-block mb-4">
              <div className="h-1 w-16 bg-primary-500 mb-6 mx-auto rounded-full" />
              <span className="px-4 py-2 rounded-full bg-primary-500/15 text-primary-500 font-medium text-sm">
                About HMTI
              </span>
            </div>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gradient">About</span>{" "}
              <span className="text-white relative inline-block">
                HMTI
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary-500/15 -z-10 rounded" />
              </span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-slate-300/80 leading-relaxed">
              Himpunan Mahasiswa Teknik Informatika adalah organisasi kemahasiswaan di lingkup Program Studi Teknik Informatika, Fakultas Teknik dan Sains, Universitas Muhammadiyah Purwokerto yang bergerak dalam bidang Akademik maupun Non-Akademik.
            </p>
          </div>

          {/* Stat Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {aboutCards.map((card, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100 + 200}
                className="group relative glass-panel p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 shadow-lg shadow-primary-500/20 text-white transform group-hover:rotate-6 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-500 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                {/* Decorative corner */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-primary-500/10 rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Vision & Mission */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="p-8 rounded-2xl glass-panel backdrop-blur-sm border border-primary-500/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">Visi</h3>
                <p className="text-slate-300/80 leading-relaxed">
                  Menjadikan Himpunan Mahasiswa sebagai wadah pengembangan diri yang aktif, inklusif, dan progresif untuk seluruh mahasiswa Program Studi Teknik Informatika, guna menciptakan lingkungan akademik dan non-akademik yang berkualitas, solid, serta berdaya saing.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">Misi</h3>
                <ul className="text-slate-300/80 leading-relaxed space-y-2 list-disc list-outside ml-5 marker:text-primary-500/50">
                  <li>Meningkatkan peran dan fungsi himpunan sebagai organisasi yang responsif terhadap kebutuhan mahasiswa.</li>
                  <li>Mengembangkan program kerja inovatif dan berkelanjutan dalam bidang akademik, minat bakat, serta pengabdian masyarakat.</li>
                  <li>Memperkuat solidaritas dan komunikasi internal antar anggota serta membangun hubungan harmonis dengan pihak luar.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glow Line Divider */}
      <GlowLine orientation="horizontal" position="50%" color="blue" className="relative" />

      {/* ════════════════════════════════════════════════════════════
          DEPARTEMEN SECTION
         ════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 blur-[150px] rounded-full -z-0" />
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary-500/5 blur-[120px] rounded-full -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div data-aos="fade-up" className="inline-block mb-4">
              <div className="h-1 w-16 bg-accent-500 mb-6 mx-auto rounded-full" />
              <span className="px-4 py-2 rounded-full bg-accent-500/15 text-accent-500 font-medium text-sm">
                Struktur Organisasi
              </span>
            </div>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              <span className="text-gradient">7 Divisi & Departemen</span> Aktif
            </h2>
            <p data-aos="fade-up" data-aos-delay="200" className="text-slate-400 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              Terdiri atas Badan Pengurus Harian dan 6 departemen yang saling berkolaborasi mendukung pencapaian visi misi himpunan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <div
                key={dept.name}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="group relative glass-panel p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/5 cursor-default"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/5 rounded-bl-3xl blur-2xl transition-all duration-700 group-hover:bg-primary-500/15" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-surface-hover border border-surface-border flex items-center justify-center transition-all duration-300 group-hover:border-primary-500/30 group-hover:shadow-md group-hover:shadow-primary-500/10">
                    {dept.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-0.5 tracking-wide">{dept.name}</h3>
                    <p className="text-xs text-primary-500/80 font-medium mb-2">{dept.fullName}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{dept.desc}</p>
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-primary-500/10 rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-delay="500" className="text-center mt-12">
            <Link
              href="/member"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface-hover text-white font-semibold rounded-xl border border-surface-border hover:border-primary-500/30 hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300"
            >
              Lihat Semua Anggota
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Glow Line Divider */}
      <GlowLine orientation="horizontal" position="50%" color="blue" className="relative" />

      {/* ════════════════════════════════════════════════════════════
          QUICK LINKS — Explore Section
         ════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/3 via-primary-500/8 to-primary-500/3" />
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div data-aos="fade-up" className="inline-block mb-4">
              <div className="h-1 w-16 bg-primary-500 mb-6 mx-auto rounded-full" />
              <span className="px-4 py-2 rounded-full bg-primary-500/15 text-primary-500 font-medium text-sm">
                Jelajahi
              </span>
            </div>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Apa yang Bisa Kamu{" "}
              <span className="text-gradient">Temukan?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((item, i) => (
              <Link key={item.title} href={item.href}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="group relative glass-panel p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10 cursor-pointer h-full"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-all duration-700" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-500/20 border border-primary-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-md group-hover:shadow-primary-500/10">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    <div className="flex items-center gap-2 mt-4 text-sm text-primary-500 font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>Selengkapnya</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Glow Line Divider */}
      <GlowLine orientation="horizontal" position="50%" color="blue" className="relative" />

      {/* ════════════════════════════════════════════════════════════
          CERENITY STUDY CLUB CTA
         ════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent-500/5 blur-[150px] rounded-full -z-0" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div data-aos="fade-up" className="relative glass-panel rounded-[2.5rem] p-12 md:p-16 overflow-hidden">
            {/* Corner glows */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary-500/10 rounded-br-[3rem] blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-500/10 rounded-tl-[3rem] blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-4 py-2 rounded-full bg-accent-500/15 text-accent-500 font-medium text-sm mb-4">
                  Study Club
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                  Bergabung dengan{" "}
                  <span className="text-gradient">Cerenity</span>
                </h2>
                <p className="text-slate-300/80 font-light leading-relaxed mb-8 max-w-lg">
                  Cerenity adalah study club yang jadi ruang belajar dan berkembang bareng buat mahasiswa yang tertarik di bidang teknologi. Sharing session, mentoring, workshop, dan project bersama menanti!
                </p>
                <Link
                  href="/studyclub"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Cerenity
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Decorative circle illustration */}
              <div className="shrink-0 relative w-52 h-52 md:w-64 md:h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 animate-pulse" />
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-primary-600/10 to-accent-600/10 backdrop-blur-sm border border-white/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="url(#cerenity-grad)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                    <defs>
                      <linearGradient id="cerenity-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                {/* Orbiting dots */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-500/60" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-accent-500/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          ASPIRASI CTA
         ════════════════════════════════════════════════════════════ */}
      <section className="py-20 pb-32 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-slate-500/20 to-transparent" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-6 text-primary-500/60">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Punya <span className="text-gradient">Aspirasi</span>?
            </h2>
            <p className="text-slate-400 font-light leading-relaxed mb-8 max-w-xl mx-auto">
              Suaramu penting! Sampaikan aspirasi, kritik, dan saran untuk kemajuan HMTI dan lingkungan kampus kita bersama.
            </p>
            <Link
              href="/aspirasi"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary-500 text-primary-500 font-semibold rounded-xl hover:bg-primary-500/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              Sampaikan Aspirasi
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

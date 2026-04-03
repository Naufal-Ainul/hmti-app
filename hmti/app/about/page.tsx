import React from "react";
import Hero from "../../components/hero/Hero";

const About = () => {
  return (
    <main className="min-h-screen bg-black text-slate-200 selection:bg-slate-500/30">
      <Hero title="About Us" />

      {/* About Info Section */}
      <div className="flex flex-col items-center justify-center mt-32 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Glow effect di belakang judul (disesuaikan ke slate) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-slate-500/10 blur-[100px] -z-10"></div>

        <h1 className="sm:text-5xl text-3xl font-extralight mb-12 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600">
          About HMTI
        </h1>

        <div className="max-w-4xl text-center space-y-6 mb-24">
          <p className="text-lg text-slate-300/80 font-light leading-relaxed">
            Himpunan Mahasiswa Teknik Informatika merupakan suatu lembaga
            kemahasiswaan yang berada di lingkup Program Studi Teknik
            Informatika, Fakultas Teknik dan Sains, Universitas Muhammadiyah
            Purwokerto. HMTI FTS UMP didirikan pada tanggal 7 Oktober 2007 dan
            berkedudukan di markas besar HMPS Teknik Informatika Fakultas Teknik
            dan Sains Universitas Muhammadiyah Purwokerto Kampus I Dukuhwaluh.
          </p>
          <p className="text-lg text-slate-300/80 font-light leading-relaxed">
            HMTI UMP memiliki struktur organisasi yang terdiri atas satu Badan
            Pengurus Harian (BPH) dan enam departemen, yaitu Riset dan Teknologi
            (RISTEK), Hubungan Masyarakat (HUMAS), Komunikasi dan Informasi
            (KOMINFO), Pengembangan Sumber Daya Manusia (PSDM), Ekonomi Kreatif
            (EKRAF), serta ADVOKASI.
          </p>
          <p className="text-lg text-slate-300/80 font-light leading-relaxed">
            Masing-masing departemen berperan aktif dalam mendukung kinerja dan
            pencapaian tujuan organisasi.
          </p>
        </div>

        {/* Highlight / Stat Cards Premium (Warna Slate) */}
        <div className="flex flex-wrap items-center justify-center w-full max-w-5xl gap-6 sm:gap-10">
          {/* Card 1 */}
          <div className="group relative flex flex-col items-center justify-center p-10 bg-gradient-to-br from-slate-500/10 to-transparent border border-slate-500/20 rounded-3xl backdrop-blur-md min-w-[240px] flex-1 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-slate-400/30 hover:shadow-[0_0_30px_rgba(100,116,139,0.15)] cursor-default">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-500 mb-3 relative z-10">
              2007
            </h3>
            <p className="text-sm text-slate-400 font-medium tracking-widest uppercase relative z-10">
              Tahun Berdiri
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative flex flex-col items-center justify-center p-10 bg-gradient-to-br from-slate-500/10 to-transparent border border-slate-500/20 rounded-3xl backdrop-blur-md min-w-[240px] flex-1 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-slate-400/30 hover:shadow-[0_0_30px_rgba(100,116,139,0.15)] cursor-default">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-500 mb-3 relative z-10">
              6
            </h3>
            <p className="text-sm text-slate-400 font-medium tracking-widest uppercase relative z-10">
              Departemen
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative flex flex-col items-center justify-center p-10 bg-gradient-to-br from-slate-500/10 to-transparent border border-slate-500/20 rounded-3xl backdrop-blur-md min-w-[240px] flex-1 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-slate-400/30 hover:shadow-[0_0_30px_rgba(100,116,139,0.15)] cursor-default">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-500 mb-3 relative z-10">
              25+
            </h3>
            <p className="text-sm text-slate-400 font-medium tracking-widest uppercase relative z-10">
              Program Kerja
            </p>
          </div>
        </div>
      </div>

      {/* Visi & Misi Section Premium (Warna Slate) */}
      <div className="relative flex flex-col items-center justify-center mt-48 mb-32 px-4 sm:px-6 lg:px-8">
        {/* Glow effect pemisah (disesuaikan ke slate) */}
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>

        <h1 className="sm:text-5xl text-3xl font-extralight mb-20 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600">
          Visi & Misi
        </h1>

        <div className="flex flex-col md:flex-row items-stretch justify-center w-full max-w-7xl gap-8 sm:gap-12">
          {/* Visi Card */}
          <div className="group relative flex flex-col p-12 bg-black/50 border border-slate-500/20 rounded-[2.5rem] backdrop-blur-xl flex-1 transition-all duration-700 hover:border-slate-400/30 hover:bg-[#0a0f16]/80 hover:shadow-xl hover:shadow-slate-500/10">
            {/* Dekorasi sudut */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-slate-500/10 rounded-br-full blur-2xl transition-all duration-700 group-hover:bg-slate-500/20"></div>

            <h3 className="text-4xl font-extralight text-slate-200 mb-8 relative z-10 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-slate-400/40 block"></span>
              Visi
            </h3>
            <p className="text-slate-300/80 font-light leading-relaxed text-lg relative z-10">
              Menjadikan Himpunan Mahasiswa sebagai wadah pengembangan diri yang
              aktif, inklusif, dan progresif untuk seluruh mahasiswa Program
              Studi Teknik Informatika, guna menciptakan lingkungan akademik dan
              non-akademik yang berkualitas, solid, serta berdaya saing.
            </p>
          </div>

          {/* Misi Card */}
          <div className="group relative flex flex-col p-12 bg-black/50 border border-slate-500/20 rounded-[2.5rem] backdrop-blur-xl flex-1 transition-all duration-700 hover:border-slate-400/30 hover:bg-[#0a0f16]/80 hover:shadow-xl hover:shadow-slate-500/10">
            {/* Dekorasi sudut */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-slate-500/10 rounded-tl-full blur-2xl transition-all duration-700 group-hover:bg-slate-500/20"></div>

            <h3 className="text-4xl font-extralight text-slate-200 mb-8 relative z-10 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-slate-400/40 block"></span>
              Misi
            </h3>
            <ul className="text-slate-300/80 font-light leading-relaxed text-lg space-y-4 relative z-10 list-disc list-outside ml-5 marker:text-slate-500">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;

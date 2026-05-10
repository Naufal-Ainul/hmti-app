"use client";

import { use, useState } from "react";

import Header from "./components/Header";
import Description from "./components/Description";
import Gallery from "./components/Gallery";
import ProkerLainnya from "./components/ProkerLainnya";
import Lightbox from "./components/Lightbox";
import { useFetchProker } from "../../../api/proker/useFetchProker";

type proker = {
    id: number;
    dept?: string;
    title?: string;
    desc?: string;
    img?: string;
}

// type prokerDetail = {
//   title: string;
//   desc: string;
//   dept: string;
//   gallery: string[];
// };

// import detailProker from "@/data/detailProker"; // ← lebih bagus dipisah file
// const detailProker: Record<string, any> = {
//   BPH: {
//     title: "Monitoring & Evaluasi",
//     desc: "Evaluasi program internal untuk memastikan kegiatan berjalan efektif.",
//     dept: "BPH",
//     gallery: ["/images/monev.jpg"],
//     goals: ["Evaluasi berkala", "Pendampingan", "Review program"],
//   },
//   RISTEK: {
//     title: "Pelatihan Web Development",
//     desc: "Workshop intensif untuk meningkatkan skill mahasiswa dalam Web Dev.",
//     dept: "RISTEK",
//     gallery: ["/images/webdev.jpg"],
//     goals: ["Frontend", "Backend", "Mini Project"],
//   },
//   HUMAS: {
//     title: "Publikasi & Kemitraan",
//     desc: "Branding dan publikasi official HMTI.",
//     dept: "HUMAS",
//     gallery: ["/images/proker/humas.jpg"],
//     goals: ["Branding", "Media Partner", "Kampanye Publik"],
//   },
//   PSDM: {
//     title: "Pengembangan SDM",
//     desc: "Peningkatan skill dan karakter anggota.",
//     dept: "PSDM",
//     gallery: ["/images/proker/psdm.jpg"],
//     goals: ["Leadership", "Training", "Motivasi"],
//   },
//   EKRAF: {
//     title: "Karya & Merchandise",
//     desc: "Produksi desain dan merchandise resmi HMTI.",
//     dept: "EKRAF",
//     gallery: ["/images/proker/ekraf.jpg"],
//     goals: ["Desain", "Produksi", "Branding"],
//   },
//   KOMINFO: {
//     title: "Media & Dokumentasi",
//     desc: "Pengelolaan konten digital dan dokumentasi kegiatan.",
//     dept: "KOMINFO",
//     gallery: ["/images/proker/kominfo.jpg"],
//     goals: ["Editing", "Konten Media", "Dokumentasi"],
//   },
//   ADVO: {
//     title: "Advokasi Mahasiswa",
//     desc: "Menampung aspirasi mahasiswa terkait kebijakan kampus.",
//     dept: "ADVO",
//     gallery: ["/images/proker/advo.jpg"],
//     goals: ["Aspirasi", "Pendampingan", "Mediasi"],
//   },
// };

export default function Page({ params }: any) {
  const { proker } = useFetchProker();
  const { dept } = use(params);
  const data = proker.find((p: any) => p.dept.toLowerCase() === String(dept).toLowerCase());
  // const data = detailProker[String(dept).toUpperCase()];
  // const [preview, setPreview] = useState<string | null>(null);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold">Proker Tidak Ditemukan ❌</h1>
        <a href="/proker" className="mt-4 px-6 py-3 bg-blue-600 rounded-xl">
          Kembali
        </a>
      </div>
    );
  }

  const otherProker = Object.values(proker)
    .filter((p: any) => p.dept !== data.dept)
    .slice(0, 3);

  return (
    <main className="w-full text-white">

      <section
        className="relative py-32 px-6"
        style={{
          backgroundImage: "url('/images/bg-stars.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-14">

          <Gallery img={data.gallery} />
          
          <Header title={data.title} dept={data.dept} />

          <Description desc={data.desc} />

        </div>
      </section>

      <ProkerLainnya list={otherProker} />

      {/* <Lightbox preview={preview} setPreview={setPreview} /> */}

    </main>
  );
}
"use client";

import { useState, useEffect } from "react";
import Hero from "../../components/hero/Hero";
// import ProkerSection from "../../components/proker/ProkerSection";
import ProkerSection from "./componentsProker/ProkerSection";
import { useFetchProker } from "../../api/proker/useFetchProker";

type ProkerPageProps = {
    proker: any[];
    // dataproker: any[];
    filters: { name: string; icon: string }[];
};

// Data sementara (nanti diganti fetch API/DB)
// const dataProker = [
//   { dept: "BPH", title: "Monitoring & Evaluasi", desc: "Evaluasi program internal BPH.", img: "/images/monev.jpg" },
//   { dept: "RISTEK", title: "Pelatihan Web Development", desc: "Workshop pengembangan website.", img: "/images/webdev.jpg" },
//   { dept: "HUMAS", title: "Publikasi & Kemitraan", desc: "Branding dan komunikasi publik.", img: "/images/proker/humas.jpg" },
//   { dept: "PSDM", title: "Pengembangan SDM", desc: "Pelatihan karakter & skill.", img: "/images/proker/psdm.jpg" },
//   { dept: "EKRAF", title: "Karya & Merchandise", desc: "Produksi kreatif HMTI.", img: "/images/proker/ekraf.jpg" },
//   { dept: "KOMINFO", title: "Media & Dokumentasi", desc: "Konten digital dan dokumentasi.", img: "/images/proker/kominfo.jpg" },
//   { dept: "ADVO", title: "Advokasi Mahasiswa", desc: "Aspirasi dan kebijakan kampus.", img: "/images/proker/advo.jpg" },
// ];

const filters = [
  { name: "SEMUA", icon: "/icons/all.png" },
  { name: "BPH", icon: "/icons/bph.png" },
  { name: "RISTEK", icon: "/icons/ristek.png" },
  { name: "HUMAS", icon: "/icons/humas.png" },
  { name: "PSDM", icon: "/icons/psdm.png" },
  { name: "EKRAF", icon: "/icons/ekraf.png" },
  { name: "KOMINFO", icon: "/icons/kominfo.png" },
  { name: "ADVO", icon: "/icons/advo.png" },
];

export default function ProkerPage() {
    const { proker } = useFetchProker();

  return (
    <main className="w-full">
      <Hero title="Program Kerja" />

      <ProkerSection
        proker={proker}
        filters={filters}
      />
    </main>
  );
}
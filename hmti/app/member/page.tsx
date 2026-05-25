"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "./components/CardMember";
import Hero from "../../components/hero/Hero";
import { Faq } from "../../components/faq/Faq";
import { useFetchMember } from "../../api/member/useFetchMember";

type Member = {
  id: number;
  name: string;
  role: string;
  department: string;
  imageUrl: string;
  instagram?: string;
};

// const members: Member[] = [
//   // ===== BPH =====
//   {
//     id: 1,
//     name: "Deannova Devta Febriansyah",
//     role: "Ketua Himpunan",
//     department: "bph",
//     imageUrl: "/images/members/bph/dean.jpeg",
//     instagram: "https://www.instagram.com/ayedeann",
//   },
//   {
//     id: 2,
//     name: "Muhammad Hafidz Taqiyudin",
//     role: "Wakil Ketua Himpunan",
//     department: "bph",
//     imageUrl: "/images/members/bph/hafidz.jpeg",
//     instagram: "https://www.instagram.com/hafidztaqiyudin",
//   },
//   {
//     id: 3,
//     name: "Shifa Selvira Dhefani Putri",
//     role: "Bendahara I",
//     department: "bph",
//     imageUrl: "/images/members/bph/shifa.jpeg",
//     instagram: "https://www.instagram.com/shifaslvr",
//   },
//   {
//     id: 4,
//     name: "Hana Zahrotun Nisa",
//     role: "Staff Bendahara II",
//     department: "bph",
//     imageUrl: "/images/members/bph/hana.jpeg",
//     instagram: "https://www.instagram.com/hanazahrotunnisa",
//   },
//   {
//     id: 5,
//     name: "Anteng Rahayu",
//     role: "Sekretaris I",
//     department: "bph",
//     imageUrl: "/images/members/bph/rahayu.jpeg",
//     instagram: "https://www.instagram.com/_rahayuarr",
//   },
//   {
//     id: 6,
//     name: "Nacita Diva Rahaningyu",
//     role: "Sekretaris II",
//     department: "bph",
//     imageUrl: "/images/members/bph/nacita.jpeg",
//     instagram: "https://www.instagram.com/nacitadiva_",
//   },

//   // ===== RISTEK =====
//   {
//     id: 10,
//     name: "Siva Azzahra",
//     role: "Kepala Departemen Ristek",
//     department: "ristek",
//     imageUrl: "/images/members/ristek/zara.jpeg",
//     instagram: "https://www.instagram.com/zzhrasv_",
//   },
//   {
//     id: 11,
//     name: "Hilmy Fadhil Ariyanto",
//     role: "Staff Departemen Ristek",
//     department: "ristek",
//     imageUrl: "/images/members/ristek/hilmy.jpeg",
//     instagram: "https://www.instagram.com/hilmyfadhill",
//   },
//   {
//     id: 12,
//     name: "Destra Kartika",
//     role: "Staff Departemen Ristek",
//     department: "ristek",
//     imageUrl: "/images/members/ristek/destra.jpeg",
//     instagram: "https://www.instagram.com/dstraatk_",
//   },
//   {
//     id: 13,
//     name: "Eki Hari Prayitna",
//     role: "Staff Departemen Ristek",
//     department: "ristek",
//     imageUrl: "/images/members/ristek/eki.jpeg",
//     instagram: "https://www.instagram.com/imharryy27",
//   },
//   {
//     id: 14,
//     name: "Muhammad Naufal",
//     role: "Staff Departemen Ristek",
//     department: "ristek",
//     imageUrl: "/images/members/ristek/naufal.jpeg",
//     instagram: "https://www.instagram.com/naufalaa_",
//   },
//   {
//     id: 15,
//     name: "Affan Fajar Maulana",
//     role: "Staff Departemen Ristek",
//     department: "ristek",
//     imageUrl: "/images/members/ristek/affan.jpeg",
//     instagram: "https://www.instagram.com/naomifunn_",
//   },

//   // ===== HUMAS =====
//   {
//     id: 20,
//     name: "Nabilla Fitria Setyawan",
//     role: "Kepala Departemen Humas",
//     department: "humas",
//     imageUrl: "/images/members/humas/nabila.jpeg",
//     instagram: "https://www.instagram.com/nabillafs_",
//   },
//   {
//     id: 21,
//     name: "Agil Rifaldi",
//     role: "Staff Departemen Humas",
//     department: "humas",
//     imageUrl: "/images/members/humas/agil.jpeg",
//     instagram: "https://www.instagram.com/agilrifaldi",
//   },
//   {
//     id: 22,
//     name: "Gagas Alfan Fuadi",
//     role: "Staff Departemen Humas",
//     department: "humas",
//     imageUrl: "/images/members/humas/gagas.jpeg",
//     instagram: "https://www.instagram.com/gagassssaf",
//   },
//   {
//     id: 23,
//     name: "Deska Febi Rosiana",
//     role: "Staff Departemen Humas",
//     department: "humas",
//     imageUrl: "/images/members/humas/deska.jpeg",
//     instagram: "https://www.instagram.com/dsskaafbiiii",
//   },
//   {
//     id: 24,
//     name: "Isnaeni Rahayu Ahadiah",
//     role: "Staff Departemen Humas",
//     department: "humas",
//     imageUrl: "/images/members/humas/isnaeni.jpeg",
//     instagram: "https://www.instagram.com/isnaenirhayu",
//   },
//   {
//     id: 25,
//     name: "Lulu Wafiq Azizah",
//     role: "Staff Departemen Humas",
//     department: "humas",
//     imageUrl: "/images/members/humas/lulu.jpeg",
//     instagram: "https://www.instagram.com/luluwafiq",
//   },

//   // ===== PSDM =====
//   {
//     id: 30,
//     name: "Nandiaz Ezar Saputra",
//     role: "Kepala Departemen PSDM",
//     department: "psdm",
//     imageUrl: "/images/members/psdm/nandiaz.jpeg",
//     instagram: "https://www.instagram.com/nanndz_11",
//   },
//   {
//     id: 31,
//     name: "Faris Afkhan Humam",
//     role: "Staff Departemen PSDM",
//     department: "psdm",
//     imageUrl: "/images/members/psdm/faris.jpeg",
//     instagram: "https://www.instagram.com/faryznafkhan",
//   },
//   {
//     id: 32,
//     name: "Khama Putra Pambudi",
//     role: "Staff Departemen PSDM",
//     department: "psdm",
//     imageUrl: "/images/members/psdm/khamaputra.jpeg",
//     instagram: "https://www.instagram.com/khamaputra",
//   },
//   {
//     id: 33,
//     name: "Faizan Nasywa As Zidny",
//     role: "Staff Departemen PSDM",
//     department: "psdm",
//     imageUrl: "/images/members/psdm/faizan.jpeg",
//     instagram: "https://www.instagram.com/faizannasywa",
//   },
//   {
//     id: 34,
//     name: "Shifa Nur Amalia",
//     role: "Staff Departemen PSDM",
//     department: "psdm",
//     imageUrl: "/images/members/psdm/shifa.jpeg",
//     instagram: "https://www.instagram.com/sshfmlaa_",
//   },
//   {
//     id: 35,
//     name: "Devina Dwi Ameli",
//     role: "Staff Departemen PSDM",
//     department: "psdm",
//     imageUrl: "/images/members/psdm/devina.jpeg",
//     instagram: "https://www.instagram.com/ddevinnaaaa",
//   },
//   {
//     id: 36,
//     name: "Whisnu Adi Baskoro",
//     role: "Staff Departemen PSDM",
//     department: "psdm",
//     imageUrl: "/images/members/psdm/whisnu.jpeg",
//     instagram: "https://www.instagram.com/whisnuadii",
//   },

//   // ===== EKRAF =====
//   {
//     id: 40,
//     name: "Orrelia Chana Intan Atha",
//     role: "Kepala Departemen Ekraf",
//     department: "ekraf",
//     imageUrl: "/images/members/ekraf/orrelia.jpeg",
//     instagram: "https://www.instagram.com/murtiddewi",
//   },
//   {
//     id: 41,
//     name: "Fransiska Putri Sukirno",
//     role: "Staff Departemen Ekraf",
//     department: "ekraf",
//     imageUrl: "/images/members/ekraf/fransiska.jpeg",
//     instagram: "https://www.instagram.com/fransiskaputri",
//   },
//   {
//     id: 42,
//     name: "Pradipta Ayudya Utami",
//     role: "Staff Departemen Ekraf",
//     department: "ekraf",
//     imageUrl: "/images/members/ekraf/pradipta.jpeg",
//     instagram: "https://www.instagram.com/pradiptaayudya",
//   },
//   {
//     id: 43,
//     name: "Murti Sari Dewi",
//     role: "Staff Departemen Ekraf",
//     department: "ekraf",
//     imageUrl: "/images/members/ekraf/murti.jpeg",
//     instagram: "https://www.instagram.com/murtiddewi",
//   },
//   {
//     id: 44,
//     name: "Rifki Virgiawan Surya Bakry",
//     role: "Staff Departemen Ekraf",
//     department: "ekraf",
//     imageUrl: "/images/members/ekraf/rifki.jpeg",
//     instagram: "https://www.instagram.com/rifkivirgi",
//   },
//   {
//     id: 45,
//     name: "Thariq Raihan Arrobi",
//     role: "Staff Departemen Ekraf",
//     department: "ekraf",
//     imageUrl: "/images/members/ekraf/thariq.jpeg",
//     instagram: "https://www.instagram.com/thariqraihan",
//   },

//   // ===== KOMINFO =====
//   {
//     id: 50,
//     name: "Bondan Pratama Firdaus",
//     role: "Kepala Departemen Kominfo",
//     department: "kominfo",
//     imageUrl: "/images/members/kominfo/bondan.jpeg",
//     instagram: "https://www.instagram.com/gestapiee",
//   },
//   {
//     id: 51,
//     name: "Galih Pramudya",
//     role: "Staff Departemen Kominfo",
//     department: "kominfo",
//     imageUrl: "/images/members/kominfo/galih.jpeg",
//     instagram: "https://www.instagram.com/galihpramudya",
//   },
//   {
//     id: 52,
//     name: "Wanda Hamidah",
//     role: "Staff Departemen Kominfo",
//     department: "kominfo",
//     imageUrl: "/images/members/kominfo/wanda.jpeg",
//     instagram: "https://www.instagram.com/wandahamidah",
//   },
//   {
//     id: 53,
//     name: "Arlint Gesta Faradila",
//     role: "Staff Departemen Kominfo",
//     department: "kominfo",
//     imageUrl: "/images/members/kominfo/arlin.jpeg",
//     instagram: "https://www.instagram.com/gestapiee",
//   },

//   // ===== ADVOKASI =====
//   {
//     id: 60,
//     name: "Dimas Qolby Aljauza",
//     role: "Kepala Departemen Advokasi",
//     department: "advokasi",
//     imageUrl: "/images/members/advokasi/dimas.jpeg",
//     instagram: "https://www.instagram.com/dimqo_",
//   },
//   {
//     id: 61,
//     name: "Fiona Aulia Wijaya",
//     role: "Staff Departemen Advokasi",
//     department: "advokasi",
//     imageUrl: "/images/members/advokasi/fiona.jpeg",
//     instagram: "https://www.instagram.com/fionaaulia714",
//   },
//   {
//     id: 62,
//     name: "Dias Wahyu Widayati",
//     role: "Staff Departemen Advokasi",
//     department: "advokasi",
//     imageUrl: "/images/members/advokasi/dias.jpeg",
//     instagram: "https://www.instagram.com/diiaaaassss_",
//   },
//   {
//     id: 63,
//     name: "Aditya Resya Saputra",
//     role: "Staff Departemen Advokasi",
//     department: "advokasi",
//     imageUrl: "/images/members/advokasi/adit.jpeg",
//     instagram: "https://www.instagram.com/dityaresyaa",
//   },
//   {
//     id: 64,
//     name: "Abhista Khalfani Yogananda",
//     role: "Staff Departemen Advokasi",
//     department: "advokasi",
//     imageUrl: "/images/members/advokasi/abhista.jpeg",
//     instagram: "https://www.instagram.com/abhista_khalfani",
//   },
//   {
//     id: 65,
//     name: "Amri Abdillah",
//     role: "Staff Departemen Advokasi",
//     department: "advokasi",
//     imageUrl: "/images/members/advokasi/amri.jpeg",
//     instagram: "https://www.instagram.com/amriabdillah",
//   },
// ];

const departments = [
  { key: "BPH", label: "BPH", logo: "/images/departments/bph.png" },
  { key: "ristek", label: "Ristek", logo: "/images/departments/ristek.png" },
  { key: "humas", label: "Humas", logo: "/images/departments/humas.png" },
  { key: "psdm", label: "PSDM", logo: "/images/departments/psdm.png" },
  { key: "ekraf", label: "Ekraf", logo: "/images/departments/ekraf.png" },
  { key: "kominfo", label: "Kominfo", logo: "/images/departments/kominfo.png" },
  { key: "advokasi", label: "Advokasi", logo: "/images/departments/advokasi.png" },
];



export default function MemberPage() {
  const [activeDepartment, setActiveDepartment] = useState("BPH");
  const { members } = useFetchMember(activeDepartment);

  // const filteredMembers = members.filter(
  //   (member) => member.department === activeDept
  // );

  return (
    <div className="w-full min-h-screen bg-black px-6 py-10">
      <Hero title="Member HMTI" />

      {/* EXPLORE */}
      <div className="text-center mt-12">
        <h2 className="text-xl font-semibold mb-4 text-white">
          <span className="text-blue-400">Eksplore</span> Our Department
        </h2>

        <div className="bg-blue-600 rounded-xl p-6 flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {departments.map((dept) => (
            <button
              key={dept.key}
              onClick={() => setActiveDepartment(dept.key)}
              className={`flex flex-col items-center justify-center w-24 h-24 rounded-lg transition ${
                activeDepartment === dept.key
                  ? "bg-black text-white scale-105"
                  : "bg-gradient text-white hover:scale-105"
              }`}
            >
              <Image src={dept.logo} alt={dept.label} width={40} height={40} />
              <span className="text-sm font-medium">{dept.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* MEMBERS */}
      <div className="mt-16">
        <h2 className="text-center text-xl font-semibold mb-10 text-white">
          Members
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {members.map((member) => (
            <Card
              key={member.id}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              instagram={member.instagram}
            />
          ))}
        </div>
      </div>

      <Faq />
    </div>
  );
}
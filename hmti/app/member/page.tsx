"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "./components/CardMember";
import Hero from "../../components/hero/Hero";
import { Button } from "../../components/ui/Button";
import { useFetchMember } from "../../api/member/useFetchMember";
import { motion, AnimatePresence } from "motion/react";

type Member = {
  id: number;
  name: string;
  role: string;
  department: string;
  imageUrl: string;
  instagram?: string;
};

const departments = [
  { key: "", label: "SEMUA", logo: null },
  { key: "bph", label: "BPH", logo: null },
  { key: "ristek", label: "RISTEK", logo: "/icons/ristek.png" },
  { key: "humas", label: "HUMAS", logo: "/icons/humas.png" },
  { key: "psdm", label: "PSDM", logo: "/icons/psdm.png" },
  { key: "ekraf", label: "EKRAF", logo: "/icons/ekraf.png" },
  { key: "kominfo", label: "KOMINFO", logo: "/icons/kominfo.png" },
  { key: "advokasi", label: "ADVO", logo: "/icons/advo.png" },
];

export default function MemberPage() {
  const [activeDepartment, setActiveDepartment] = useState("");
  const { members } = useFetchMember(activeDepartment);

  return (
    <div className="w-full min-h-screen bg-black">
      <Hero title="Member HMTI" />

      {/* EXPLORE */}
      <div className="text-center py-10 sm:py-16 px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white tracking-tight"
        >
          <span className="text-gradient">
            Eksplore
          </span>{" "}
          Our Department
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 text-sm md:text-base mb-8 sm:mb-10 tracking-wider uppercase font-medium"
        >
          Pilih departemen untuk melihat anggota
        </motion.p>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto px-2"
        >
          {departments.map((dept) => (
            <Button
              key={dept.key === "" ? "semua" : dept.key}
              onClick={() => setActiveDepartment(dept.key)}
              variant={activeDepartment === dept.key ? "primary" : "secondary"}
              className="rounded-full px-4 sm:px-6 py-2 sm:py-2.5 font-bold tracking-widest text-xs sm:text-sm"
              leftIcon={
                dept.logo ? (
                  <Image
                    src={dept.logo}
                    alt={dept.label}
                    width={20}
                    height={20}
                    className={activeDepartment === dept.key ? "brightness-125" : "brightness-75 grayscale"}
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={activeDepartment === dept.key ? "text-white" : "text-slate-400"}
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                  </svg>
                )
              }
            >
              {dept.label}
            </Button>
          ))}
        </motion.div>
      </div>

      {/* MEMBERS */}
      <div className="mt-8 sm:mt-16 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 text-white"
        >
          <span className="text-gradient">
            Members
          </span>
        </motion.h2>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center"
        >
          <AnimatePresence mode="popLayout">
            {members.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full flex justify-center"
              >
                <Card
                  name={member.name}
                  role={member.role}
                  imageUrl={member.imageUrl}
                  instagram={member.instagram}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="h-24 sm:h-32"></div>
    </div>
  );
}
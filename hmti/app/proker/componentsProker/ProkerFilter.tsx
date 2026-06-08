"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiGrid, FiUsers, FiCpu, FiGlobe, FiUserCheck, FiShoppingBag, FiTv, FiShield } from "react-icons/fi";

type ProkerFilterProps = {
  filters: { name: string; icon: string }[];
  active: string;
  setFilter: (name: string) => void;
  resetVisible: () => void;
};

const iconMap: Record<string, any> = {
  SEMUA: FiGrid,
  BPH: FiUsers,
  RISTEK: FiCpu,
  HUMAS: FiGlobe,
  PSDM: FiUserCheck,
  EKRAF: FiShoppingBag,
  KOMINFO: FiTv,
  ADVO: FiShield,
};

function DeptIcon({ name, src }: { name: string; src: string }) {
  const [hasError, setHasError] = useState(false);
  const IconComponent = iconMap[name] || FiGrid;

  if (hasError || !src) {
    return <IconComponent className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />;
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setHasError(true)}
      className="w-5 h-5 object-contain"
    />
  );
}

export default function ProkerFilter(props: ProkerFilterProps) {
  const { filters, active, setFilter, resetVisible } = props;

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 relative z-10 max-w-4xl mx-auto px-4">
      {filters.map((item) => {
        const isActive = active === item.name;
        
        return (
          <motion.button
            key={item.name}
            onClick={() => {
              setFilter(item.name);
              resetVisible();
            }}
            whileTap={{ scale: 0.95 }}
            className={`
              flex items-center gap-2.5 px-5 py-2.5 rounded-full font-semibold text-sm
              transition-colors duration-300 relative group cursor-pointer
              ${isActive
                ? "text-white shadow-lg shadow-blue-500/20"
                : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"}
            `}
          >
            {isActive && (
              <motion.span
                layoutId="activeFilterBg"
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 border border-blue-400/30 rounded-full z-0"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            
            <span className="relative z-10 flex items-center gap-2.5">
              <DeptIcon name={item.name} src={item.icon} />
              {item.name}
            </span>
          </motion.button>
        );
      })}
      
      {/* Global Bottom Glow Line (Garis menyala di bagian bawah container) */}
      <span className="absolute inset-x-0 w-2/3 mx-auto -bottom-4 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px pointer-events-none" />
    </div>
  );
}
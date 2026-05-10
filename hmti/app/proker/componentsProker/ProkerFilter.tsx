"use client";

import { motion } from "framer-motion";

type ProkerFilterProps = {
  filters: { name: string; icon: string }[];
  active: string;
  setFilter: (name: string) => void;
  resetVisible: () => void;
};

export default function ProkerFilter(props: ProkerFilterProps) {
  const { filters, active, setFilter, resetVisible } = props;

  return (
    <div className="flex flex-wrap justify-center gap-5 mb-14">
      {filters.map((item) => (
        <motion.button
          key={item.name}
          onClick={() => {
            setFilter(item.name);
            resetVisible();
          }}
          whileTap={{ scale: 0.92 }}
          className={`
            flex items-center gap-3 px-7 py-3 rounded-full font-semibold
            transition-all duration-300 relative
            ${active === item.name
              ? "bg-blue-600 text-white scale-110 shadow-lg"
              : "bg-white/10 text-blue-300 border border-white/20 hover:bg-white/20 hover:scale-105"}
          `}
        >
          <span className="flex items-center gap-3">
            <img src={item.icon} alt={item.name} className="w-7 h-7" />
            {item.name}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
"use client";

import { motion } from "framer-motion";

type proker = {
  id: number;
  dept?: string;
  title?: string;
  desc?: string;
  img?: string;
}

export default function ProkerLainnya({ list }: any) {
  return (
    <section className="bg-zinc-950 py-20 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">

        <div className="mb-10 md:mb-12 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="w-1 h-5 bg-zinc-500 rounded-sm"></span>
            Program Kerja Lainnya
          </h2>
          <div className="h-px bg-zinc-900 flex-1 ml-6 hidden sm:block"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {list.map((proke: proker) => {
            const imgSrc = proke.img && proke.img.trim() !== "" && proke.img !== "-"
              ? proke.img
              : "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop";

            return (
              <a
                key={proke.id}
                href={`/proker/${proke.id}`}
                className="group block bg-[#0c0c0e]/45 border border-zinc-900/80 hover:border-zinc-800 p-3 rounded-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-zinc-950">
                  <img
                    src={imgSrc}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    alt={proke.title}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 bg-zinc-950/80 backdrop-blur-md text-[9px] font-bold tracking-widest text-zinc-400 uppercase rounded border border-zinc-800">
                      {proke.dept}
                    </span>
                  </div>
                </div>

                <div className="mt-4 px-1 pb-2">
                  <h3 className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors duration-200 line-clamp-1">
                    {proke.title}
                  </h3>
                  
                  <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200">
                    <span>Lihat Rincian</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
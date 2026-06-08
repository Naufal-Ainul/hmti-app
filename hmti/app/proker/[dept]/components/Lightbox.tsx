"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Lightbox({ preview, setPreview }: any) {
  return (
    <AnimatePresence>
      {preview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[999] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setPreview(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative max-w-4xl w-full bg-[#0c0c0e] rounded-xl overflow-hidden shadow-2xl border border-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-2 sm:p-3 bg-zinc-950 flex justify-center items-center">
              <img src={preview} className="max-w-full max-h-[70vh] object-contain rounded-lg" alt="Preview" />
            </div>

            <div className="w-full bg-[#0c0c0e] p-4 flex justify-between items-center border-t border-zinc-900 gap-4">
              <button
                onClick={() => setPreview(null)}
                className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-800 transition duration-200 text-xs sm:text-sm font-medium"
              >
                Tutup
              </button>

              <a
                href={preview}
                download
                className="px-4 py-2 bg-zinc-100 hover:bg-white text-zinc-950 rounded-lg font-medium transition duration-200 text-xs sm:text-sm flex items-center gap-1.5"
              >
                <span>Unduh Gambar</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
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
          className="fixed inset-0 bg-black/70 backdrop-blur-lg z-[999]
          flex items-center justify-center p-6"
          onClick={() => setPreview(null)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            className="relative max-w-3xl w-full bg-black rounded-2xl
            overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={preview} className="w-full max-h-[80vh] object-contain" />

            <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur 
            p-4 flex justify-between items-center border-t border-white/10">
              <button
                onClick={() => setPreview(null)}
                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20"
              >
                Tutup ✕
              </button>

              <a
                href={preview}
                download
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
              >
                Download ⬇
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
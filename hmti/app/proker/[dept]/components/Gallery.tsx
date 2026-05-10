"use client";

import Image from "next/image";

// import { motion } from "framer-motion";
//{ images, setPreview }: any

type GalleryProps = {
    img: string;
};

export default function Gallery({ img }: GalleryProps) {
  return (
    <div className="">
        <Image 
            src={img}
            alt="Foto Proker"
            width={200}
            height={200}
            className="w-full h-100 rounded-lg object-cover border border-white/20 shadow-lg"
        />
      {/* <h2 className="text-2xl font-bold mb-5">Galeri Program</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {images.map((img: string, index: number) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.07 }}
            className="rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-white/10 backdrop-blur shadow-lg"
            onClick={() => setPreview(img)}
          >
            <img src={img} className="w-full h-40 object-cover" />
          </motion.div>
        ))}
      </div> */}
    </div>
  );
}
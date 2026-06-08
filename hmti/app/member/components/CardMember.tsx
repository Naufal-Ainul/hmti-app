"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

type CardProps = {
  name: string;
  role: string;
  imageUrl: string;
  instagram?: string;
};

const CardMember = ({ name, role, imageUrl, instagram }: CardProps) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (divRef.current) {
      const bounds = divRef.current.getBoundingClientRect();
      setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    }
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-full max-w-[320px] aspect-[4/5] glass-panel overflow-hidden cursor-pointer shadow-2xl transition-all duration-300 hover:shadow-primary-500/20 hover:-translate-y-1 group"
    >
      {/* EFFECT */}
      <div
        className={`pointer-events-none blur-3xl rounded-full bg-primary-500/40 size-64 absolute z-0 transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: position.y - 128, left: position.x - 128 }}
      />

      {/* CONTENT */}
      <div className="relative z-10 bg-slate-900/50 p-6 h-full w-full rounded-[15px] flex flex-col items-center justify-center text-center">
        
        {/* IMAGE */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full group-hover:bg-primary-500/40 transition-colors duration-500"></div>
          <Image
            src={imageUrl}
            alt={name}
            width={120}
            height={120}
            className="relative size-32 object-cover rounded-full shadow-lg border-2 border-slate-700/50 group-hover:border-primary-500/50 transition-colors duration-300 mb-4"
          />
        </div>

        {/* NAME */}
        <h2 className="text-xl font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors duration-300">
          {name}
        </h2>

        {/* ROLE */}
        <p className="text-sm text-slate-400 font-medium mb-4">
          {role}
        </p>

        {/* LINE */}
        <div className="w-16 h-[1px] bg-linear-to-r from-transparent via-slate-700 to-transparent mb-6"></div>

        {/* INSTAGRAM */}
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300 group/icon"
            aria-label={`Instagram ${name}`}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border-2 border-slate-700 transition-colors group-hover/icon:border-primary-500 group-hover/icon:bg-primary-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="text-slate-400 group-hover/icon:text-primary-400 transition-colors"
                viewBox="0 0 448 512"
              >
                {/* Path Ikon Instagram yang Benar */}
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default CardMember;
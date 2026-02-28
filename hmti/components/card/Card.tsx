"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

type CardProps = {
  name: string;
  role: string;
  imageUrl: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
};

const Card = (props: CardProps) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  const { name, role, imageUrl, instagram, github, linkedin } = props;

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
      className="relative w-80 h-96 rounded-xl p-px bg-black backdrop-blur-lg text-gray-800 overflow-hidden cursor-pointer shadow-xl shadow-slate-500/25"
    >
      <div
        className={`pointer-events-none blur-3xl rounded-full bg-linear-to-r from-black via-slate-500/75 to-slate-500 size-60 absolute z-0 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ top: position.y - 120, left: position.x - 120 }}
      />

      <div className="relative z-10 bg-linear-to-br from-slate-500/50 via-black to-slate-500/75 p-6 h-full w-full rounded-[11px] flex flex-col items-center justify-center text-center">
        <Image
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
          className="aspect-square object-cover rounded-full shadow-md my-4"
        />
        <h2 className="text-xl text-slate-200/75 mb-1">{name}</h2>
        <p className="text-sm text-slate-200 mask-b-from-10% font-medium mb-4">{role}</p>
        {/* <p className="text-sm text-slate-400 mb-4 px-4">{bio}</p> */}
        <div className="absolute mt-50 w-30 h-px m-px bg-linear-to-r from-transparent via-slate-200/75 to-transparent"></div>
        <div className="flex space-x-4 mb-4 text-xl text-slate-400 mt-10">
          <Link
            href={instagram || "#"}
            target="_blank"
            rel = "noopener noreferrer"
            className="hover:-translate-y-0.5 transition"
          >
            <svg
              className="size-7"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path
                fillRule="evenodd"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            href={github || "#"}
            target="_blank"
            rel = "noopener noreferrer"
            className="hover:-translate-y-0.5 transition"
          >
            <svg
              className="size-7"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            href={linkedin || "#"}
            target="_blank"
            rel = "noopener noreferrer"
            className="hover:-translate-y-0.5 transition"
          >
            <svg
              className="size-7"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clipRule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

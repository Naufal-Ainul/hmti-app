"use client";

type GalleryProps = {
  img?: string;
  onImageClick?: (url: string) => void;
};

export default function Gallery({ img, onImageClick }: GalleryProps) {
  const imgSrc = img && img.trim() !== "" && img !== "-"
    ? img
    : "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop";

  return (
    <div 
      className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px] overflow-hidden rounded-lg bg-zinc-950/60 flex items-center justify-center cursor-pointer group"
      onClick={() => onImageClick && onImageClick(imgSrc)}
    >
      <img 
        src={imgSrc}
        alt="Dokumentasi Program Kerja"
        className="w-full h-full object-contain transition-all duration-500 ease-out group-hover:scale-[1.015]"
      />
      
      {/* Editorial overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 bg-zinc-900/90 border border-zinc-800 backdrop-blur-md rounded-full text-[11px] font-semibold tracking-widest text-zinc-300 uppercase shadow-lg flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
          </svg>
          Perbesar Foto
        </div>
      </div>
    </div>
  );
}
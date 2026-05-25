"use client";

type GalleryProps = {
    img?: string;
};

export default function Gallery({ img }: GalleryProps) {
  const imgSrc = img && img.trim() !== "" && img !== "-"
    ? img
    : "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop";

  return (
    <div className="w-full">
        <img 
            src={imgSrc}
            alt="Foto Proker"
            className="w-full h-[400px] rounded-2xl object-cover border border-white/10 shadow-2xl transition duration-500 hover:brightness-110"
        />
    </div>
  );
}
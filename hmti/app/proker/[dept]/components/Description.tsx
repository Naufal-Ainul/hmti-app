export default function Description({ desc }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2.5">
        <span className="w-1 h-4 bg-zinc-500 rounded-sm"></span>
        Deskripsi Program
      </h2>
      <p className="text-zinc-400 leading-relaxed text-base whitespace-pre-line text-justify select-text">
        {desc}
      </p>
    </div>
  );
}
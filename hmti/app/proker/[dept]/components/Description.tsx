export default function Description({ desc }: any) {
  return (
    <div className="bg-white/5 p-8 rounded-2xl shadow-lg backdrop-blur border border-white/10">
      <h2 className="text-2xl font-bold mb-2">Deskripsi Program</h2>
      <p className="text-gray-300 leading-relaxed">{desc}</p>
    </div>
  );
}
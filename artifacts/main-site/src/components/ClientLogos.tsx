const clients = ["TechHub Kenya", "Digital Wave", "CloudBase", "InnovateTech", "DataSync", "NetWorks", "ByteForge", "CodeCraft", "PixelPerfect", "WebFlow Africa", "SmartSolutions", "DevHouse KE"];
const ClientLogos = () => (
  <section className="py-8 bg-white overflow-hidden"><p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">Trusted by leading businesses</p>
    <div className="relative"><div className="flex animate-scroll-logos gap-8">{[...clients, ...clients].map((c, i) => <div key={i} className="flex-shrink-0 px-5 py-2.5 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-3"><div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-violet-500 flex items-center justify-center text-white font-bold text-xs">{c.charAt(0)}</div><span className="font-medium text-sm text-gray-600 whitespace-nowrap">{c}</span></div>)}</div></div>
    <style>{`@keyframes scroll-logos{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.animate-scroll-logos{animation:scroll-logos 30s linear infinite}.animate-scroll-logos:hover{animation-play-state:paused}`}</style>
  </section>
);
export default ClientLogos;

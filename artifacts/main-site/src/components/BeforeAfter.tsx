import { useState } from "react";
const BeforeAfter = () => {
  const [s, setS] = useState(50);
  const projects = [{ title: "Business Website", before: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", after: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80" }, { title: "E-commerce Platform", before: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", after: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&q=80" }];
  const [a, setA] = useState(0);
  return (
    <section className="py-20"><div className="container mx-auto px-6">
      <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">Before & After</h2>
      <p className="mx-auto mb-12 max-w-xl text-center text-gray-500">See the transformations we've delivered</p>
      <div className="max-w-3xl mx-auto">
        <div className="flex gap-3 mb-6 justify-center">{projects.map((p, i) => <button key={i} onClick={() => { setA(i); setS(50); }} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${a === i ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{p.title}</button>)}</div>
        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-gray-100">
          <img src={projects[a].after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${s}%` }}><img src={projects[a].before} alt="Before" className="w-full h-full object-cover" style={{ minWidth: `${100 / (s / 100)}%` }} /></div>
          <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg" style={{ left: `${s}%`, transform: 'translateX(-50%)' }}><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center font-bold text-xs text-gray-600">⇔</div></div>
          <input type="range" min="0" max="100" value={s} onChange={(e) => setS(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
          <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">Before</span>
          <span className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">After</span>
        </div>
      </div>
    </div></section>
  );
};
export default BeforeAfter;

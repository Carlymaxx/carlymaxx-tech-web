import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
const CountdownTimer = () => {
  const [end] = useState(() => { const d = new Date(); d.setDate(d.getDate() + 2); d.setHours(23, 59, 59); return d; });
  const [tl, setTl] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => { const t = setInterval(() => { const r = end.getTime() - Date.now(); if (r > 0) setTl({ d: Math.floor(r/864e5), h: Math.floor(r%864e5/36e5), m: Math.floor(r%36e5/6e4), s: Math.floor(r%6e4/1e3) }); }, 1000); return () => clearInterval(t); }, [end]);
  return (
    <section className="py-12 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 animate-gradient-shift text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4"><Clock className="h-6 w-6 animate-pulse" /><h2 className="font-display text-2xl md:text-3xl font-bold tracking-wider">LIMITED TIME OFFER</h2></div>
        <p className="text-white/90 mb-6 max-w-lg mx-auto">Bot Deployment at just <span className="font-bold text-xl">50 KES</span>! This price won't last forever.</p>
        <div className="flex justify-center gap-3 md:gap-4 mb-8">
          {[{ v: tl.d, l: "Days" }, { v: tl.h, l: "Hours" }, { v: tl.m, l: "Mins" }, { v: tl.s, l: "Secs" }].map((i) => (
            <div key={i.l} className="bg-white/20 backdrop-blur rounded-xl p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
              <div className="font-display text-2xl md:text-4xl font-bold">{String(i.v).padStart(2, '0')}</div>
              <div className="text-xs text-white/80 mt-1">{i.l}</div>
            </div>
          ))}
        </div>
        <a href="https://wa.me/254725979273?text=Hey%20Maxx%20I%20want%20the%20deal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-white/90 transition-all">Claim This Deal Now</a>
      </div>
    </section>
  );
};
export default CountdownTimer;

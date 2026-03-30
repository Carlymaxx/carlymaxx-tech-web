import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
const actions = [{ n: "Brian K.", a: "just ordered Bot Deployment", t: "2 mins ago", l: "Nairobi" }, { n: "Amina W.", a: "purchased YouTube Boosting", t: "5 mins ago", l: "Mombasa" }, { n: "James M.", a: "ordered Web Design", t: "8 mins ago", l: "Kisumu" }, { n: "Lucy N.", a: "got Account Security", t: "12 mins ago", l: "Nakuru" }, { n: "David O.", a: "ordered TikTok Boosting", t: "15 mins ago", l: "Eldoret" }, { n: "Sarah K.", a: "purchased Bot Deployment", t: "20 mins ago", l: "Thika" }, { n: "Peter M.", a: "ordered Custom API", t: "25 mins ago", l: "Ruiru" }, { n: "Faith W.", a: "got YouTube Boosting", t: "30 mins ago", l: "Nyeri" }];
const SocialProof = () => {
  const [c, setC] = useState(0); const [v, setV] = useState(true);
  useEffect(() => { const i = setInterval(() => { setV(false); setTimeout(() => { setC(p => (p + 1) % actions.length); setV(true); }, 500); }, 5000); return () => clearInterval(i); }, []);
  const it = actions[c];
  return (<div className={`fixed bottom-24 left-6 z-40 transition-all duration-500 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}><div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 max-w-xs flex items-start gap-3"><div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0"><ShoppingCart className="h-5 w-5 text-emerald-600" /></div><div><p className="text-sm font-medium text-gray-800"><span className="font-bold">{it.n}</span> {it.a}</p><p className="text-xs text-gray-400 mt-0.5">{it.l} • {it.t}</p></div></div></div>);
};
export default SocialProof;

import { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";
const services = [{ n: "WhatsApp Bot (Basic)", p: 50 }, { n: "WhatsApp Bot (Advanced)", p: 200 }, { n: "Website (Landing Page)", p: 500 }, { n: "Website (Full Site)", p: 2000 }, { n: "YouTube Boosting", p: 260 }, { n: "TikTok Boosting", p: 120 }, { n: "Account Security", p: 440 }, { n: "Custom API", p: 1500 }];
const PricingCalculator = () => {
  const [sel, setSel] = useState<string[]>([]);
  const toggle = (n: string) => setSel(p => p.includes(n) ? p.filter(x => x !== n) : [...p, n]);
  const total = services.filter(s => sel.includes(s.n)).reduce((s, x) => s + x.p, 0);
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-violet-50"><div className="container mx-auto px-6"><div className="max-w-3xl mx-auto">
      <div className="text-center mb-12"><div className="flex items-center justify-center gap-2 mb-4"><Calculator className="h-8 w-8 text-emerald-600" /><h2 className="font-display text-3xl md:text-4xl font-bold tracking-wider gradient-text">Pricing Calculator</h2></div><p className="text-gray-500">Select services and get an instant estimate</p></div>
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8">
        <div className="grid gap-3 mb-8">{services.map((s) => <button key={s.n} onClick={() => toggle(s.n)} className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left ${sel.includes(s.n) ? 'border-emerald-500 bg-emerald-50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}><div className="flex items-center gap-3"><div className={`h-5 w-5 rounded border-2 flex items-center justify-center ${sel.includes(s.n) ? 'border-emerald-500 bg-emerald-500' : 'border-gray-300'}`}>{sel.includes(s.n) && <span className="text-white text-xs">✓</span>}</div><span className="font-medium text-sm">{s.n}</span></div><span className={`font-bold text-sm ${sel.includes(s.n) ? 'text-emerald-600' : 'text-gray-400'}`}>{s.p} KES</span></button>)}</div>
        <div className="border-t border-gray-100 pt-6"><div className="flex items-center justify-between mb-4"><span className="text-lg font-semibold">Estimated Total</span><span className="font-display text-3xl font-bold text-emerald-600">{total.toLocaleString()} KES</span></div>{total > 0 && <a href={`https://wa.me/254725979273?text=I%20need%20these%20services%20-%20Total%20${total}%20KES`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors">Order Now <ArrowRight className="h-4 w-4" /></a>}</div>
      </div>
    </div></div></section>
  );
};
export default PricingCalculator;

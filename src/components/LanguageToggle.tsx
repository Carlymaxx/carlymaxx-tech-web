import { useState } from "react";
import { Globe } from "lucide-react";
const LanguageToggle = () => {
  const [lang, setLang] = useState("en"); const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-20 right-6 z-50">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 bg-white border border-gray-200 shadow-lg px-3 py-2 rounded-full text-sm font-medium hover:border-emerald-400 transition-colors"><Globe className="h-4 w-4 text-emerald-600" /><span className="uppercase font-bold text-xs">{lang}</span></button>
      {open && <div className="absolute top-12 right-0 bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden"><button onClick={() => { setLang("en"); setOpen(false); }} className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-emerald-50 ${lang === 'en' ? 'bg-emerald-50 font-bold' : ''}`}>English</button><button onClick={() => { setLang("sw"); setOpen(false); }} className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-emerald-50 ${lang === 'sw' ? 'bg-emerald-50 font-bold' : ''}`}>Kiswahili</button></div>}
    </div>
  );
};
export default LanguageToggle;

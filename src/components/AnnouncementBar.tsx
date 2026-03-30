import { useState } from "react";
import { X, Sparkles } from "lucide-react";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 text-white py-2.5 px-4 text-center text-sm font-medium animate-gradient-shift">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4 animate-pulse" />
        <span>🔥 MAXX-XMD Bot now available! Deploy in 2-3 minutes — <a href="https://pair.maxxtech.co.ke" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-yellow-200">Get Session ID</a></span>
        <button onClick={() => setVisible(false)} className="absolute right-4 hover:bg-white/20 rounded-full p-0.5"><X className="h-4 w-4" /></button>
      </div>
    </div>
  );
};
export default AnnouncementBar;

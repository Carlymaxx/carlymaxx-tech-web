import { useState, useEffect } from "react";
import { Gift, X, Share2 } from "lucide-react";
const ReferralPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    if (dismissed) return;
    const t = setTimeout(() => setShow(true), 15000);
    return () => clearTimeout(t);
  }, [dismissed]);
  if (!show || dismissed) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setDismissed(true)}>
      <div className="bg-white rounded-3xl shadow-2xl max-w-sm mx-4 p-8 text-center relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setDismissed(true)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X className="h-5 w-5" /></button>
        <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-lg">
          <Gift className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold mb-2">Get 10% Off!</h3>
        <p className="text-sm text-gray-500 mb-6">Refer a friend and both of you get 10% off your next order. Share the love!</p>
        <a href="https://wa.me/?text=Hey!%20Check%20out%20Maxx%20Tech%20-%20they%20do%20WhatsApp%20bots%2C%20web%20design%20and%20more!%20https://maxxtech.co.ke" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors">
          <Share2 className="h-4 w-4" /> Share on WhatsApp
        </a>
      </div>
    </div>
  );
};
export default ReferralPopup;

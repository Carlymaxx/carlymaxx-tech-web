import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed || sessionStorage.getItem("exit-dismissed")) return;
    const handleMouse = (e: MouseEvent) => {
      if (e.clientY < 10 && !dismissed) setShow(true);
    };
    document.addEventListener("mouseleave", handleMouse);
    return () => document.removeEventListener("mouseleave", handleMouse);
  }, [dismissed]);

  const dismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("exit-dismissed", "1");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={dismiss}>
      <div className="bg-white rounded-3xl shadow-2xl max-w-md mx-4 p-8 text-center relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        <button onClick={dismiss} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X className="h-5 w-5" /></button>
        <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center text-white shadow-lg">
          <Gift className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Wait! Don't Miss Out</h3>
        <p className="text-sm text-gray-500 mb-2">Get <span className="font-bold text-emerald-600">20% OFF</span> your first order!</p>
        <p className="text-xs text-gray-400 mb-6">Use code <span className="bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded">MAXX20</span> at checkout</p>
        <a href="https://wa.me/254725979273?text=Hey%20Maxx%20I%20want%20the%2020%25%20discount%20code%20MAXX20" target="_blank" rel="noopener noreferrer" onClick={dismiss} className="w-full block bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors">
          Claim 20% Off Now
        </a>
      </div>
    </div>
  );
};
export default ExitIntentPopup;

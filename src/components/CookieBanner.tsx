import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("maxxtech-cookies");
    if (!accepted) {
      const t = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("maxxtech-cookies", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl p-4 md:p-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Cookie className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <p className="font-bold text-sm mb-0.5">We use cookies</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              This website uses cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button onClick={() => setShow(false)} className="text-xs text-gray-500 hover:text-gray-700 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            Decline
          </button>
          <button onClick={accept} className="text-xs bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-emerald-700 transition-colors">
            Accept Cookies
          </button>
          <button onClick={() => setShow(false)} className="text-gray-400 hover:text-gray-600 md:hidden">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

import { useState, useEffect } from "react";
import { Eye } from "lucide-react";

const LiveVisitors = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const base = 28 + Math.floor(Math.random() * 20);
    setCount(base);
    const interval = setInterval(() => {
      setCount(c => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const next = c + change;
        return Math.max(15, Math.min(60, next));
      });
    }, 5000 + Math.random() * 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-24 left-6 z-40 bg-white rounded-full shadow-lg border border-gray-100 px-3 py-1.5 flex items-center gap-2">
      <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
      <Eye className="h-3.5 w-3.5 text-gray-500" />
      <span className="text-xs font-bold text-gray-700">{count} viewing</span>
    </div>
  );
};
export default LiveVisitors;

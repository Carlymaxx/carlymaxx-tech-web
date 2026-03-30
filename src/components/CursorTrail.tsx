import { useEffect, useState } from "react";

const CursorTrail = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX - 4, y: e.clientY - 4 });
      setTimeout(() => setRingPos({ x: e.clientX - 16, y: e.clientY - 16 }), 80);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      <div className="cursor-dot hidden md:block" style={{ left: pos.x, top: pos.y }} />
      <div className="cursor-ring hidden md:block" style={{ left: ringPos.x, top: ringPos.y }} />
    </>
  );
};

export default CursorTrail;

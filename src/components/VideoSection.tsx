import { useState } from "react";
import { Youtube, ChevronDown, ChevronUp, Play } from "lucide-react";

const VideoSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <button
            onClick={() => setOpen(!open)}
            className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5"
          >
            <Youtube className="h-4 w-4" />
            Tutorial Videos &amp; Meet CarlyMaxx
            {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>

        {open && (
          <div className="mt-6 animate-in slide-in-from-top-3 duration-300">
            <div className="text-center mb-5">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-wider mb-2">
                Meet <span className="text-emerald-400">Carly Maxx</span>
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
                Watch how Maxx Tech is transforming businesses across Kenya and beyond.
              </p>
              <p className="text-gray-400 mt-2 text-xs italic">
                "Technology should work for you, not the other way around."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-xl mx-auto mb-6">
              <div className="w-full sm:w-56 rounded-2xl overflow-hidden shadow-2xl aspect-[9/16]">
                <iframe
                  src="https://www.youtube.com/embed/0-ssjMGe8TM"
                  title="Maxx Tech Short 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="w-full sm:w-56 rounded-2xl overflow-hidden shadow-2xl aspect-[9/16]">
                <iframe
                  src="https://www.youtube.com/embed/xsoFZBGAudY"
                  title="Maxx Tech Short 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <a href="https://wa.me/254725979273" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors">Work With Me</a>
              <a href="https://youtube.com/@MaxxTechxmd" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors">YouTube Channel</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;

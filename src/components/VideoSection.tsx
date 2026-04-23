import { Play } from "lucide-react";
const VideoSection = () => (
  <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"><div className="container mx-auto px-6"><div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
    <div>
      <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wider mb-6">Meet <span className="text-emerald-400">Carly Maxx</span></h2>
      <p className="text-gray-300 leading-relaxed mb-4 text-lg">Watch how Maxx Tech is transforming businesses across Kenya and beyond. From WhatsApp bots to full-stack web applications, we deliver results that matter.</p>
      <p className="text-gray-400 mb-8">"Technology should work for you, not the other way around. That's why I build solutions that are fast, reliable, and affordable."</p>
      <div className="flex gap-4">
        <a href="https://wa.me/254725979273" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors">Work With Me</a>
        <a href="https://youtube.com/shorts/0-ssjMGe8TM?si=gFV3JINPSfA5xArQ" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">YouTube Channel</a>
      </div>
    </div>
    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-700 shadow-2xl group cursor-pointer">
      <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80" alt="Video" className="w-full h-full object-cover opacity-80" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
        <div className="h-20 w-20 rounded-full bg-emerald-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform"><Play className="h-8 w-8 text-white ml-1" fill="white" /></div>
      </div>
    </div>
  </div></div></section>
);
export default VideoSection;

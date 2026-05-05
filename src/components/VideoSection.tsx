const VideoSection = () => (
  <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wider mb-4">
          Meet <span className="text-emerald-400">Carly Maxx</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Watch how Maxx Tech is transforming businesses across Kenya and beyond. From WhatsApp bots to full-stack web applications, we deliver results that matter.
        </p>
        <p className="text-gray-400 mt-4 italic">
          "Technology should work for you, not the other way around. That's why I build solutions that are fast, reliable, and affordable."
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto mb-12">
        <div className="w-full sm:w-64 rounded-2xl overflow-hidden shadow-2xl aspect-[9/16]">
          <iframe
            src="https://www.youtube.com/embed/0-ssjMGe8TM"
            title="Maxx Tech Short 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="w-full sm:w-64 rounded-2xl overflow-hidden shadow-2xl aspect-[9/16]">
          <iframe
            src="https://www.youtube.com/embed/xsoFZBGAudY"
            title="Maxx Tech Short 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <a href="https://wa.me/254725979273" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors">Work With Me</a>
        <a href="https://youtube.com/@carlymaxx" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">YouTube Channel</a>
      </div>
    </div>
  </section>
);
export default VideoSection;

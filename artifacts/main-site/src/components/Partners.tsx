const Partners = () => (
  <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-6">
      <h2 className="mb-4 text-center font-display text-2xl font-bold tracking-wider sm:text-3xl gradient-text">Our Partners</h2>
      <p className="mx-auto mb-10 max-w-md text-center text-gray-500 text-sm">Proud to collaborate with these amazing brands</p>
      <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
        <a href="https://bwmxmd.co.ke" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 sm:gap-3 bg-white rounded-2xl border border-gray-100 px-3 sm:px-5 py-3 sm:py-4 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all hover:-translate-y-1">
          <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-display font-bold text-xs sm:text-sm shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">B</div>
          <div className="min-w-0">
            <p className="font-bold text-xs sm:text-sm text-gray-800 group-hover:text-emerald-600 transition-colors truncate">BWMXMD</p>
            <p className="text-[9px] sm:text-[10px] text-gray-400 truncate">bwmxmd.co.ke</p>
          </div>
        </a>
        <a href="https://eliteprotech.zone.id" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 sm:gap-3 bg-white rounded-2xl border border-gray-100 px-3 sm:px-5 py-3 sm:py-4 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all hover:-translate-y-1">
          <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-display font-bold text-xs sm:text-sm shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">E</div>
          <div className="min-w-0">
            <p className="font-bold text-xs sm:text-sm text-gray-800 group-hover:text-violet-600 transition-colors truncate">Elite Protech</p>
            <p className="text-[9px] sm:text-[10px] text-gray-400 truncate">eliteprotech.zone.id</p>
          </div>
        </a>
        <a href="mailto:cybernexust3ch@gmail.com" className="group flex items-center gap-2 sm:gap-3 bg-white rounded-2xl border border-gray-100 px-3 sm:px-5 py-3 sm:py-4 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all hover:-translate-y-1">
          <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-display font-bold text-xs sm:text-sm shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">C</div>
          <div className="min-w-0">
            <p className="font-bold text-xs sm:text-sm text-gray-800 group-hover:text-cyan-600 transition-colors truncate">CYBERNEXUS</p>
            <p className="text-[9px] sm:text-[10px] text-gray-400 truncate">cybernexust3ch@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  </section>
);
export default Partners;

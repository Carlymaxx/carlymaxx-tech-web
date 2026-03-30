const Partners = () => (
  <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-6">
      <h2 className="mb-4 text-center font-display text-2xl font-bold tracking-wider sm:text-3xl gradient-text">Our Partners</h2>
      <p className="mx-auto mb-10 max-w-md text-center text-gray-500 text-sm">Proud to collaborate with these amazing brands</p>
      <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
        <a href="https://bwmxmd.co.ke" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-white rounded-2xl border border-gray-100 px-8 py-5 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all hover:-translate-y-1">
          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-display font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">B</div>
          <div>
            <p className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">BWMXMD</p>
            <p className="text-xs text-gray-400">bwmxmd.co.ke</p>
          </div>
        </a>
        <a href="https://eliteprotech.zone.id" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-white rounded-2xl border border-gray-100 px-8 py-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all hover:-translate-y-1">
          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-display font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">E</div>
          <div>
            <p className="font-bold text-gray-800 group-hover:text-violet-600 transition-colors">Elite Protech</p>
            <p className="text-xs text-gray-400">eliteprotech.zone.id</p>
          </div>
        </a>
      </div>
    </div>
  </section>
);
export default Partners;

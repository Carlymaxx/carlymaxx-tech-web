const clients = [
  { name: "TumiCodes", color: "from-blue-500 to-cyan-500" },
  { name: "Silatech", color: "from-violet-500 to-purple-500" },
  { name: "Code Matrix", color: "from-emerald-500 to-teal-500" },
  { name: "ByteForge", color: "from-orange-500 to-red-500" },
  { name: "NetWorks KE", color: "from-sky-500 to-blue-600" },
  { name: "DataSync", color: "from-pink-500 to-rose-500" },
  { name: "CloudBase", color: "from-indigo-500 to-violet-600" },
  { name: "InnovateTech", color: "from-amber-500 to-yellow-500" },
  { name: "Elite Protech", color: "from-cyan-500 to-blue-500" },
  { name: "BWMXMD", color: "from-green-500 to-emerald-600" },
  { name: "CyberNexus", color: "from-slate-500 to-gray-600" },
  { name: "DevHouse KE", color: "from-fuchsia-500 to-pink-600" },
];

const Clients = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Trusted by Businesses</h2>
          <p className="text-gray-500 text-sm">Tech brands that trust Maxx Tech</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {clients.map((client) => (
            <div key={client.name} className="group flex items-center justify-center gap-2 bg-white rounded-xl border border-gray-100 px-3 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold text-xs shadow-sm group-hover:scale-110 transition-transform`}>
                {client.name.charAt(0)}
              </div>
              <span className="font-medium text-xs text-gray-700">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

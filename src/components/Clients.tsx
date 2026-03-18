const clients = [
  { name: "TechStart", color: "bg-blue-500" },
  { name: "DigitalHub", color: "bg-purple-500" },
  { name: "CloudNine", color: "bg-cyan-500" },
  { name: "InnovateCo", color: "bg-orange-500" },
  { name: "DataFlow", color: "bg-green-500" },
  { name: "NetPrime", color: "bg-red-500" },
  { name: "SoftWave", color: "bg-indigo-500" },
  { name: "ByteForce", color: "bg-yellow-500" },
];

const Clients = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Businesses</h2>
          <p className="text-muted-foreground">
            Join 50+ companies that trust Maxx Tech for their digital solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl bg-background flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`${client.color} text-white font-bold text-sm px-3 py-2 rounded-lg`}
              >
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

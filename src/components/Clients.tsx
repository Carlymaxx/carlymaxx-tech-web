const clients = [
  { name: "TechHub Kenya", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&q=80" },
  { name: "Digital Wave", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&q=80" },
  { name: "CloudBase", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&q=80" },
  { name: "InnovateTech", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=80" },
  { name: "DataSync", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&q=80" },
  { name: "NetWorks", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&q=80" },
];

const Clients = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Trusted by Businesses</h2>
          <p className="text-muted-foreground text-sm">Companies that trust Maxx Tech for their digital solutions</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <div key={index} className="aspect-video rounded-lg overflow-hidden bg-background shadow-md hover:shadow-lg transition-shadow">
              <img src={client.image} alt={client.name} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

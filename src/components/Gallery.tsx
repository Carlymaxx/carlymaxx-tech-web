import { useState } from "react";
import { ExternalLink } from "lucide-react";

const galleryItems = [
  {
    title: "Project Showcase 1",
    category: "Maxx Tech",
    description: "Custom project by Maxx Tech",
    image: "https://files.catbox.moe/d5xedo.jpg",
  },
  {
    title: "Project Showcase 2",
    category: "Maxx Tech",
    description: "Custom project by Maxx Tech",
    image: "https://files.catbox.moe/6u07h4.jpg",
  },
  {
    title: "Project Showcase 3",
    category: "Maxx Tech",
    description: "Custom project by Maxx Tech",
    image: "https://files.catbox.moe/xx7rru.jpg",
  },
  {
    title: "Project Showcase 4",
    category: "Maxx Tech",
    description: "Custom project by Maxx Tech",
    image: "https://files.catbox.moe/frwq4s.jpg",
  },
  {
    title: "Project Showcase 5",
    category: "Maxx Tech",
    description: "Custom project by Maxx Tech",
    image: "https://files.catbox.moe/bbwgie.jpg",
  },
  {
    title: "Project Showcase 6",
    category: "Maxx Tech",
    description: "Custom project by Maxx Tech",
    image: "https://files.catbox.moe/ga6rt7.png",
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center p-4">
                  <span className="text-sm font-medium text-white/80 mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <ExternalLink className="h-5 w-5 text-white/80 mx-auto mt-2" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-xs font-medium text-white/80">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Modal */}
        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div 
              className="bg-background rounded-2xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-muted-foreground mb-4">{selectedItem.description}</p>
                <span className="text-sm font-medium text-primary">{selectedItem.category}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

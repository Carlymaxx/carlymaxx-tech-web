import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryItems = [
  {
    title: "WhatsApp Bot Dashboard",
    category: "Bot Development",
    description: "Custom admin dashboard for managing WhatsApp bot operations",
    color: "from-green-500 to-emerald-700",
  },
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce website with payment integration",
    color: "from-blue-500 to-indigo-700",
  },
  {
    title: "AI Chat Interface",
    category: "AI Solutions",
    description: "Intelligent chatbot with natural language processing",
    color: "from-purple-500 to-pink-700",
  },
  {
    title: "Mobile App UI",
    category: "UI/UX Design",
    description: "Sleek mobile application interface design",
    color: "from-orange-500 to-red-700",
  },
  {
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description: "Real-time analytics and reporting system",
    color: "from-cyan-500 to-blue-700",
  },
  {
    title: "API Gateway",
    category: "Backend",
    description: "Secure and scalable API infrastructure",
    color: "from-gray-500 to-slate-700",
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
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform group-hover:scale-110`}
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

        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-2xl">
            {selectedItem && (
              <div>
                <div
                  className={`h-48 rounded-lg bg-gradient-to-br ${selectedItem.color} mb-4`}
                />
                <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-muted-foreground mb-4">{selectedItem.description}</p>
                <span className="text-sm font-medium text-primary">{selectedItem.category}</span>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;

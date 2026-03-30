import { FileText } from "lucide-react";

const Sitemap = () => {
  const sections = [
    { title: "Main Pages", links: ["Home", "Services", "Products", "Gallery", "FAQ", "Blog", "Contact"] },
    { title: "Products", links: ["MAXXTECH AI", "MAXX-XMD Bot", "Maxx Media Hub"] },
    { title: "Services", links: ["Web Design", "Smart Automation", "Bot Deployment", "YouTube Boosting", "TikTok Boosting", "Account Security"] },
    { title: "Tools", links: ["Pair Session", "AI Assistant", "Media Hub", "GitHub", "WhatsApp Group"] },
    { title: "Legal", links: ["Privacy Policy", "Terms & Conditions", "Cookies", "Refund Policy"] },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <FileText className="h-6 w-6 text-emerald-600" />
            <h2 className="font-display text-2xl font-bold tracking-wider">Sitemap</h2>
          </div>
          <p className="text-gray-500 text-sm">Find everything on our website</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-sm mb-3 text-emerald-700">{section.title}</h3>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-gray-500 hover:text-emerald-600 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sitemap;

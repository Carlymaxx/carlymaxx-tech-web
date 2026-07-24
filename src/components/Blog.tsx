import { useState } from "react";
import { Clock, ChevronDown, ChevronUp } from "lucide-react";

const allPosts = [
  { title: "How to Deploy MAXX-XMD Bot in 2 Minutes", excerpt: "Get your session at pair.maxxtech.co.ke, copy the 8-digit code, link to WhatsApp. Fork github.com/Carlymaxx/maxxtechxmd, deploy on Heroku or Railway, paste your session. Bot alive in 2 mins!", date: "Mar 30, 2026", tag: "Deployment", image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=200&q=70" },
  { title: "MAXX-XMD Bot Commands & Features", excerpt: "Explore 50+ commands including group management, auto-replies, media downloads, stickers, and more. Wait 5 minutes after deploy for WhatsApp sync.", date: "Mar 28, 2026", tag: "Tutorial", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&q=70" },
  { title: "Deploy on Heroku vs Railway", excerpt: "Compare free hosting platforms for your WhatsApp bot. Heroku for simplicity, Railway for speed. Both work perfectly with MAXX-XMD.", date: "Mar 25, 2026", tag: "Guide", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&q=70" },
  { title: "How to Get Your WhatsApp Session ID", excerpt: "Visit pair.maxxtech.co.ke, enter your number with country code, generate 8-digit code, link to WhatsApp — session sent automatically.", date: "Mar 22, 2026", tag: "Setup", image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=200&q=70" },
  { title: "Setting Up Group Management with MAXX-XMD", excerpt: "Configure auto-moderation, welcome messages, anti-spam, and group rules using MAXX-XMD bot commands.", date: "Mar 20, 2026", tag: "Tutorial", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&q=70" },
  { title: "Troubleshooting: Bot Not Responding", excerpt: "If your bot isn't responding, wait 5 minutes for WhatsApp sync. Check your session ID and env variables on your hosting platform.", date: "Mar 18, 2026", tag: "Support", image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=200&q=70" },
];

const Blog = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? allPosts : allPosts.slice(0, 1);
  return (
    <section className="py-5">
      <div className="container mx-auto px-6">
        <h2 className="mb-1 text-center font-display text-xl font-bold tracking-wider gradient-text">Latest Articles</h2>
        <p className="mx-auto mb-3 max-w-xl text-center text-gray-500 text-xs">Guides and tutorials from Maxx Tech</p>
        <div className="max-w-2xl mx-auto space-y-2">
          {visible.map((post) => (
            <article key={post.title} className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className="flex">
                <div className="w-24 h-20 overflow-hidden flex-shrink-0">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-2.5 flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">{post.tag}</span>
                    <span className="text-[9px] text-gray-400 flex items-center gap-0.5"><Clock className="h-2.5 w-2.5" />{post.date}</span>
                  </div>
                  <h3 className="font-bold text-xs mb-1 group-hover:text-emerald-600 transition-colors">{post.title}</h3>
                  <p className="text-[10px] text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-3">
          <button onClick={() => setExpanded(!expanded)} className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
            {expanded ? <><ChevronUp className="h-3 w-3" /> Show Less</> : <><ChevronDown className="h-3 w-3" /> View More Tutorials</>}
          </button>
        </div>
      </div>
    </section>
  );
};
export default Blog;

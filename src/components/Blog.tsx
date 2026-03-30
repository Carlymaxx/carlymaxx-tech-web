import { useState } from "react";
import { Clock, ChevronDown, ChevronUp } from "lucide-react";

const posts = [
  {
    title: "How to Deploy MAXX-XMD Bot in 2 Minutes",
    excerpt: "1. Get your session at pair.maxxtech.co.ke — put your number with country code. 2. Copy the 8-digit code, link to WhatsApp. 3. Session will be sent automatically — copy it. 4. Fork the repo github.com/Carlymaxx/maxxtechxmd. 5. Deploy on Heroku, Railway, or any platform. 6. Paste your session and deploy. Bot alive in 2 mins!",
    date: "Mar 30, 2026",
    tag: "Deployment",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&q=80",
  },
  {
    title: "MAXX-XMD Bot Commands & Features",
    excerpt: "Explore 50+ commands including group management, auto-replies, media downloads, stickers, and more. Wait 5 minutes after deploy for WhatsApp sync, then start using commands.",
    date: "Mar 28, 2026",
    tag: "Tutorial",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
  },
  {
    title: "Deploy on Heroku vs Railway — Which is Better?",
    excerpt: "Compare free hosting platforms for your WhatsApp bot. Heroku for simplicity, Railway for speed. Both work perfectly with MAXX-XMD.",
    date: "Mar 25, 2026",
    tag: "Guide",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
  },
  {
    title: "How to Get Your WhatsApp Session ID",
    excerpt: "Visit pair.maxxtech.co.ke, enter your number starting with country code (e.g. 2547...), generate 8-digit code, link to WhatsApp, and your session will be sent automatically.",
    date: "Mar 22, 2026",
    tag: "Setup",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&q=80",
  },
  {
    title: "Setting Up Group Management with MAXX-XMD",
    excerpt: "Learn how to configure auto-moderation, welcome messages, anti-spam, and group rules using MAXX-XMD bot commands.",
    date: "Mar 20, 2026",
    tag: "Tutorial",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
  },
  {
    title: "Troubleshooting: Bot Not Responding After Deploy",
    excerpt: "If your bot isn't responding, wait 5 minutes for WhatsApp sync. Check your session ID, make sure env variables are set correctly on your hosting platform.",
    date: "Mar 18, 2026",
    tag: "Support",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=400&q=80",
  },
];

const Blog = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? posts : posts.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">Latest Articles</h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-gray-500">Guides and tutorials from Maxx Tech</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {visible.map((post) => (
            <article key={post.title} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-40 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">{post.tag}</span>
                  <span className="text-[10px] text-gray-400 flex items-center gap-1"><Clock className="h-3 w-3" />{post.date}</span>
                </div>
                <h3 className="font-bold text-sm mb-2 group-hover:text-emerald-600 transition-colors">{post.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 bg-white border-2 border-emerald-500 text-emerald-600 px-8 py-3 rounded-xl font-bold text-sm hover:bg-emerald-500 hover:text-white transition-all"
          >
            {expanded ? (
              <>Show Less <ChevronUp className="h-4 w-4" /></>
            ) : (
              <>View More Tutorials <ChevronDown className="h-4 w-4" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
export default Blog;

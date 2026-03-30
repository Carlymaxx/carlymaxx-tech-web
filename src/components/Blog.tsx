import { Clock, ArrowRight } from "lucide-react";

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
    excerpt: "Compare free hosting platforms for your WhatsApp bot. Heroku for simplicity, Railway for speed. Both work perfectly with MAXX-XMD. Follow our step-by-step guide.",
    date: "Mar 25, 2026",
    tag: "Guide",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
  },
];

const Blog = () => (
  <section className="py-20"><div className="container mx-auto px-6">
    <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">Latest Articles</h2>
    <p className="mx-auto mb-12 max-w-xl text-center text-gray-500">Guides and tutorials from Maxx Tech</p>
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {posts.map((post) => (
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
            <p className="text-xs text-gray-500 leading-relaxed mb-3">{post.excerpt}</p>
          </div>
        </article>
      ))}
    </div>
  </div></section>
);
export default Blog;

import { Helmet } from "react-helmet-async";
import { ArrowRight, Github, Youtube, Send, Twitter, Music, MessageCircle, Globe, Code, Bot, Cpu, Zap, Sparkles, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const WHATSAPP = "https://chat.whatsapp.com/BWZOtIlbZoJ9Xt8lgxxbqQ?mode=gi_t";
const YOUTUBE = "https://www.youtube.com/@MaxxTechxmd";
const TIKTOK = "https://www.tiktok.com/@squillahmaxx";
const TELEGRAM = "https://t.me/maxxtechgram";
const GITHUB = "https://github.com/Carlymaxx";
const FACEBOOK = "https://www.facebook.com/squillah.maxx";
const TWITTER = "https://x.com/maxx1470";
const PAIR_SITE = "https://pair.maxxtech.co.ke";
const PANEL_SITE = "https://panel.maxxtech.co.ke";
const AI_SITE = "https://agent.maxxtech.co.ke";
const AI_CLASSIC = "https://ai.maxxtech.co.ke";
const MUSIC_HUB = "https://maxxtech-musichub.vercel.app";
const MAIN_SITE = "https://www.maxxtech.co.ke";

const socials = [
  { icon: Youtube, label: "YouTube", sub: "@MaxxTechxmd", href: YOUTUBE, color: "from-red-500 to-rose-600" },
  { icon: Globe, label: "TikTok", sub: "@squillahmaxx", href: TIKTOK, color: "from-pink-500 to-fuchsia-600" },
  { icon: Send, label: "Telegram", sub: "@maxxtechgram", href: TELEGRAM, color: "from-sky-500 to-blue-600" },
  { icon: Github, label: "GitHub", sub: "Carlymaxx", href: GITHUB, color: "from-gray-600 to-gray-800" },
  { icon: MessageCircle, label: "Facebook", sub: "squillah.maxx", href: FACEBOOK, color: "from-blue-500 to-indigo-600" },
  { icon: Twitter, label: "X / Twitter", sub: "@maxx1470", href: TWITTER, color: "from-slate-600 to-slate-800" },
  { icon: MessageCircle, label: "WhatsApp", sub: "Group Chat", href: WHATSAPP, color: "from-emerald-500 to-green-600" },
];

const products = [
  { icon: Bot, name: "MAXX-XMD", tagline: "WhatsApp Bot", desc: "The fastest WhatsApp bot — 100+ commands, group management, auto-replies. Deploy in 2-3 minutes.", href: PAIR_SITE, color: "from-emerald-500 to-teal-600", tag: "Free" },
  { icon: Sparkles, name: "MAXXTECH AI", tagline: "AI Assistant", desc: "Advanced AI for chat, code help, content writing, and smart automation. Available 24/7.", href: AI_SITE, color: "from-violet-500 to-purple-600", tag: "Live" },
  { icon: Zap, name: "BOT PANEL", tagline: "Bot Hosting", desc: "Host and manage MAXX-XMD with our SaaS dashboard. Monitor stats, manage sessions, scale.", href: PANEL_SITE, color: "from-cyan-500 to-sky-600", tag: "Pro" },
  { icon: Music, name: "MEDIA HUB", tagline: "Music & Media", desc: "All-in-one media platform for music streaming, downloads, and entertainment content.", href: MUSIC_HUB, color: "from-amber-500 to-orange-600", tag: "Free" },
];

const skills = [
  { icon: Bot, label: "WhatsApp Bot Dev", pct: 98 },
  { icon: Code, label: "Web Development", pct: 95 },
  { icon: Sparkles, label: "AI Integration", pct: 90 },
  { icon: Globe, label: "Digital Marketing", pct: 88 },
  { icon: Cpu, label: "IT Consulting", pct: 92 },
  { icon: Zap, label: "Bot Automation", pct: 97 },
];

export default function CarlyMaxx() {
  return (
    <>
      <Helmet>
        <title>Calvince Ochieng (CarlyMaxx) — Official Profile | Maxx Tech Founder | MAXX-XMD Creator | Ndhiwa, Homa Bay, Kenya</title>
        <meta name="title" content="Calvince Ochieng (CarlyMaxx) — Official Profile | Maxx Tech Founder | MAXX-XMD Creator | Ndhiwa, Kenya" />
        <meta name="description" content="Calvince Ochieng, officially known as CarlyMaxx (MAXXXMD), is the CEO & founder of Maxx Tech and creator of MAXX-XMD — the world's fastest WhatsApp bot. Born in Ndhiwa, Homa Bay County, Kenya (Luo). Developer based in Ruiru, Kenya. Owner of Maxx Tech, MAXX-XMD, MAXXTECH AI and Maxx Media Hub. Serving clients worldwide." />
        <meta name="keywords" content="Calvince Ochieng, CarlyMaxx, CarlyMaxx official profile, CarlyMaxx developer, CarlyMaxx Ruiru, CarlyMaxx Ndhiwa, CarlyMaxx hometown Ndhiwa, Calvince Ochieng official name, Calvince Ochieng developer, Calvince Ochieng Ruiru, Calvince Ochieng Ndhiwa Homa Bay, Calvince Ochieng Luo, who is Calvince Ochieng, who is CarlyMaxx, CarlyMaxx biography, Calvince Ochieng biography, CarlyMaxx founder, owner of Maxx Tech, owner of MAXX-XMD, CarlyMaxx products, Calvince Ochieng products, MAXXXMD, Squillah Maxx, Carly Maxx, Carlymaxx, MAXXXMD Kenya, MAXX-XMD creator, Maxx Tech founder, Maxx Tech owner, who owns Maxx Tech, who created MAXX-XMD, CarlyMaxx worldwide, CarlyMaxx global, Luo tech entrepreneur Kenya, Ndhiwa Homa Bay famous person, Ndhiwa Kenya developer, Ruiru Kenya developer, MaxxTechxmd YouTube, Squillah Maxx TikTok, Carlymaxx GitHub, CarlyMaxx Twitter maxx1470, CarlyMaxx age, CarlyMaxx net worth, young tech entrepreneur Africa, Kenya software developer worldwide" />
        <meta name="author" content="Calvince Ochieng — CarlyMaxx (MAXXXMD)" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://www.maxxtech.co.ke/carlymaxx" />

        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.maxxtech.co.ke/carlymaxx" />
        <meta property="og:title" content="Calvince Ochieng (CarlyMaxx) — CEO & Founder of Maxx Tech | MAXX-XMD Creator | Ndhiwa, Kenya" />
        <meta property="og:description" content="Calvince Ochieng (CarlyMaxx / MAXXXMD) — CEO & founder of Maxx Tech, developer based in Ruiru, Kenya. Born in Ndhiwa, Homa Bay (Luo). Creator of MAXX-XMD, MAXXTECH AI, and Maxx Media Hub. Serving worldwide." />
        <meta property="og:image" content="https://www.maxxtech.co.ke/gallery/carly-maxx-founder.jpeg" />
        <meta property="og:image:alt" content="Calvince Ochieng (CarlyMaxx) — MAXXXMD, CEO & Founder of Maxx Tech and Creator of MAXX-XMD, from Ndhiwa Homa Bay Kenya" />
        <meta property="profile:first_name" content="Calvince" />
        <meta property="profile:last_name" content="Ochieng" />
        <meta property="profile:username" content="carlymaxx" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@maxx1470" />
        <meta name="twitter:creator" content="@maxx1470" />
        <meta name="twitter:title" content="Carly Maxx — MAXXXMD | Maxx Tech | MAXX-XMD Creator" />
        <meta name="twitter:description" content="Carly Maxx (MAXXXMD) — founder of Maxx Tech, creator of MAXX-XMD WhatsApp bot. Based in Ruiru, Kenya." />
        <meta name="twitter:image" content="https://www.maxxtech.co.ke/gallery/carly-maxx-founder.jpeg" />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfilePage",
              "@id": "https://www.maxxtech.co.ke/carlymaxx",
              "name": "Calvince Ochieng (CarlyMaxx) — Official Profile | Maxx Tech Founder | MAXX-XMD Creator",
              "url": "https://www.maxxtech.co.ke/carlymaxx",
              "description": "Official profile of Calvince Ochieng (CarlyMaxx / MAXXXMD) — CEO & Founder of Maxx Tech, developer based in Ruiru Kenya, born in Ndhiwa Homa Bay (Luo). Owner of MAXX-XMD, MAXXTECH AI and Maxx Media Hub.",
              "mainEntity": { "@id": "#carlymaxx-profile" }
            },
            {
              "@type": "Person",
              "@id": "#carlymaxx-profile",
              "name": "Calvince Ochieng",
              "givenName": "Calvince",
              "familyName": "Ochieng",
              "alternateName": ["CarlyMaxx", "Carly Maxx", "MAXXXMD", "Squillah Maxx", "Carlymaxx", "MaxxTech CEO", "MAXX-XMD Creator"],
              "url": "https://www.maxxtech.co.ke/carlymaxx",
              "image": [
                "https://www.maxxtech.co.ke/gallery/carly-maxx-founder.jpeg",
                "https://files.catbox.moe/3716xg.jpg",
                "https://files.catbox.moe/oepq4e.jpg"
              ],
              "jobTitle": "CEO & Founder — Maxx Tech | Creator of MAXX-XMD",
              "description": "Calvince Ochieng, known online as CarlyMaxx and MAXXXMD, is a software developer, AI entrepreneur, and tech founder from Ndhiwa, Homa Bay County, Kenya (Luo). He founded Maxx Tech based in Ruiru, Kenya, and created MAXX-XMD — the world's fastest multi-session WhatsApp bot. He also built MAXXTECH AI and Maxx Media Hub.",
              "birthPlace": { "@type": "Place", "name": "Ndhiwa, Homa Bay County, Kenya" },
              "worksFor": { "@type": "Organization", "name": "Maxx Tech", "url": "https://www.maxxtech.co.ke" },
              "nationality": { "@type": "Country", "name": "Kenya" },
              "homeLocation": { "@type": "Place", "name": "Ruiru, Kiambu County, Kenya" },
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "hometown", "value": "Ndhiwa, Homa Bay County, Kenya" },
                { "@type": "PropertyValue", "name": "tribe", "value": "Luo, Kenya" }
              ],
              "knowsAbout": ["WhatsApp Bots", "MAXX-XMD", "MAXXXMD", "Web Development", "AI Tools", "Digital Marketing", "Bot Automation", "Software Engineering", "IT Consulting", "JavaScript", "Node.js"],
              "award": ["Creator of MAXX-XMD — Most Popular WhatsApp Bot Kenya", "Founder Maxx Tech Global Brand"],
              "sameAs": [
                "https://www.youtube.com/@MaxxTechxmd",
                "https://www.tiktok.com/@squillahmaxx",
                "https://github.com/Carlymaxx",
                "https://www.facebook.com/squillah.maxx",
                "https://t.me/maxxtechgram",
                "https://x.com/maxx1470",
                "https://www.maxxtech.co.ke"
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Maxx Tech Home", "item": "https://www.maxxtech.co.ke/" },
                { "@type": "ListItem", "position": 2, "name": "Calvince Ochieng (CarlyMaxx) — Official Profile", "item": "https://www.maxxtech.co.ke/carlymaxx" }
              ]
            },
            {
              "@type": "FAQPage",
              "@id": "https://www.maxxtech.co.ke/carlymaxx#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who is Calvince Ochieng?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Calvince Ochieng is the official name of CarlyMaxx — CEO and Founder of Maxx Tech and creator of MAXX-XMD, the world's fastest multi-session WhatsApp bot. He is a software developer and AI entrepreneur born in Ndhiwa, Homa Bay County, Kenya (Luo heritage), currently based in Ruiru, Kiambu County, Kenya. He builds and owns Maxx Tech, MAXX-XMD, MAXXTECH AI, and Maxx Media Hub, serving clients worldwide at maxxtech.co.ke." }
                },
                {
                  "@type": "Question",
                  "name": "What is CarlyMaxx's official name?",
                  "acceptedAnswer": { "@type": "Answer", "text": "CarlyMaxx's official name is Calvince Ochieng. He is known online as CarlyMaxx, MAXXXMD, and Squillah Maxx. He is the founder and CEO of Maxx Tech, a global tech company based in Ruiru, Kenya." }
                },
                {
                  "@type": "Question",
                  "name": "Where is CarlyMaxx based?",
                  "acceptedAnswer": { "@type": "Answer", "text": "CarlyMaxx (Calvince Ochieng) is a developer based in Ruiru, Kiambu County, Kenya. His hometown is Ndhiwa, Homa Bay County. He operates Maxx Tech from Ruiru and serves clients worldwide." }
                },
                {
                  "@type": "Question",
                  "name": "What does Calvince Ochieng own?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Calvince Ochieng (CarlyMaxx / MAXXXMD) owns and operates: Maxx Tech (maxxtech.co.ke), MAXX-XMD WhatsApp bot (pair.maxxtech.co.ke), MAXXTECH AI assistant (agent.maxxtech.co.ke), Bot Panel hosting service (panel.maxxtech.co.ke), and Maxx Media Hub. All products are used by thousands of users globally." }
                },
                {
                  "@type": "Question",
                  "name": "Who owns Maxx Tech?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Maxx Tech is owned by Calvince Ochieng, known online as CarlyMaxx (MAXXXMD). He founded Maxx Tech as a global technology brand offering WhatsApp bots (MAXX-XMD), AI tools, web design, and bot hosting. Company based in Ruiru, Kenya." }
                },
                {
                  "@type": "Question",
                  "name": "Who owns MAXX-XMD?",
                  "acceptedAnswer": { "@type": "Answer", "text": "MAXX-XMD is owned and created by Calvince Ochieng (CarlyMaxx / MAXXXMD) — CEO of Maxx Tech, developer from Ruiru, Kenya, born in Ndhiwa, Homa Bay County. You can get MAXX-XMD at pair.maxxtech.co.ke." }
                },
                {
                  "@type": "Question",
                  "name": "Where is Calvince Ochieng from?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Calvince Ochieng (CarlyMaxx) was born in Ndhiwa, Homa Bay County, Kenya. He is Luo by heritage. His office is in Ruiru, Kiambu County, Kenya, and he serves tech clients worldwide through maxxtech.co.ke." }
                },
                {
                  "@type": "Question",
                  "name": "Is CarlyMaxx popular worldwide?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. CarlyMaxx (Calvince Ochieng) is recognized worldwide through MAXX-XMD — one of the most downloaded WhatsApp bots globally with users across Africa, Asia, Europe, and the Americas. His YouTube channel @MaxxTechxmd and TikTok @squillahmaxx have an international following." }
                }
              ]
            }
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">

        {/* ── NAV ── */}
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <a href={MAIN_SITE} className="flex items-center gap-2 font-display font-bold text-lg tracking-wider gradient-text">
              ← MAXX TECH
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              WhatsApp
            </a>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20"
          style={{ background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)" }}>
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-500/20 blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-500/20 blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" style={{ animationDelay: "3s" }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-mono tracking-wider uppercase">Available for projects</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-1 leading-tight">
                  Calvince<br />
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Ochieng</span>
                </h1>
                <p className="text-emerald-400 font-mono tracking-[0.2em] text-sm mb-1 uppercase">CarlyMaxx · MAXXXMD · Squillah Maxx</p>
                <p className="text-white/50 text-xs font-mono mb-4">Ndhiwa, Homa Bay County, Kenya · Luo</p>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  CEO &amp; Founder of <strong className="text-white">Maxx Tech</strong> · Creator of <strong className="text-emerald-400">MAXX-XMD</strong> — the world's fastest multi-session WhatsApp bot. Software developer &amp; AI entrepreneur from <span className="text-cyan-400">Ruiru, Kenya</span>.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["MAXX-XMD Creator", "Ndhiwa • Homa Bay", "Luo 🦅", "MAXXXMD", "Ruiru Kenya", "AI Builder"].map(tag => (
                    <span key={tag} className="px-3 py-1.5 text-xs rounded-full bg-white/10 border border-white/20 text-white/70 font-mono">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={PAIR_SITE} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all">
                    Get MAXX-XMD <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href={MAIN_SITE} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all">
                    Maxx Tech <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Photo card */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-violet-500 blur-2xl opacity-40 scale-105" />
                  <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur p-1">
                    <img
                      src="https://www.maxxtech.co.ke/gallery/carly-maxx-founder.jpeg"
                      alt="Carly Maxx — MAXXXMD, Founder of Maxx Tech and Creator of MAXX-XMD WhatsApp Bot"
                      className="w-72 h-80 sm:w-80 sm:h-96 object-cover rounded-2xl"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur rounded-xl px-4 py-3">
                      <p className="font-display font-bold text-white text-lg">Carly Maxx</p>
                      <p className="text-emerald-400 text-xs tracking-wider">MAXXXMD · Founder, Maxx Tech</p>
                    </div>
                  </div>
                  {/* floating badge */}
                  <div className="absolute -top-4 -right-4 bg-emerald-500 text-white rounded-2xl px-3 py-2 text-xs font-bold shadow-lg border border-emerald-400">
                    🤖 MAXX-XMD Creator
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-violet-600 text-white rounded-2xl px-3 py-2 text-xs font-bold shadow-lg border border-violet-400">
                    🌍 Kenya → Worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUICK STATS ── */}
        <section className="py-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
              {[
                { v: "MAXX-XMD", l: "WhatsApp Bot" },
                { v: "200+", l: "Happy Clients" },
                { v: "5+", l: "Years Experience" },
                { v: "24/7", l: "Always Online" },
              ].map(s => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl font-black mb-1">{s.v}</div>
                  <div className="text-white/80 text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="py-20 bg-gradient-to-b from-background to-slate-900/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-black mb-3">
                About <span className="gradient-text">Carly Maxx</span>
              </h2>
              <p className="text-muted-foreground text-sm tracking-widest uppercase font-mono">MAXXXMD · Squillah Maxx · Ruiru, Kenya</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Calvince Ochieng</strong>, known online as <strong className="text-emerald-500">CarlyMaxx</strong> and <strong className="text-cyan-500">MAXXXMD</strong>, is a self-taught software developer, AI entrepreneur, and tech founder. He was born in <strong className="text-amber-400">Ndhiwa, Homa Bay County, Kenya</strong> — a proud <strong className="text-foreground">Luo</strong> man — and currently runs his company from <strong className="text-foreground">Ruiru, Kiambu County, Kenya</strong>.
                </p>
                <p>
                  He founded <strong className="text-foreground">Maxx Tech</strong> to deliver cutting-edge technology to clients across Africa and worldwide. His flagship product, <strong className="text-emerald-500">MAXX-XMD</strong>, is one of the world's most widely used multi-session WhatsApp bots — known for its speed, 100+ commands, and 2-3 minute deployment.
                </p>
                <p>
                  Beyond MAXX-XMD, Calvince has built <strong className="text-violet-400">MAXXTECH AI</strong> (agent.maxxtech.co.ke), an advanced AI assistant, and <strong className="text-amber-400">Maxx Media Hub</strong>, a music and media streaming platform — all under the Maxx Tech brand.
                </p>
                <p>
                  His work blends deep technical skill with a passion for making technology <strong className="text-foreground">accessible, fast, and affordable</strong> to everyone — from solo entrepreneurs in Homa Bay to businesses across the globe.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-display font-bold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Identity</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      ["Full Name", "Calvince Ochieng"],
                      ["Brand Name", "CarlyMaxx (Carly Maxx)"],
                      ["Brand Alias", "MAXXXMD · Squillah Maxx"],
                      ["Hometown", "Ndhiwa, Homa Bay County"],
                      ["Heritage", "Luo — Nyanza, Kenya"],
                      ["Office", "Ruiru, Kiambu, Kenya"],
                      ["GitHub", "Carlymaxx"],
                      ["Serves", "Worldwide 🌍"],
                      ["Contact", "info@maxxtech.co.ke"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-2">
                        <span className="text-muted-foreground">{k}</span>
                        <span className="font-medium text-right">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
                  <h3 className="font-display font-bold mb-3 text-sm uppercase tracking-wider text-emerald-600">Flagship Product</h3>
                  <p className="text-sm text-muted-foreground mb-3">MAXX-XMD — the fastest WhatsApp bot created by Carly Maxx (MAXXXMD)</p>
                  <a href={PAIR_SITE} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-400 transition-colors">
                    Get Session ID <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="py-16 bg-slate-900/40">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-display text-3xl font-black text-center mb-10">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {skills.map(s => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <s.icon className="h-4 w-4 text-primary" />
                      <span className="font-medium text-sm">{s.label}</span>
                    </div>
                    <span className="text-xs font-bold text-primary">{s.pct}%</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-1000" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-3xl font-black text-center mb-3">
              Products by <span className="gradient-text">Carly Maxx</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-sm">Built by Carly Maxx (MAXXXMD) under the Maxx Tech brand</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {products.map(p => (
                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                  className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative p-5">
                    <div className={`inline-flex h-10 w-10 rounded-xl bg-gradient-to-br ${p.color} items-center justify-center mb-3 text-white`}>
                      <p.icon className="h-5 w-5" />
                    </div>
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-display font-bold text-sm">{p.name}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{p.tag}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{p.tagline}</p>
                    <p className="text-xs text-muted-foreground/80 leading-relaxed">{p.desc}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-primary font-medium">
                      Open <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOCIALS ── */}
        <section className="py-20 bg-slate-900/40">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-display text-3xl font-black text-center mb-3">
              Follow <span className="gradient-text">Carly Maxx</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-sm">Find MAXXXMD on every platform</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card hover:border-primary/40 p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white flex-shrink-0`}>
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{s.label}</p>
                    <p className="text-xs text-muted-foreground">{s.sub}</p>
                  </div>
                  <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY ROW ── */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-3xl font-black text-center mb-10">
              <span className="gradient-text">MAXX-XMD</span> & Maxx Tech
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { src: "/gallery/maxx-xmd-intelligence-automation.jpeg", alt: "MAXX-XMD Intelligence Automation Innovation by Carly Maxx MAXXXMD" },
                { src: "/gallery/maxx-xmd-global-network.jpeg", alt: "MAXX-XMD Global Operations Network Carly Maxx MAXXXMD Maxx Tech" },
                { src: "/gallery/maxx-xmd-technology-future.jpeg", alt: "MAXX-XMD Technology Intelligence Future Carly Maxx" },
                { src: "/gallery/maxx-xmd-powering-smarter-future.jpeg", alt: "MAXX-XMD Powering a Smarter Future MAXXXMD" },
                { src: "/gallery/maxx-tech-smart-assistant.jpeg", alt: "Maxx Tech Smart Assistant Web Solutions Automation Carly Maxx" },
                { src: "/gallery/maxx-tech-services-card.jpeg", alt: "MAXX TECH The Real Choice Carly Maxx MAXXXMD Kenya" },
                { src: "/gallery/maxx-web-solutions-automation.jpeg", alt: "Maxx Tech Web Solutions Automation Carly Maxx Software" },
                { src: "/gallery/carly-maxx-founder.jpeg", alt: "Carly Maxx MAXXXMD Founder Maxx Tech Creator MAXX-XMD" },
              ].map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-square border border-border hover:border-primary/40 transition-all hover:scale-[1.02]">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA ── */}
        <section className="py-20 bg-gradient-to-br from-emerald-900/30 via-teal-900/20 to-background">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <h2 className="font-display text-4xl font-black mb-4">
              Work with <span className="gradient-text">Carly Maxx</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Need a WhatsApp bot, website, AI tool, or tech consultation? Reach out to Carly Maxx (MAXXXMD) directly through Maxx Tech.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="mailto:info@maxxtech.co.ke" className="flex items-center gap-2 border border-border bg-card px-5 py-3 rounded-xl text-sm font-medium hover:border-primary/40 transition-colors">
                <Mail className="h-4 w-4 text-primary" /> info@maxxtech.co.ke
              </a>
              <a href="tel:+254725979273" className="flex items-center gap-2 border border-border bg-card px-5 py-3 rounded-xl text-sm font-medium hover:border-primary/40 transition-colors">
                <Phone className="h-4 w-4 text-primary" /> +254 725 979 273
              </a>
              <div className="flex items-center gap-2 border border-border bg-card px-5 py-3 rounded-xl text-sm font-medium">
                <MapPin className="h-4 w-4 text-primary" /> Ruiru, Kenya
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={MAIN_SITE} className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors flex items-center gap-2">
                Visit Maxx Tech <ArrowRight className="h-4 w-4" />
              </a>
              <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="border border-border px-8 py-3 rounded-xl font-bold text-sm hover:border-primary/40 transition-colors flex items-center gap-2">
                <Send className="h-4 w-4" /> Telegram
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="py-6 border-t border-border">
          <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} <strong className="text-foreground">Carly Maxx (MAXXXMD)</strong> — Maxx Tech</span>
            <div className="flex items-center gap-4">
              <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">YouTube</a>
              <a href={TIKTOK} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">TikTok</a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
              <a href={MAIN_SITE} className="hover:text-foreground transition-colors">maxxtech.co.ke</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

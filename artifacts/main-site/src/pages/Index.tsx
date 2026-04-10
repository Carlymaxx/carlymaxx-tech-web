import { useEffect, useRef, useState } from "react";
import { Bot, Code, Globe, Cpu, Wrench, MessageCircle, ArrowRight, Mail, Phone, Github, Music, Youtube, Shield, Users, Send, Twitter, Menu, X, Zap, Clock, Award, Headphones, Sparkles, Key } from "lucide-react";
import logo from "@/assets/logo.jpg";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";
import LiveChat from "@/components/LiveChat";
import WhatsAppButton from "@/components/WhatsAppButton";
import Partners from "@/components/Partners";
import SocialMediaSection, { socials } from "@/components/SocialMediaSection";
import BackToTop from "@/components/BackToTop";
import TrustBadges from "@/components/TrustBadges";
import BeforeAfter from "@/components/BeforeAfter";
import VideoSection from "@/components/VideoSection";
import ClientLogos from "@/components/ClientLogos";
import SocialProof from "@/components/SocialProof";
import SkillsSection from "@/components/SkillsSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import LocationMap from "@/components/LocationMap";
import AnnouncementBar from "@/components/AnnouncementBar";
import Blog from "@/components/Blog";
import ReferralPopup from "@/components/ReferralPopup";
import TypingText from "@/components/TypingText";
import ScrollProgress from "@/components/ScrollProgress";
import GoogleReviews from "@/components/GoogleReviews";
import CookieBanner from "@/components/CookieBanner";
import URLShortener from "@/components/URLShortener";
import InvoiceGenerator from "@/components/InvoiceGenerator";
import AffiliateSystem from "@/components/AffiliateSystem";
import LiveStatus from "@/components/LiveStatus";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import FeatureRequest from "@/components/FeatureRequest";


const BOT_PANEL_URL = "https://panel.maxxtech.co.ke";
const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029Vb6XNTjAInPblhlwnm2J";
const WHATSAPP_GROUP = "https://chat.whatsapp.com/BWZOtIlbZoJ9Xt8lgxxbqQ?mode=gi_t";
const GITHUB_REPO = "https://github.com/Carlymaxx/maxxtechxmd";
const MUSIC_HUB = "https://maxxtech-musichub.vercel.app";
const PAIR_SITE = "https://pair.maxxtech.co.ke";
const AI_SITE = "https://ai.maxxtech.co.ke";

const TELEGRAM = "https://t.me/maxxtechgram";
const TIKTOK = "https://www.tiktok.com/@squillahmaxx";
const X_TWITTER = "https://x.com/maxx1470";
const YOUTUBE = "https://www.youtube.com/@MaxxTechxmd";

const socialLinks = [
  { icon: MessageCircle, label: "WhatsApp", href: WHATSAPP_CHANNEL },
  { icon: MessageCircle, label: "WhatsApp Group", href: WHATSAPP_GROUP },
  { icon: Youtube, label: "YouTube", href: YOUTUBE },
  { icon: Globe, label: "TikTok", href: TIKTOK },
  { icon: Send, label: "Telegram", href: TELEGRAM },
  { icon: Twitter, label: "X Twitter", href: X_TWITTER },
  { icon: Github, label: "GitHub", href: GITHUB_REPO },
];

const services = [
  { icon: Code, title: "Web Design", description: "Custom websites & landing pages built with modern frameworks and stunning UI.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80", color: "from-blue-500 to-cyan-500" },
  { icon: Bot, title: "Smart Automation", description: "AI-powered bots and workflow automation to streamline your digital operations.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80", color: "from-violet-500 to-purple-500" },
  { icon: Globe, title: "Web Solutions", description: "Full-stack web applications, APIs, and cloud-based solutions for your business.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80", color: "from-emerald-500 to-teal-500" },
  { icon: Cpu, title: "Information Technology", description: "IT consulting, infrastructure setup, and technical support around the clock.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80", color: "from-orange-500 to-red-500" },
  { icon: Wrench, title: "Tools & APIs", description: "Integration of powerful tools and third-party APIs to supercharge your workflow.", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80", color: "from-sky-500 to-blue-500" },
  { icon: MessageCircle, title: "24/7 Support", description: "Always available smart assistant for all your tech queries and digital needs.", image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=400&q=80", color: "from-pink-500 to-rose-500" },
];

const FadeSection = ({ children, className = "", bgClassName = "" }: { children: React.ReactNode; className?: string; bgClassName?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      el.style.opacity = entry.isIntersecting ? "1" : "0";
      el.style.transform = entry.isIntersecting ? "translateY(0)" : "translateY(30px)";
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`transition-all duration-700 ease-out opacity-0 translate-y-[30px] ${bgClassName} ${className}`}>{children}</div>;
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed top-10 w-full z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Maxx Tech logo" className="w-10 h-10 rounded-full ring-2 ring-primary/50" />
          <span className="font-display text-lg font-bold tracking-wider gradient-text">MAXX TECH</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">{link.label}</a>
          ))}
          <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">WhatsApp</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="border border-border p-2.5 text-foreground transition-all hover:border-primary/40 hover:text-primary md:hidden" aria-label="Toggle menu">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {menuOpen && (
        <div className="container mx-auto px-6 pb-4 md:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="border border-border px-4 py-2.5 font-body text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary">{link.label}</a>
            ))}
            <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-medium text-center">WhatsApp</a>
            <a href={MUSIC_HUB} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 border border-border px-4 py-2.5 font-body text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"><Music className="h-4 w-4" />Music Hub</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Index = () => {
  const speedLines = Array.from({ length: 20 }, (_, i) => ({ id: i, top: `${Math.random() * 100}%`, width: `${100 + Math.random() * 300}px`, duration: `${1.5 + Math.random() * 3}s`, delay: `${Math.random() * 5}s`, opacity: 0.2 + Math.random() * 0.5 }));

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="speed-lines">
        {speedLines.map((line) => <div key={line.id} className="speed-line" style={{ top: line.top, width: line.width, animationDuration: line.duration, animationDelay: line.delay, opacity: line.opacity * 0.3 }} />)}
      </div>
      <AnnouncementBar />
      <ScrollProgress />
      <NavBar />

      <FadeSection>
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20 bg-hero-gradient">
          <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-emerald-300/30 blur-[120px] animate-pulse-glow" />
          <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-violet-300/30 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          <div className="pointer-events-none absolute top-1/3 right-10 h-64 w-64 rounded-full bg-amber-200/20 blur-[100px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
          <div className="container mx-auto flex flex-col items-center px-6 text-center relative z-10">
            <div className="animate-float mb-4">
              <img src={logo} alt="Carly Maxx" className="h-24 w-24 rounded-full ring-4 ring-primary/40 box-glow object-cover" />
            </div>
            <h1 className="mb-2 font-display text-4xl font-black tracking-wider sm:text-5xl lg:text-6xl"><span className="gradient-text">MAXX TECH</span></h1>
            <p className="mb-1 font-display text-sm tracking-[0.3em] text-emerald-700 uppercase animate-pulse">by Carly Maxx</p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
              <TypingText texts={["🤖 Smart assistant for tech, tools & APIs.", "⚙️ Web solutions & automation — Available 24/7.", "🚀 WhatsApp bots deployed in 2-3 minutes.", "💡 AI-powered tools for your business."]} />
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-primary px-8 py-4 font-display text-sm font-bold tracking-wider text-primary-foreground transition-all hover:box-glow-hover">
                <MessageCircle className="h-5 w-5" />WhatsApp Channel<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={PAIR_SITE} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 border border-primary px-8 py-4 font-display text-sm font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                Pair Session<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={AI_SITE} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 border border-secondary px-8 py-4 font-display text-sm font-bold tracking-wider text-secondary-foreground transition-all hover:bg-secondary hover:text-white">
                AI Assistant<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </FadeSection>

      <ClientLogos />
      <TrustBadges />
      <LiveStatus />

      <FadeSection>
        <section className="py-10">
          <div className="container mx-auto px-6">
            <h2 className="mb-2 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">Our Products</h2>
            <p className="mx-auto mb-8 max-w-xl text-center text-gray-600">Powerful tools built by Maxx Tech for your digital needs</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* MAXXTECH AI Card */}
              <div className="relative group rounded-3xl overflow-hidden hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-600 via-violet-500 to-purple-700"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:w-60 group-hover:h-60 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative p-5 md:p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-wider">MAXXTECH AI</h3>
                      <p className="text-xs text-white/70">Powered by Maxx Tech</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed mb-4 text-sm">Advanced AI assistant for smart conversations, coding help, content creation, and automation. Available 24/7 with lightning-fast responses.</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["AI Chat", "Code Help", "Content Writer", "24/7"].map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/15 backdrop-blur">{tag}</span>
                    ))}
                  </div>
                  <a href={AI_SITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-violet-700 px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/90 transition-all hover:gap-3">
                    Try MAXXTECH AI <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* MAXX-XMD Card */}
              <div className="relative group rounded-3xl overflow-hidden hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-green-600 via-emerald-500 to-teal-700"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:w-60 group-hover:h-60 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative p-5 md:p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Bot className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-wider">MAXX-XMD</h3>
                      <p className="text-xs text-white/70">WhatsApp Bot</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed mb-4 text-sm">Powerful WhatsApp bot with group management, auto-replies, media downloads, stickers, and 100+ commands. Deploy in minutes!</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["WhatsApp", "Group Mgmt", "Auto-Reply", "50+ Cmds"].map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/15 backdrop-blur">{tag}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a href={PAIR_SITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-white text-emerald-700 px-4 py-2 rounded-xl font-bold text-sm hover:bg-white/90 transition-all">
                      <Key className="h-3 w-3" /> Session ID
                    </a>
                    <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 border-2 border-white/40 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-white/10 transition-all">
                      <Github className="h-3 w-3" /> GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Maxx Media Hub Card */}
              <div className="relative group rounded-3xl overflow-hidden hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-600 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-rose-500 via-amber-500 to-orange-600"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:w-60 group-hover:h-60 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative p-5 md:p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Music className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-wider">MEDIA HUB</h3>
                      <p className="text-xs text-white/70">Music & Media Platform</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed mb-4 text-sm">Your all-in-one media platform for music streaming, downloads, and entertainment. Access thousands of tracks and media content.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Music", "Downloads", "Streaming", "Free"].map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/15 backdrop-blur">{tag}</span>
                    ))}
                  </div>
                  <a href={MUSIC_HUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-700 px-4 py-2 rounded-xl font-bold text-sm hover:bg-white/90 transition-all">
                    <Music className="h-3 w-3" /> Open Media Hub
                  </a>
                </div>
              </div>

              {/* Bot Hosting Panel Card */}
              <div className="relative group rounded-3xl overflow-hidden hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-700"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:w-60 group-hover:h-60 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative p-5 md:p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-wider">BOT PANEL</h3>
                      <p className="text-xs text-white/70">Bot Hosting & Management</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed mb-4 text-sm">Host and manage your MAXX-XMD WhatsApp bot with our powerful SaaS panel. Monitor stats, manage sessions, and scale with ease.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Hosting", "Dashboard", "Billing", "24/7"].map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/15 backdrop-blur">{tag}</span>
                    ))}
                  </div>
                  <a href={BOT_PANEL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-cyan-700 px-4 py-2 rounded-xl font-bold text-sm hover:bg-white/90 transition-all">
                    <Zap className="h-3 w-3" /> Open Panel <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeSection>

      <FadeSection>
        <section id="services" className="py-10 bg-services-gradient section-glow-green">
          <div className="container mx-auto px-6">
            <h2 className="mb-2 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">Services</h2>
            <p className="mx-auto mb-8 max-w-xl text-center text-muted-foreground">Software, Web Design, Information Technology & Market Solutions</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="group neon-border-card bg-card overflow-hidden transition-all duration-300 hover-lift">
                  <div className="relative h-32 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40`}></div>
                    <div className="absolute bottom-3 left-4">
                      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                        <service.icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 font-display text-lg font-semibold tracking-wide text-card-foreground">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeSection>

      <ProcessTimeline />

      <FadeSection>
        <section className="py-8 bg-stats-gradient animate-gradient-shift">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "7", label: "Projects Delivered" },
                { value: "200+", label: "Happy Clients" },
                { value: "1", label: "Years Experience" },
                { value: "24/7", label: "Support Available" },
              ].map((stat) => (
                <div key={stat.label} className="text-primary-foreground">
                  <div className="font-display text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeSection>

      <FadeSection>
        <section className="py-6">
          <div className="container mx-auto px-6">
            <h2 className="mb-4 text-center font-display text-2xl font-bold tracking-wider gradient-text">Why Choose Us</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl hover-lift" style={{ background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)' }}>
                <img src="https://img.icons8.com/fluency/96/delivery.png" alt="Fast Delivery" className="w-8 h-8 shrink-0" />
                <div>
                  <div className="font-display text-sm font-bold text-emerald-800">Fast Delivery</div>
                  <div className="text-xs text-emerald-700/70">24-48hrs · Bots in 2-3 mins</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl hover-lift" style={{ background: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)' }}>
                <img src="https://img.icons8.com/fluency/96/overtime.png" alt="24/7" className="w-8 h-8 shrink-0" />
                <div>
                  <div className="font-display text-sm font-bold text-violet-800">24/7 Availability</div>
                  <div className="text-xs text-violet-700/70">Always here for you</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl hover-lift" style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' }}>
                <img src="https://img.icons8.com/fluency/96/prize.png" alt="Quality" className="w-8 h-8 shrink-0" />
                <div>
                  <div className="font-display text-sm font-bold text-amber-800">Quality Guaranteed</div>
                  <div className="text-xs text-amber-700/70">Satisfaction on every project</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl hover-lift" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)' }}>
                <img src="https://img.icons8.com/fluency/96/customer-support.png" alt="Support" className="w-8 h-8 shrink-0" />
                <div>
                  <div className="font-display text-sm font-bold text-sky-800">Dedicated Support</div>
                  <div className="text-xs text-sky-700/70">Personal team behind you</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeSection>

      {/* === CREDIBILITY === */}
      <SkillsSection />
      <FadeSection bgClassName="bg-section-dark"><About /></FadeSection>

      {/* === PORTFOLIO === */}
      <FadeSection bgClassName="bg-section-dark"><Gallery /></FadeSection>
      <BeforeAfter />

      {/* === TEAM === */}
      <FadeSection bgClassName="bg-section-slate"><Team /></FadeSection>
      <FadeSection bgClassName="bg-section-indigo"><Clients /></FadeSection>

      {/* === FAQ === */}
      <FadeSection bgClassName="bg-section-emerald"><FAQ /></FadeSection>

      <Blog />
      <URLShortener />
      <InvoiceGenerator />
      <AffiliateSystem />

      {/* === SOCIAL PROOF === */}
      <VideoSection />
      <FadeSection bgClassName="bg-testimonials-gradient">
        <section className="py-8">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-4 font-display text-2xl font-bold tracking-wider gradient-text">What Our Clients Say</h2>
          </div>
          <Testimonials />
        </section>
      </FadeSection>

      <GoogleReviews />

      {/* === MEET CARLY === */}
      <FadeSection>
        <section className="py-10 bg-about-gradient section-glow-purple">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet <span className="text-primary">Carly Maxx</span></h2>
              <div className="mb-4">
                <img src="https://files.catbox.moe/3716xg.jpg" alt="Carly Maxx" className="w-40 h-40 rounded-full mx-auto object-cover ring-4 ring-primary/50 shadow-lg" />
              </div>
              <p className="text-muted-foreground mb-4 text-lg">I'm a passionate software developer, web designer, and IT specialist from <span className="font-bold text-primary">Ruiru, Kenya</span>.</p>
              <p className="text-muted-foreground mb-6 text-lg">From automation bots to full-stack applications, I deliver cutting-edge tech services tailored to your needs. With 5+ years of experience, I've helped hundreds of clients transform their digital presence.</p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a href={MUSIC_HUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">🎵 Maxx Hub</a>
                <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">Get In Touch <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </section>
      </FadeSection>

      {/* === CONTACT === */}
      <FadeSection bgClassName="bg-section-indigo"><Contact /></FadeSection>
      <FeatureRequest />
      <LocationMap />

      {/* === FOOTER AREA === */}
      <FadeSection>
        <Newsletter />
      </FadeSection>
      <Partners />
      <SocialMediaSection />

      <FadeSection>
        <footer className="bg-footer-gradient py-5 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
              {/* Product */}
              <div>
                <h3 className="font-bold mb-2 text-xs uppercase tracking-wider text-white/70">Product</h3>
                <ul className="space-y-1 text-xs text-white/50">
                  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                  <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              {/* Products */}
              <div>
                <h3 className="font-bold mb-2 text-xs uppercase tracking-wider text-white/70">Products</h3>
                <ul className="space-y-1 text-xs text-white/50">
                  <li><a href={AI_SITE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">MAXXTECH AI</a></li>
                  <li><a href={PAIR_SITE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">MAXX-XMD Bot</a></li>
                  <li><a href={MUSIC_HUB} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Media Hub</a></li>
                </ul>
              </div>
              {/* Services */}
              <div>
                <h3 className="font-bold mb-2 text-xs uppercase tracking-wider text-white/70">Services</h3>
                <ul className="space-y-1 text-xs text-white/50">
                  <li><a href="#services" className="hover:text-white transition-colors">Web Design</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Bot Deployment</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">YouTube Boosting</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">TikTok Boosting</a></li>
                </ul>
              </div>
              {/* Tools */}
              <div>
                <h3 className="font-bold mb-2 text-xs uppercase tracking-wider text-white/70">Tools</h3>
                <ul className="space-y-1 text-xs text-white/50">
                  <li><a href={PAIR_SITE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Pair Session</a></li>
                  <li><a href={AI_SITE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AI Assistant</a></li>
                  <li><a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                  <li><a href={WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Group</a></li>
                </ul>
              </div>
              {/* Company */}
              <div>
                <h3 className="font-bold mb-2 text-xs uppercase tracking-wider text-white/70">Company</h3>
                <ul className="space-y-1 text-xs text-white/50">
                  <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              {/* Legal */}
              <div>
                <h3 className="font-bold mb-2 text-xs uppercase tracking-wider text-white/70">Legal</h3>
                <ul className="space-y-1 text-xs text-white/50">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10 pt-3 flex flex-col sm:flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <img src="https://files.catbox.moe/oepq4e.jpg" alt="Maxx Tech" className="w-6 h-6 rounded-full" />
                <span className="font-bold text-sm text-white">MAXX TECH</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {socials.map((s) => <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white flex items-center justify-center transition-all" title={s.name}><span className="[&>svg]:h-3.5 [&>svg]:w-3.5">{s.svg}</span></a>)}
              </div>
              <p className="text-xs text-white/40">© {new Date().getFullYear()} Maxx Tech. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </FadeSection>
      <BackToTop />
      <SocialProof />
      <LiveChat />
      <ReferralPopup />
      <ExitIntentPopup />
      <CookieBanner />
    </div>
  );
};

export default Index;

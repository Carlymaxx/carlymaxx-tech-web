import { useEffect, useRef, useState } from "react";
import { Bot, Code, Globe, Cpu, Wrench, MessageCircle, ArrowRight, Mail, Phone, Github, Music, Youtube, Shield, Users, Send, Twitter, Menu, X, Zap, Clock, Award, Headphones, Sparkles, Key, MapPin, Star, Trophy, Building2, Rocket, Heart, ChevronDown, ChevronUp, Play } from "lucide-react";
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
import SkillsSection from "@/components/SkillsSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import LocationMap from "@/components/LocationMap";
import AnnouncementBar from "@/components/AnnouncementBar";
import Blog from "@/components/Blog";
import TypingText from "@/components/TypingText";
import ScrollProgress from "@/components/ScrollProgress";
import GoogleReviews from "@/components/GoogleReviews";
import CookieBanner from "@/components/CookieBanner";
import URLShortener from "@/components/URLShortener";
import InvoiceGenerator from "@/components/InvoiceGenerator";
import AffiliateSystem from "@/components/AffiliateSystem";
import LiveStatus from "@/components/LiveStatus";
import FeatureRequest from "@/components/FeatureRequest";


const BOT_PANEL_URL = "https://panel.maxxtech.co.ke";
const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029Vb6XNTjAInPblhlwnm2J";
const WHATSAPP_GROUP = "https://chat.whatsapp.com/BWZOtIlbZoJ9Xt8lgxxbqQ?mode=gi_t";
const GITHUB_REPO = "https://github.com/Carlymaxx/maxxtechxmd";
const MUSIC_HUB = "https://maxxtech-musichub.vercel.app";
const PAIR_SITE = "https://pair.maxxtech.co.ke";
const AI_SITE = "https://agent.maxxtech.co.ke";
const AI_CLASSIC = "https://ai.maxxtech.co.ke";
const MOVIE_SITE = "https://movie.maxxtech.co.ke";

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
  { icon: Code, title: "Web Design", description: "Custom websites & landing pages built with modern frameworks.", color: "from-blue-500 to-cyan-500" },
  { icon: Bot, title: "Automation", description: "AI-powered bots and workflow automation for your business.", color: "from-violet-500 to-purple-500" },
  { icon: Globe, title: "Web Solutions", description: "Full-stack apps, APIs & cloud-based solutions.", color: "from-emerald-500 to-teal-500" },
  { icon: Cpu, title: "IT Support", description: "IT consulting, infrastructure setup & 24/7 tech support.", color: "from-orange-500 to-red-500" },
  { icon: Wrench, title: "Tools & APIs", description: "Third-party API integrations to supercharge your workflow.", color: "from-sky-500 to-blue-500" },
  { icon: MessageCircle, title: "24/7 Support", description: "Smart assistant for all your tech queries & digital needs.", color: "from-pink-500 to-rose-500" },
];

const products = [
  { icon: Sparkles, name: "MAXXTECH AI", href: AI_SITE, color: "from-violet-500 to-purple-600", tag: "Agent" },
  { icon: Bot, name: "MAXX-XMD Bot", href: PAIR_SITE, color: "from-emerald-500 to-teal-600", tag: "Free" },
  { icon: Music, name: "Media Hub", href: MUSIC_HUB, color: "from-amber-500 to-orange-500", tag: "Free" },
  { icon: Play, name: "Maxx Movies", href: MOVIE_SITE, color: "from-red-600 to-rose-700", tag: "HD" },
  { icon: Zap, name: "Bot Panel", href: BOT_PANEL_URL, color: "from-cyan-500 to-blue-600", tag: "Pro" },
  { icon: Sparkles, name: "AI Classic", href: AI_CLASSIC, color: "from-indigo-500 to-blue-600", tag: "Classic" },
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
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed top-10 w-full z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Maxx Tech logo" className="w-12 h-12 rounded-lg ring-2 ring-primary/50" />
          <span className="font-display text-lg font-bold tracking-wider gradient-text">MAXX TECH</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">{link.label}</a>
          ))}
          <a href={AI_CLASSIC} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">MAXXTECH AI</a>
          <a href={AI_SITE} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-violet-600 hover:text-violet-500 transition-colors font-semibold">Agent</a>
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
            <a href={AI_CLASSIC} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 border border-border px-4 py-2.5 font-body text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary">MAXXTECH AI</a>
            <a href={AI_SITE} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 border border-violet-400 px-4 py-2.5 font-body text-sm font-semibold text-violet-600 transition-all hover:bg-violet-50">Agent (AI Assistant)</a>
            <a href={MUSIC_HUB} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 border border-border px-4 py-2.5 font-body text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"><Music className="h-4 w-4" />Music Hub</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Index = () => {
  const [teamOpen, setTeamOpen] = useState(false);
  const [carlyOpen, setCarlyOpen] = useState(false);

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
              <img src={logo} alt="Carly Maxx" className="h-40 w-40 rounded-2xl ring-4 ring-primary/40 box-glow object-cover" />
            </div>
            <h1 className="mb-2 font-display text-4xl font-black tracking-wider sm:text-5xl lg:text-6xl"><span className="gradient-text">MAXX TECH</span></h1>
            <p className="mb-1 font-display text-sm tracking-[0.3em] text-emerald-700 uppercase animate-pulse">by CarlyMaxx (Calvince Ochieng) — CEO & Founder</p>
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

      {/* ── Our Products ── */}
      <FadeSection>
        <section className="py-6 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center mb-4">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/70 text-[10px] font-semibold px-3 py-1 rounded-full mb-2 tracking-widest uppercase">
                <Rocket className="h-3 w-3 text-emerald-400" /> Our Products
              </span>
              <h2 className="font-display text-xl font-black tracking-wider text-white">Everything Maxx Tech Builds</h2>
            </div>
            <div className="flex flex-wrap gap-2.5 max-w-4xl mx-auto justify-center">
              {products.map((p) => (
                <a href={p.href} target="_blank" rel="noopener noreferrer" key={p.name}
                  className="group flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 rounded-xl px-4 py-2.5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 backdrop-blur-sm">
                  <div className={`h-7 w-7 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <p.icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-bold text-sm text-white">{p.name}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/50 font-semibold tracking-wide">{p.tag}</span>
                  <ArrowRight className="h-3 w-3 text-white/30 group-hover:text-white/70 group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </FadeSection>

      {/* ── Our AI Tools ── */}
      <FadeSection>
        <section className="py-5 bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-indigo-500/20 blur-[120px]" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="flex items-center gap-2 mr-0 sm:mr-4">
                <Sparkles className="h-4 w-4 text-violet-400" />
                <span className="text-white font-display font-black text-base tracking-wide">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">AI Tools</span></span>
              </div>
              {/* MAXXTECH AI */}
              <a href={AI_SITE} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-violet-500/30 bg-white/5 backdrop-blur-sm px-4 py-3 hover:bg-white/10 hover:border-violet-400/60 transition-all hover:-translate-y-0.5">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-900/40 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Sparkles className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-white font-bold text-sm">MAXXTECH AI</span>
                    <span className="text-[9px] bg-violet-500/30 text-violet-300 border border-violet-500/40 px-1.5 py-0.5 rounded-full font-semibold">Agent</span>
                  </div>
                  <p className="text-white/40 text-[10px] font-mono">agent.maxxtech.co.ke</p>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-violet-400 group-hover:translate-x-0.5 transition-transform ml-1" />
              </a>
              {/* MAXXTECH AI Classic */}
              <a href={AI_CLASSIC} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-cyan-500/30 bg-white/5 backdrop-blur-sm px-4 py-3 hover:bg-white/10 hover:border-cyan-400/60 transition-all hover:-translate-y-0.5">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg shadow-cyan-900/40 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Bot className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-white font-bold text-sm">AI Classic</span>
                    <span className="text-[9px] bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 px-1.5 py-0.5 rounded-full font-semibold">Classic</span>
                  </div>
                  <p className="text-white/40 text-[10px] font-mono">ai.maxxtech.co.ke</p>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform ml-1" />
              </a>
            </div>
          </div>
        </section>
      </FadeSection>

      {/* ── Services ── */}
      <FadeSection>
        <section id="services" className="py-5 bg-services-gradient section-glow-green">
          <div className="container mx-auto px-6">
            <h2 className="mb-1 text-center font-display text-2xl font-bold tracking-wider gradient-text">Services</h2>
            <p className="mx-auto mb-3 max-w-xl text-center text-muted-foreground text-xs">Software · Web Design · IT · Market Solutions</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 max-w-5xl mx-auto">
              {services.map((service) => (
                <div key={service.title} className="group relative rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-3 hover:shadow-lg hover:-translate-y-0.5 transition-all text-center hover:border-primary/30">
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mx-auto mb-2 group-hover:scale-110 transition-transform shadow-sm`}>
                    <service.icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold text-xs mb-1 text-card-foreground">{service.title}</h3>
                  <p className="text-[10px] leading-relaxed text-muted-foreground line-clamp-2">{service.description}</p>
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
        <section className="py-5">
          <div className="container mx-auto px-6">
            <h2 className="mb-3 text-center font-display text-xl font-bold tracking-wider gradient-text">Why Choose Us</h2>
            <div className="flex flex-wrap justify-center gap-2.5">
              {[
                { img: "https://img.icons8.com/fluency/96/delivery.png", alt: "Fast Delivery", title: "Fast Delivery", sub: "24-48hrs · Bots in 2-3 mins", bg: "linear-gradient(135deg,#ecfdf5,#d1fae5)", tc: "text-emerald-800", sc: "text-emerald-700/70" },
                { img: "https://img.icons8.com/fluency/96/overtime.png", alt: "24/7", title: "24/7 Availability", sub: "Always here for you", bg: "linear-gradient(135deg,#ede9fe,#ddd6fe)", tc: "text-violet-800", sc: "text-violet-700/70" },
                { img: "https://img.icons8.com/fluency/96/prize.png", alt: "Quality", title: "Quality Guaranteed", sub: "Satisfaction on every project", bg: "linear-gradient(135deg,#fef3c7,#fde68a)", tc: "text-amber-800", sc: "text-amber-700/70" },
                { img: "https://img.icons8.com/fluency/96/customer-support.png", alt: "Support", title: "Dedicated Support", sub: "Personal team behind you", bg: "linear-gradient(135deg,#e0f2fe,#bae6fd)", tc: "text-sky-800", sc: "text-sky-700/70" },
              ].map((b) => (
                <div key={b.title} className="flex items-center gap-2 px-4 py-2.5 rounded-2xl hover-lift" style={{ background: b.bg }}>
                  <img src={b.img} alt={b.alt} className="w-7 h-7 shrink-0" />
                  <div>
                    <div className={`font-display text-xs font-bold ${b.tc}`}>{b.title}</div>
                    <div className={`text-[10px] ${b.sc}`}>{b.sub}</div>
                  </div>
                </div>
              ))}
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

      {/* === TEAM (accordion) === */}
      <FadeSection bgClassName="bg-section-slate">
        <section id="team" className="py-5">
          <div className="container mx-auto px-6">
            <div className="flex justify-center">
              <button
                onClick={() => setTeamOpen(!teamOpen)}
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
              >
                <Users className="h-4 w-4" />
                Meet Our Team
                {teamOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            </div>
            {teamOpen && (
              <div className="mt-5 animate-in slide-in-from-top-3 duration-300">
                <Team />
              </div>
            )}
          </div>
        </section>
      </FadeSection>
      <FadeSection bgClassName="bg-section-indigo"><Clients /></FadeSection>

      {/* === BOT HOSTING PANEL === */}
      <FadeSection>
        <section className="py-10 bg-gradient-to-br from-emerald-950/50 via-background to-violet-950/30 border-y border-primary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-3">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-3">
                  <Bot className="h-4 w-4" /> Bot Hosting Panel
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold tracking-wider gradient-text mb-2">Host Your WhatsApp Bot</h2>
                <p className="text-muted-foreground text-sm max-w-xl mx-auto">Deploy, manage and monitor your MAXX-XMD bot on our cloud infrastructure. 24/7 uptime, one-click deploy.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-3 mb-4">
                {[
                  { icon: "⚡", title: "1-Click Deploy", desc: "Paste your session ID and your bot is live in under a minute." },
                  { icon: "🤖", title: "Social Media Boost", desc: "Use your XD balance to grow Instagram, TikTok, YouTube & more." },
                  { icon: "📊", title: "Full Dashboard", desc: "Monitor, restart, stop or update your bots anytime from your dashboard." },
                ].map((f) => (
                  <div key={f.title} className="bg-card border border-border rounded-xl p-4 text-center hover-lift">
                    <div className="text-2xl mb-1.5">{f.icon}</div>
                    <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="https://panel.maxxtech.co.ke" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-primary px-6 py-3 font-display text-sm font-bold tracking-wider text-primary-foreground transition-all hover:box-glow-hover rounded-lg">
                  <Bot className="h-4 w-4" /> Open Bot Panel <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Zap className="h-3.5 w-3.5 text-yellow-500" />
                  <span>50 XD = 30 days · Pro 90 XD = 45 days</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeSection>

      {/* === FAQ === */}
      <FadeSection bgClassName="bg-section-emerald"><FAQ /></FadeSection>

      <Blog />
      <URLShortener />
      <InvoiceGenerator />
      <AffiliateSystem />

      {/* === TUTORIAL VIDEOS (accordion handled inside VideoSection) === */}
      <VideoSection />

      <FadeSection bgClassName="bg-testimonials-gradient">
        <section className="py-6">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-4 font-display text-2xl font-bold tracking-wider gradient-text">What Our Clients Say</h2>
          </div>
          <Testimonials />
        </section>
      </FadeSection>

      <GoogleReviews />

      {/* === MEET CARLY (accordion) === */}
      <FadeSection>
        <section className="py-5 bg-about-gradient section-glow-purple">
          <div className="container mx-auto px-6">
            <div className="flex justify-center">
              <button
                onClick={() => setCarlyOpen(!carlyOpen)}
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-500 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
              >
                <img src="https://files.catbox.moe/3716xg.jpg" alt="CarlyMaxx" className="w-5 h-5 rounded-full object-cover ring-1 ring-white/40" />
                Meet CarlyMaxx
                {carlyOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            </div>
            {carlyOpen && (
              <div className="mt-5 animate-in slide-in-from-top-3 duration-300 max-w-2xl mx-auto text-center">
                <div className="mb-4">
                  <img src="https://files.catbox.moe/3716xg.jpg" alt="CarlyMaxx" className="w-32 h-32 rounded-2xl mx-auto object-cover ring-4 ring-primary/50 shadow-lg" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  <span className="text-primary">CarlyMaxx</span> <span className="text-muted-foreground text-base font-normal">(Calvince Ochieng)</span>
                </h2>
                <p className="text-muted-foreground mb-3">I'm a passionate software developer, web designer, and IT specialist from <span className="font-bold text-primary">Ruiru, Kenya</span>.</p>
                <p className="text-muted-foreground mb-5">From automation bots to full-stack applications, I deliver cutting-edge tech services tailored to your needs. With 5+ years of experience, I've helped hundreds of clients transform their digital presence.</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href={MUSIC_HUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">🎵 Maxx Hub</a>
                  <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">Get In Touch <ArrowRight className="h-4 w-4" /></a>
                </div>
              </div>
            )}
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
              <div>
                <h3 className="font-bold mb-2 text-xs uppercase tracking-wider text-white/70">Products</h3>
                <ul className="space-y-1 text-xs text-white/50">
                  <li><a href={AI_CLASSIC} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">MAXXTECH AI</a></li>
                  <li><a href={AI_SITE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AI Agent</a></li>
                  <li><a href={PAIR_SITE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">MAXX-XMD Bot</a></li>
                  <li><a href={MUSIC_HUB} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Media Hub</a></li>
                  <li><a href={MOVIE_SITE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Maxx Movies</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-xs uppercase tracking-wider text-white/70">Services</h3>
                <ul className="space-y-1 text-xs text-white/50">
                  <li><a href="#services" className="hover:text-white transition-colors">Web Design</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Bot Deployment</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">YouTube Boosting</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">TikTok Boosting</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-xs uppercase tracking-wider text-white/70">Tools</h3>
                <ul className="space-y-1 text-xs text-white/50">
                  <li><a href={PAIR_SITE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Pair Session</a></li>
                  <li><a href={AI_SITE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AI Agent</a></li>
                  <li><a href={AI_CLASSIC} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">MAXXTECH AI</a></li>
                  <li><a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                  <li><a href={WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Group</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-xs uppercase tracking-wider text-white/70">Company</h3>
                <ul className="space-y-1 text-xs text-white/50">
                  <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/carlymaxx" className="hover:text-white transition-colors">CarlyMaxx (CEO)</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
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
      <LiveChat />
      <CookieBanner />
    </div>
  );
};

export default Index;

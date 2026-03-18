import { useEffect, useRef, useState } from "react";
import { Bot, Code, Globe, Cpu, Wrench, MessageCircle, ArrowRight, Mail, Phone, Github, Music, Youtube, Shield, Users, Flame, Send, Twitter, Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import Gallery from "@/components/Gallery";

const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029Vb6XNTjAInPblhlwnm2J";
const GITHUB_REPO = "https://github.com/Carlymaxx/maxxtechxmd";
const MUSIC_HUB = "https://maxxtech-musichub.vercel.app";
const ORDER_WA = "https://wa.me/254725979273?text=Hey%20Maxx%20I%20need%20your%20help%20here";

const TELEGRAM = "https://t.me/maxxtechgram";
const TIKTOK = "https://www.tiktok.com/@squillahmaxx";
const X_TWITTER = "https://x.com/maxx1470";
const YOUTUBE = "https://www.youtube.com/@MaxxTechxmd";

const socialLinks = [
  { icon: MessageCircle, label: "WhatsApp", href: WHATSAPP_CHANNEL },
  { icon: Youtube, label: "YouTube", href: YOUTUBE },
  { icon: Globe, label: "TikTok", href: TIKTOK },
  { icon: Send, label: "Telegram", href: TELEGRAM },
  { icon: Twitter, label: "X Twitter", href: X_TWITTER },
  { icon: Github, label: "GitHub", href: GITHUB_REPO },
];

const services = [
  { icon: Code, title: "Web Design", description: "Custom websites & landing pages built with modern frameworks and stunning UI." },
  { icon: Bot, title: "Smart Automation", description: "AI-powered bots and workflow automation to streamline your digital operations." },
  { icon: Globe, title: "Web Solutions", description: "Full-stack web applications, APIs, and cloud-based solutions for your business." },
  { icon: Cpu, title: "Information Technology", description: "IT consulting, infrastructure setup, and technical support around the clock." },
  { icon: Wrench, title: "Tools & APIs", description: "Integration of powerful tools and third-party APIs to supercharge your workflow." },
  { icon: MessageCircle, title: "24/7 Support", description: "Always available smart assistant for all your tech queries and digital needs." },
];

const premiumServices = [
  { icon: Bot, title: "Bot Deployment", description: "Get a fully functional WhatsApp bot deployed for your group or business.", price: "50 KES", hot: true },
  { icon: Youtube, title: "YouTube Boosting", description: "Boost your YouTube channel with subscribers, views, and engagement.", price: "260 KES" },
  { icon: Globe, title: "TikTok Boosting", description: "Go viral on TikTok with boosted views, followers, and likes.", price: "120 KES" },
  { icon: Shield, title: "Account Security", description: "Protect your social media accounts with advanced security setups.", price: "440 KES" },
];

const FadeSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
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
  return <div ref={ref} className={`transition-all duration-700 ease-out opacity-0 translate-y-[30px] ${className}`}>{children}</div>;
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Maxx Tech logo" className="w-10 h-10 rounded-full ring-2 ring-primary/50" />
          <span className="font-display text-lg font-bold tracking-wider gradient-text">MAXX TECH</span>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="border border-border p-2.5 text-foreground transition-all hover:border-primary/40 hover:text-primary" aria-label="Toggle menu">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {menuOpen && (
        <div className="container mx-auto flex gap-4 px-6 pb-4 animate-in slide-in-from-top-2 duration-200">
          <div className="ml-4 w-0.5 bg-primary/40 rounded-full" />
          <div className="flex flex-col gap-2 flex-1">
            <a href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 border border-border px-4 py-2.5 font-body text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary">Owner</a>
            <a href={MUSIC_HUB} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 border border-border px-4 py-2.5 font-body text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"><Music className="h-4 w-4" />Music Hub</a>
            <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 border border-border px-4 py-2.5 font-body text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"><Github className="h-4 w-4" />Repo</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Index = () => {
  const speedLines = Array.from({ length: 20 }, (_, i) => ({ id: i, top: `${Math.random() * 100}%`, width: `${100 + Math.random() * 300}px`, duration: `${1.5 + Math.random() * 3}s`, delay: `${Math.random() * 5}s`, opacity: 0.2 + Math.random() * 0.5 }));

  return (
    <div className="min-h-screen bg-background relative">
      <div className="light-rays" />
      <div className="speed-lines">
        {speedLines.map((line) => <div key={line.id} className="speed-line" style={{ top: line.top, width: line.width, animationDuration: line.duration, animationDelay: line.delay, opacity: line.opacity }} />)}
      </div>
      <NavBar />

      <FadeSection>
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
          <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
          <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          <div className="container mx-auto flex flex-col items-center px-6 text-center">
            <div className="animate-float mb-8">
              <img src={logo} alt="Carly Maxx" className="h-32 w-32 rounded-full ring-4 ring-primary/40 box-glow object-cover" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-black tracking-wider sm:text-6xl lg:text-7xl"><span className="gradient-text">MAXX TECH</span></h1>
            <p className="mb-2 font-display text-sm tracking-[0.3em] text-muted-foreground uppercase">by Carly Maxx</p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground sm:text-xl">🤖 Smart assistant for tech, tools & APIs.<br />⚙️ Web solutions & automation — Available 24/7 for your digital needs.</p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-primary px-8 py-4 font-display text-sm font-bold tracking-wider text-primary-foreground transition-all hover:box-glow-hover">
                <MessageCircle className="h-5 w-5" />WhatsApp Channel<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </FadeSection>

      <FadeSection>
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">Services</h2>
            <p className="mx-auto mb-16 max-w-xl text-center text-muted-foreground">Software, Web Design, Information Technology & Market Solutions</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="group neon-border-card bg-card p-8 transition-all duration-300">
                  <service.icon className="mb-5 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                  <h3 className="mb-3 font-display text-lg font-semibold tracking-wide text-card-foreground">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeSection>

      <FadeSection>
        <section className="border-t border-border py-24">
          <div className="container mx-auto px-6">
            <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">OUR SERVICES</h2>
            <p className="mx-auto mb-16 max-w-xl text-center text-muted-foreground">Premium digital services at unbeatable prices. Fast delivery, real results.</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {premiumServices.map((service) => (
                <div key={service.title} className="group relative neon-border-card bg-card p-8 transition-all duration-300">
                  {service.hot && <span className="absolute -top-3 right-4 flex items-center gap-1 bg-primary px-3 py-1 text-xs font-bold text-primary-foreground"><Flame className="h-3 w-3" />HOT DEAL</span>}
                  <service.icon className="mb-5 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                  <h3 className="mb-3 font-display text-lg font-semibold tracking-wide text-card-foreground">{service.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-primary">{service.price}</span>
                    <a href={ORDER_WA} target="_blank" rel="noopener noreferrer" className="group/btn flex items-center gap-1 bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition-all hover:box-glow-hover">Order Now<ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" /></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeSection>

      <FadeSection><About /></FadeSection>
      <FadeSection><Clients /></FadeSection>
      <FadeSection><Pricing /></FadeSection>
      <FadeSection><Team /></FadeSection>
      <FadeSection><Gallery /></FadeSection>
      <FadeSection><FAQ /></FadeSection>
      <FadeSection><Contact /></FadeSection>

      <FadeSection>
        <section className="border-t border-border py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-8 font-display text-2xl font-bold tracking-wider gradient-text">What Our Clients Say</h2>
          </div>
          <Testimonials />
        </section>
      </FadeSection>

      <FadeSection>
        <footer className="border-t border-border py-8">
          <div className="container mx-auto flex flex-col items-center gap-4 px-6 text-center">
            <span className="font-display text-sm tracking-wider gradient-text">MAXX TECH</span>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" title={link.label}><link.icon className="h-5 w-5" /></a>)}
            </div>
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Maxx Tech. All rights reserved.</p>
          </div>
        </footer>
      </FadeSection>
    </div>
  );
};

export default Index;

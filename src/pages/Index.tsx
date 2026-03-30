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
import Newsletter from "@/components/Newsletter";
import LiveChat from "@/components/LiveChat";


const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029Vb6XNTjAInPblhlwnm2J";
const WHATSAPP_GROUP = "https://chat.whatsapp.com/BWZOtIlbZoJ9Xt8lgxxbqQ?mode=gi_t";
const GITHUB_REPO = "https://github.com/Carlymaxx/maxxtechxmd";
const MUSIC_HUB = "https://maxxtech-musichub.vercel.app";
const ORDER_WA = "https://wa.me/254725979273?text=Hey%20Maxx%20I%20need%20your%20help%20here";
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
    <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-xl">
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
    <div className="min-h-screen bg-background relative">
      <div className="light-rays" />
      <div className="speed-lines">
        {speedLines.map((line) => <div key={line.id} className="speed-line" style={{ top: line.top, width: line.width, animationDuration: line.duration, animationDelay: line.delay, opacity: line.opacity }} />)}
      </div>
      <NavBar />

      <FadeSection>
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 bg-hero-gradient">
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

      <FadeSection>
        <section id="services" className="py-24 bg-services-gradient section-glow-green">
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
        <section className="py-24 bg-premium-gradient section-glow-purple">
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

      <FadeSection bgClassName="bg-section-dark"><About /></FadeSection>
      <FadeSection bgClassName="bg-section-indigo"><Clients /></FadeSection>
      <FadeSection bgClassName="bg-section-teal"><Pricing /></FadeSection>
      <FadeSection bgClassName="bg-section-slate"><Team /></FadeSection>
      <FadeSection bgClassName="bg-section-dark"><Gallery /></FadeSection>
      <FadeSection bgClassName="bg-section-emerald"><FAQ /></FadeSection>
      <FadeSection bgClassName="bg-section-indigo"><Contact /></FadeSection>

      <FadeSection bgClassName="bg-testimonials-gradient">
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-8 font-display text-2xl font-bold tracking-wider gradient-text">What Our Clients Say</h2>
          </div>
          <Testimonials />
        </section>
      </FadeSection>

      <FadeSection>
        <section id="about" className="py-20 bg-about-gradient section-glow-purple">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet <span className="text-primary">Carly Maxx</span></h2>
              <div className="mb-6">
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

      <FadeSection>
        <Newsletter />
      </FadeSection>

      <FadeSection>
        <footer className="bg-footer-gradient py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {/* Product */}
              <div>
                <h3 className="font-bold mb-4">Product</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#services" className="hover:text-primary transition-colors">Home</a></li>
                  <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                  <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                  <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
                  <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                </ul>
              </div>
              {/* Tools */}
              <div>
                <h3 className="font-bold mb-4">Tools</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href={PAIR_SITE} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Pair Session</a></li>
                  <li><a href={AI_SITE} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">AI Assistant</a></li>
                  <li><a href={MUSIC_HUB} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Maxx Hub</a></li>
                  <li><a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
                  <li><a href={WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp Group</a></li>
                </ul>
              </div>
              {/* Company */}
              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                  <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
                  <li><a href="#contact" className="hover:text-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                </ul>
              </div>
              {/* Legal */}
              <div>
                <h3 className="font-bold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
                </ul>
              </div>
            </div>
            
            {/* Bottom Footer */}
            <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src="https://files.catbox.moe/oepq4e.jpg" alt="Maxx Tech" className="w-8 h-8 rounded-full" />
                <span className="font-bold gradient-text">MAXX TECH</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title={link.label}><link.icon className="h-5 w-5" /></a>)}
              </div>
              <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Maxx Tech. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </FadeSection>
      <LiveChat />
    </div>
  );
};

export default Index;

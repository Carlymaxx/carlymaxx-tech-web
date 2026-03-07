import { useEffect, useRef, useState } from "react";
import { Bot, Code, Globe, Cpu, Wrench, MessageCircle, ArrowRight, Mail, Phone, Github, Music, Youtube, Shield, Users, Flame, Send, Twitter, Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

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

const premiumServices = [
  {
    icon: Bot,
    title: "Bot Deployment",
    description: "Get a fully functional WhatsApp bot deployed for your group or business. Automate tasks, manage members, and more.",
    price: "50 KES",
    hot: true,
  },
  {
    icon: Youtube,
    title: "YouTube Boosting",
    description: "Boost your YouTube channel with subscribers, views, and engagement to grow your audience fast.",
    price: "From 100 KES",
  },
  {
    icon: Globe,
    title: "TikTok Boosting",
    description: "Go viral on TikTok with boosted views, followers, and likes. Reach millions of users worldwide.",
    price: "From 100 KES",
  },
  {
    icon: Users,
    title: "Group Management",
    description: "Professional WhatsApp group management with bots, moderation tools, and engagement features.",
    price: "Custom",
  },
  {
    icon: Shield,
    title: "Account Security",
    description: "Protect your social media accounts with advanced security setups and recovery assistance.",
    price: "From 200 KES",
  },
];

const services = [
  {
    icon: Code,
    title: "Web Design",
    description: "Custom websites & landing pages built with modern frameworks and stunning UI.",
  },
  {
    icon: Bot,
    title: "Smart Automation",
    description: "AI-powered bots and workflow automation to streamline your digital operations.",
  },
  {
    icon: Globe,
    title: "Web Solutions",
    description: "Full-stack web applications, APIs, and cloud-based solutions for your business.",
  },
  {
    icon: Cpu,
    title: "Information Technology",
    description: "IT consulting, infrastructure setup, and technical support around the clock.",
  },
  {
    icon: Wrench,
    title: "Tools & APIs",
    description: "Integration of powerful tools and third-party APIs to supercharge your workflow.",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "Always available smart assistant for all your tech queries and digital needs.",
  },
];

const FadeSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        el.style.opacity = entry.isIntersecting ? "1" : "0";
        el.style.transform = entry.isIntersecting ? "translateY(0)" : "translateY(30px)";
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out opacity-0 translate-y-[30px] ${className}`}>
      {children}
    </div>
  );
};

const Index = () => {
  const speedLines = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    width: `${100 + Math.random() * 300}px`,
    duration: `${1.5 + Math.random() * 3}s`,
    delay: `${Math.random() * 5}s`,
    opacity: 0.2 + Math.random() * 0.5,
  }));

  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated light rays */}
      <div className="light-rays" />
      <div className="speed-lines">
        {speedLines.map((line) => (
          <div
            key={line.id}
            className="speed-line"
            style={{
              top: line.top,
              width: line.width,
              animationDuration: line.duration,
              animationDelay: line.delay,
              opacity: line.opacity,
            }}
          />
        ))}
      </div>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Maxx Tech logo" className="w-10 h-10 rounded-full ring-2 ring-primary/50" />
            <span className="font-display text-lg font-bold tracking-wider gradient-text">MAXX TECH</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 font-body text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"
            >
              Owner
            </a>
            <a
              href={MUSIC_HUB}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 font-body text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"
            >
              <Music className="h-4 w-4" />
              Music Hub
            </a>
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 font-body text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"
            >
              <Github className="h-4 w-4" />
              Repo
            </a>
          </div>
        </div>
      </nav>

      <FadeSection>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        {/* Glow orbs */}
        <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="container mx-auto flex flex-col items-center px-6 text-center">
          <div className="animate-float mb-8">
            <img
              src={logo}
              alt="Carly Maxx"
              className="h-32 w-32 rounded-full ring-4 ring-primary/40 box-glow object-cover"
            />
          </div>
          <h1 className="mb-4 font-display text-4xl font-black tracking-wider sm:text-6xl lg:text-7xl">
            <span className="gradient-text">MAXX TECH</span>
          </h1>
          <p className="mb-2 font-display text-sm tracking-[0.3em] text-muted-foreground uppercase">
            by Carly Maxx
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground sm:text-xl">
            🤖 Smart assistant for tech, tools & APIs.
            <br />
            ⚙️ Web solutions & automation — Available 24/7 for your digital needs.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href={WHATSAPP_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-display text-sm font-bold tracking-wider text-primary-foreground transition-all hover:box-glow-hover"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Channel
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
      </FadeSection>

      <FadeSection>
      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">
            Services
          </h2>
          <p className="mx-auto mb-16 max-w-xl text-center text-muted-foreground">
            Software, Web Design, Information Technology & Market Solutions
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group neon-border-card rounded-xl bg-card p-8 transition-all duration-300"
              >
                <service.icon className="mb-5 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-3 font-display text-lg font-semibold tracking-wide text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeSection>

      <FadeSection>
      {/* Premium Services / Pricing */}
      <section className="border-t border-border py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">
            OUR SERVICES
          </h2>
          <p className="mx-auto mb-16 max-w-xl text-center text-muted-foreground">
            Premium digital services at unbeatable prices. Fast delivery, real results.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {premiumServices.map((service) => (
              <div
                key={service.title}
                className="group relative neon-border-card rounded-xl bg-card p-8 transition-all duration-300"
              >
                {service.hot && (
                  <span className="absolute -top-3 right-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    <Flame className="h-3 w-3" /> HOT DEAL
                  </span>
                )}
                <service.icon className="mb-5 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-3 font-display text-lg font-semibold tracking-wide text-card-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-bold text-primary">{service.price}</span>
                  <a
                    href={ORDER_WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition-all hover:box-glow-hover"
                  >
                    Order Now
                    <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeSection>

      <FadeSection>
      {/* About */}
      <section className="border-t border-border py-24">
        <div className="container mx-auto flex flex-col items-center gap-10 px-6 md:flex-row md:gap-16">
          <img
            src={logo}
            alt="Carly Maxx"
            className="h-48 w-48 rounded-2xl object-cover ring-2 ring-primary/30 box-glow"
          />
          <div className="max-w-lg">
            <h2 className="mb-4 font-display text-3xl font-bold tracking-wider gradient-text">
              About Carly Maxx
            </h2>
            <p className="mb-4 leading-relaxed text-secondary-foreground">
              Software developer, web designer, and IT specialist with a passion for building intelligent digital solutions. From automation bots to full-stack applications, Carly Maxx delivers cutting-edge tech services tailored to your needs.
            </p>
            <p className="text-sm text-muted-foreground">
              Available 24/7 · Always innovating · Building the future
            </p>
          </div>
        </div>
      </section>
      </FadeSection>

      <FadeSection>
      {/* CTA */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto flex flex-col items-center px-6 text-center">
          <h2 className="mb-6 font-display text-3xl font-bold tracking-wider gradient-text sm:text-4xl">
            Get Connected
          </h2>
          <p className="mb-8 max-w-md text-muted-foreground">
            Join the WhatsApp channel for the latest tech updates, tools, and exclusive content.
          </p>

          {/* Contact Info */}
          <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
            <a href="mailto:maxxtechxmd@gmail.com" className="flex items-center gap-2 text-sm text-secondary-foreground transition-colors hover:text-primary">
              <Mail className="h-4 w-4 text-primary" />
              maxxtechxmd@gmail.com
            </a>
            <a href="tel:+254725979273" className="flex items-center gap-2 text-sm text-secondary-foreground transition-colors hover:text-primary">
              <Phone className="h-4 w-4 text-primary" />
              +254 725 979 273
            </a>
          </div>

          {/* Social Links Grid */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary hover:box-glow"
              >
                <link.icon className="h-4 w-4 text-primary" />
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl bg-primary px-10 py-4 font-display text-sm font-bold tracking-wider text-primary-foreground transition-all hover:box-glow-hover"
          >
            <MessageCircle className="h-5 w-5" />
            Join WhatsApp Channel
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
      </FadeSection>

      <FadeSection>
      {/* FAQ */}
      <section className="border-t border-border py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">
            FAQ
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
            Frequently asked questions about our services
          </p>
          <div className="mx-auto max-w-2xl space-y-4">
            {[
              { q: "How do I order a service?", a: "Simply click the 'Order Now' button on any service card and you'll be connected to us on WhatsApp to discuss your needs." },
              { q: "How long does bot deployment take?", a: "Most bots are deployed within 1-2 hours after payment confirmation. Complex setups may take up to 24 hours." },
              { q: "What payment methods do you accept?", a: "We accept M-Pesa, PayPal, and cryptocurrency. Contact us for other payment options." },
              { q: "Do you offer refunds?", a: "Yes, we offer a full refund if we're unable to deliver the service as promised. Partial refunds apply for partially completed work." },
              { q: "Can I get a custom package?", a: "Absolutely! Reach out via WhatsApp and we'll create a tailored package that fits your exact needs and budget." },
            ].map((faq, i) => (
              <details
                key={i}
                className="group neon-border-card rounded-xl bg-card overflow-hidden"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between p-6 font-display text-sm font-semibold tracking-wide text-card-foreground">
                  {faq.q}
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      </FadeSection>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto flex flex-col items-center gap-4 px-6 text-center">
          <span className="font-display text-sm tracking-wider gradient-text">MAXX TECH</span>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                title={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Maxx Tech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

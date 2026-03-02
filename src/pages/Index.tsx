import { Bot, Code, Globe, Cpu, Wrench, MessageCircle, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpg";

const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029Vb6XNTjAInPblhlwnm2J";

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-bg">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Maxx Tech logo" className="w-10 h-10 rounded-full ring-2 ring-primary/50" />
            <span className="font-display text-lg font-bold tracking-wider gradient-text">MAXX TECH</span>
          </div>
          <a
            href={WHATSAPP_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-all hover:box-glow-hover"
          >
            <MessageCircle className="h-4 w-4" />
            Join Channel
          </a>
        </div>
      </nav>

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
                className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:box-glow"
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

      {/* CTA */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto flex flex-col items-center px-6 text-center">
          <h2 className="mb-6 font-display text-3xl font-bold tracking-wider gradient-text sm:text-4xl">
            Get Connected
          </h2>
          <p className="mb-8 max-w-md text-muted-foreground">
            Join the WhatsApp channel for the latest tech updates, tools, and exclusive content.
          </p>
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

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto flex flex-col items-center gap-2 px-6 text-center">
          <span className="font-display text-sm tracking-wider gradient-text">MAXX TECH</span>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Carly Maxx. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "MaxxTech Music Hub",
    category: "Web Application",
    description: "A full-featured music streaming and download platform with search, playlists, and a sleek dark UI.",
    link: "https://maxxtech-musichub.vercel.app",
    tags: ["React", "Vercel", "API"],
  },
  {
    title: "WhatsApp Bot System",
    category: "Automation",
    description: "Multi-purpose WhatsApp bot with group management, auto-responses, media downloads, and admin controls.",
    tags: ["Node.js", "Baileys", "Bot"],
  },
  {
    title: "MaxxTechxmd Bot",
    category: "Open Source",
    description: "Open-source WhatsApp bot framework on GitHub with 100+ commands, plugin system, and easy deployment.",
    link: "https://github.com/Carlymaxx/maxxtechxmd",
    tags: ["GitHub", "Open Source", "Bot"],
  },
  {
    title: "Social Media Growth Tools",
    category: "Digital Marketing",
    description: "Custom tools and strategies for YouTube, TikTok, and Instagram growth including analytics and engagement boosting.",
    tags: ["Marketing", "Growth", "Analytics"],
  },
];

const Portfolio = () => (
  <section className="border-t border-border py-24">
    <div className="container mx-auto px-6">
      <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">
        Our Projects
      </h2>
      <p className="mx-auto mb-16 max-w-xl text-center text-muted-foreground">
        A showcase of work we've built and shipped
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group neon-border-card bg-card p-8 transition-all duration-300"
          >
            <span className="mb-3 inline-block font-display text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
              {p.category}
            </span>
            <h3 className="mb-3 font-display text-lg font-semibold tracking-wide text-card-foreground">
              {p.title}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <div className="mb-5 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-2.5 py-1 text-[10px] font-medium tracking-wider text-muted-foreground uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                <ExternalLink className="h-4 w-4" />
                View Project
                <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;

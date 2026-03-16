import { Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "How to Deploy a WhatsApp Bot in Under 5 Minutes",
    excerpt: "A step-by-step guide to getting your own WhatsApp bot up and running using MaxxTechxmd framework.",
    date: "Mar 10, 2026",
    readTime: "3 min read",
    category: "Tutorial",
  },
  {
    title: "Top 5 Tools Every Content Creator Needs in 2026",
    excerpt: "From video editing to analytics, these are the must-have tools for growing your audience this year.",
    date: "Mar 5, 2026",
    readTime: "4 min read",
    category: "Tech Tips",
  },
  {
    title: "Why Your Business Needs a WhatsApp Bot",
    excerpt: "Discover how automation can save you hours, boost engagement, and increase your revenue.",
    date: "Feb 28, 2026",
    readTime: "5 min read",
    category: "Business",
  },
];

const ORDER_WA = "https://wa.me/254725979273?text=Hey%20Maxx%20I%20want%20to%20learn%20more%20about%20this";

const Blog = () => (
  <section className="border-t border-border py-24">
    <div className="container mx-auto px-6">
      <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">
        Blog & Insights
      </h2>
      <p className="mx-auto mb-16 max-w-xl text-center text-muted-foreground">
        Tech tips, tutorials, and industry insights
      </p>
      <div className="mx-auto grid max-w-4xl gap-6">
        {posts.map((post) => (
          <a
            key={post.title}
            href={ORDER_WA}
            target="_blank"
            rel="noopener noreferrer"
            className="group neon-border-card bg-card p-8 transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-6"
          >
            <div className="flex-1">
              <span className="mb-2 inline-block font-display text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
                {post.category}
              </span>
              <h3 className="mb-2 font-display text-base font-semibold tracking-wide text-card-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1 shrink-0" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;

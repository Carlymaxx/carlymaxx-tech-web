import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Brian K.",
    role: "Business Owner",
    text: "Maxx Tech deployed a WhatsApp bot for my business in under 5 minutes. My customer response time dropped by 80%. Absolutely incredible service!",
    rating: 5,
  },
  {
    name: "Amina W.",
    role: "Content Creator",
    text: "The YouTube and TikTok boosting services are legit. My channel grew from 200 to 5K subscribers in just two weeks. Highly recommend!",
    rating: 5,
  },
  {
    name: "James M.",
    role: "Startup Founder",
    text: "Carly built our entire web app from scratch. Clean code, modern design, and delivered ahead of schedule. Will definitely work with him again.",
    rating: 5,
  },
  {
    name: "Lucy N.",
    role: "Community Manager",
    text: "Group management has never been easier. The bot handles moderation, welcomes new members, and keeps everything organized 24/7.",
    rating: 4,
  },
];

const Testimonials = () => (
  <section className="border-t border-border py-24">
    <div className="container mx-auto px-6">
      <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">
        What Clients Say
      </h2>
      <p className="mx-auto mb-16 max-w-xl text-center text-muted-foreground">
        Real feedback from real people we've worked with
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="group neon-border-card bg-card p-8 transition-all duration-300"
          >
            <Quote className="mb-4 h-6 w-6 text-primary opacity-40" />
            <p className="mb-6 text-sm leading-relaxed text-secondary-foreground italic">
              "{t.text}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-sm font-semibold tracking-wide text-card-foreground">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < t.rating ? "fill-primary text-primary" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Brian K.", role: "Business Owner", text: "Maxx Tech deployed a WhatsApp bot for my business in under 5 minutes. My customer response time dropped by 80%. Absolutely incredible service!", rating: 5 },
  { name: "Amina W.", role: "Content Creator", text: "The YouTube and TikTok boosting services are legit. My channel grew from 200 to 5K subscribers in just two weeks. Highly recommend!", rating: 5 },
  { name: "James M.", role: "Startup Founder", text: "Carly built our entire web app from scratch. Clean code, modern design, and delivered ahead of schedule. Will definitely work with him again.", rating: 5 },
  { name: "Lucy N.", role: "Community Manager", text: "Group management has never been easier. The bot handles moderation, welcomes new members, and keeps everything organized 24/7.", rating: 4 },
  { name: "David O.", role: "Online Store Owner", text: "Got my e-commerce website done in 3 days. Professional work at an affordable price. My sales increased by 40%!", rating: 5 },
  { name: "Sarah K.", role: "Digital Marketer", text: "Best bot deployment service in Kenya. Fast, reliable, and great customer support. Five stars!", rating: 5 },
];

const Testimonials = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="flex animate-scroll gap-6">
        {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="flex-shrink-0 w-80 sm:w-96 neon-border-card bg-card p-6 rounded-xl">
            <Quote className="h-6 w-6 text-primary opacity-40 mb-3" />
            <p className="text-sm leading-relaxed text-secondary-foreground italic mb-4">"{t.text}"</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, idx) => (
                  <Star key={idx} className={`h-3.5 w-3.5 ${idx < t.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;

import { Star } from "lucide-react";

const reviews = [
  { name: "Brian Ochieng", role: "Business Owner", text: "Maxx Tech built my e-commerce site in just 2 days. The bot they deployed handles all my customer inquiries automatically. Amazing work!", rating: 5 },
  { name: "Amina Hassan", role: "Content Creator", text: "YouTube boosting service is legit! My channel grew from 200 to 2000 subscribers in one week. Highly recommend Maxx Tech.", rating: 5 },
  { name: "James Mwangi", role: "Group Admin", text: "The WhatsApp bot manages my 5000-member group perfectly. Auto-replies, moderation, media downloads — everything works smoothly.", rating: 5 },
  { name: "Lucy Njeri", role: "Startup Founder", text: "Professional, fast, and affordable. Carly Maxx understood exactly what I needed and delivered beyond expectations. 10/10!", rating: 5 },
  { name: "David Kipchoge", role: "Musician", text: "Got my website and WhatsApp bot deployed the same day. The team is incredibly responsive. Best tech service in Kenya!", rating: 5 },
  { name: "Sarah Akinyi", role: "Influencer", text: "TikTok boosting worked like magic. Went viral on my first boosted video. Maxx Tech knows what they're doing!", rating: 5 },
];

const GoogleReviews = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <svg viewBox="0 0 24 24" className="h-8 w-8"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          <h2 className="font-display text-3xl font-bold tracking-wider">Google Reviews</h2>
        </div>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
        </div>
        <p className="text-gray-500 text-sm">5.0 out of 5 — based on {reviews.length * 10}+ reviews</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {reviews.map((review) => (
          <div key={review.name} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">"{review.text}"</p>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 to-violet-500 flex items-center justify-center text-white font-bold text-xs">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-sm">{review.name}</p>
                <p className="text-[10px] text-gray-400">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GoogleReviews;

import { useState } from "react";
import { Gift, Copy, Check, Users, TrendingUp, DollarSign, Share2 } from "lucide-react";

const AffiliateSystem = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://maxxtech.co.ke?ref=YOUR_CODE";
  const stats = [
    { icon: Users, label: "Total Referrals", value: "24", color: "text-emerald-600" },
    { icon: TrendingUp, label: "Conversion Rate", value: "68%", color: "text-violet-600" },
    { icon: DollarSign, label: "Earnings", value: "230 KES", color: "text-amber-600" },
  ];

  const copy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white">
                <Gift className="h-6 w-6" />
              </div>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-3">Affiliate Program</h2>
            <p className="text-gray-500">Earn 10% commission for every referral. Share your link and get paid!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-5 text-center shadow-sm">
                <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-2`} />
                <p className="font-display text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            <h3 className="font-bold mb-4">Your Referral Link</h3>
            <div className="flex gap-3 mb-6">
              <input type="text" value={referralLink} readOnly className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm bg-gray-50" />
              <button onClick={copy} className="flex items-center gap-1 bg-emerald-600 text-white px-4 py-3 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors">
                {copied ? <><Check className="h-4 w-4" /> Copied</> : <><Copy className="h-4 w-4" /> Copy</>}
              </button>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              <a href={`https://wa.me/?text=Join%20Maxx%20Tech%20-%20best%20tech%20services%20in%20Kenya!%20${encodeURIComponent(referralLink)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl font-bold text-sm hover:bg-green-600 transition-colors">
                <Share2 className="h-4 w-4" /> WhatsApp
              </a>
              <a href={`https://twitter.com/intent/tweet?text=Check%20out%20Maxx%20Tech!&url=${encodeURIComponent(referralLink)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gray-800 text-white py-3 rounded-xl font-bold text-sm hover:bg-gray-900 transition-colors">
                <Share2 className="h-4 w-4" /> Twitter
              </a>
              <a href={`https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=Check%20out%20Maxx%20Tech!`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-sky-500 text-white py-3 rounded-xl font-bold text-sm hover:bg-sky-600 transition-colors">
                <Share2 className="h-4 w-4" /> Telegram
              </a>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-xl">
              <p className="text-sm text-amber-800"><strong>How it works:</strong> Share your referral link. When someone orders through your link, you earn 10% of their payment. Earnings are paid weekly via M-Pesa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSystem;

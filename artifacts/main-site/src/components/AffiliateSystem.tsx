import { useState } from "react";
import { Gift, Copy, Check, Share2, ExternalLink } from "lucide-react";

const AffiliateSystem = () => {
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);

  const trimmed = code.trim().toUpperCase();
  const referralLink = trimmed
    ? `https://panel.maxxtech.co.ke/register?ref=${trimmed}`
    : "https://panel.maxxtech.co.ke/register?ref=YOURCODE";

  const copy = () => {
    if (!trimmed) return;
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const waText = encodeURIComponent(
    `Join MAXX-XMD Bot Panel — deploy your own WhatsApp bot in 2-3 mins! Use my link: ${referralLink}`
  );

  return (
    <section className="py-8 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white">
                <Gift className="h-5 w-5" />
              </div>
            </div>
            <h2 className="font-display text-2xl font-bold tracking-wider gradient-text mb-1">Affiliate Program</h2>
            <p className="text-gray-500 text-sm">Earn 10% commission for every referral — paid weekly via M-Pesa</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5">
            {/* Step 1: Get code */}
            <div className="mb-5 p-3 bg-amber-50 rounded-xl flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">1</span>
              <div>
                <p className="text-sm font-semibold text-amber-900">Get your referral code</p>
                <p className="text-xs text-amber-700 mt-0.5">
                  Sign in to the Bot Panel → Settings → copy your unique referral code.
                </p>
                <a
                  href="https://panel.maxxtech.co.ke/settings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-amber-600 hover:text-amber-800 underline"
                >
                  Open Panel Settings <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Step 2: Enter code */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                <span className="inline-flex items-center gap-1">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center">2</span>
                  Enter your referral code
                </span>
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="e.g. 8B2A1C"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-gray-50 font-mono tracking-widest uppercase"
                maxLength={10}
              />
            </div>

            {/* Step 3: Copy & share */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                <span className="w-5 h-5 rounded-full bg-sky-500 text-white text-xs font-bold flex items-center justify-center">3</span>
                Your referral link
              </p>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className={`flex-1 px-3 py-2.5 rounded-xl border text-xs bg-gray-50 font-mono ${trimmed ? "border-emerald-300 text-gray-800" : "border-gray-200 text-gray-400"}`}
                />
                <button
                  onClick={copy}
                  disabled={!trimmed}
                  className="flex items-center gap-1 bg-emerald-600 text-white px-3 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {copied ? <><Check className="h-4 w-4" /> Copied</> : <><Copy className="h-4 w-4" /> Copy</>}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <a
                  href={trimmed ? `https://wa.me/?text=${waText}` : "#"}
                  target={trimmed ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1 bg-green-500 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-green-600 transition-colors ${!trimmed ? "opacity-40 pointer-events-none" : ""}`}
                >
                  <Share2 className="h-3.5 w-3.5" /> WhatsApp
                </a>
                <a
                  href={trimmed ? `https://twitter.com/intent/tweet?text=Check%20out%20MAXX-XMD%20Bot%20Panel!&url=${encodeURIComponent(referralLink)}` : "#"}
                  target={trimmed ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1 bg-gray-800 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-gray-900 transition-colors ${!trimmed ? "opacity-40 pointer-events-none" : ""}`}
                >
                  <Share2 className="h-3.5 w-3.5" /> Twitter
                </a>
                <a
                  href={trimmed ? `https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=Check%20out%20MAXX-XMD%20Bot%20Panel!` : "#"}
                  target={trimmed ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1 bg-sky-500 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-sky-600 transition-colors ${!trimmed ? "opacity-40 pointer-events-none" : ""}`}
                >
                  <Share2 className="h-3.5 w-3.5" /> Telegram
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-3">
            Earn <strong>10 XD credits</strong> per signup + <strong>10% commission</strong> on every order from your referral.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSystem;

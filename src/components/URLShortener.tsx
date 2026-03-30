import { useState } from "react";
import { Link, Copy, Check, ExternalLink } from "lucide-react";

const URLShortener = () => {
  const [url, setUrl] = useState("");
  const [short, setShort] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const shorten = async () => {
    if (!url.trim()) return;
    if (!url.startsWith("http")) {
      setUrl("https://" + url);
    }
    setLoading(true);
    try {
      const res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url.startsWith("http") ? url : "https://" + url)}`);
      const data = await res.text();
      setShort(data);
    } catch {
      setShort(`https://tinyurl.com/create.php?url=${encodeURIComponent(url)}`);
    }
    setLoading(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(short);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 via-white to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white">
              <Link className="h-6 w-6" />
            </div>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-3">URL Shortener</h2>
          <p className="text-gray-500 mb-8">Shorten your long URLs into clean, shareable links</p>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <div className="flex gap-3">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && shorten()}
                placeholder="Paste your long URL here..."
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
              <button
                onClick={shorten}
                disabled={loading}
                className="bg-violet-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-violet-700 transition-colors disabled:opacity-50"
              >
                {loading ? "..." : "Shorten"}
              </button>
            </div>

            {short && (
              <div className="mt-4 flex items-center gap-3 bg-violet-50 rounded-xl p-4">
                <ExternalLink className="h-4 w-4 text-violet-500 flex-shrink-0" />
                <a href={short} target="_blank" rel="noopener noreferrer" className="flex-1 text-sm text-violet-700 font-medium truncate">{short}</a>
                <button onClick={copy} className="flex items-center gap-1 bg-violet-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-violet-700 transition-colors">
                  {copied ? <><Check className="h-3 w-3" /> Copied</> : <><Copy className="h-3 w-3" /> Copy</>}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default URLShortener;

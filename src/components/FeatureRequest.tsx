import { useState } from "react";
import { Lightbulb, Send, CheckCircle } from "lucide-react";

const FeatureRequest = () => {
  const [idea, setIdea] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;
    const subject = encodeURIComponent("New Feature Request - Maxx Tech");
    const body = encodeURIComponent(`Feature Request:\n\n${idea}\n\nFrom: ${email || 'Anonymous'}`);
    window.location.href = `mailto:maxxtechxmd@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => { setSent(false); setIdea(""); setEmail(""); }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-violet-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white">
              <Lightbulb className="h-6 w-6" />
            </div>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-3">Got an Idea?</h2>
          <p className="text-gray-500 mb-8">Suggest a new feature or service. We build what you need!</p>
          <form onSubmit={submit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <textarea value={idea} onChange={(e) => setIdea(e.target.value)} placeholder="Describe your idea... e.g. 'I need a bot that sends daily weather updates'" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 mb-4 resize-none" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email (optional, for updates)" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 mb-4" />
            <button type="submit" className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${sent ? 'bg-green-500 text-white' : 'bg-sky-600 text-white hover:bg-sky-700'}`}>
              {sent ? <><CheckCircle className="h-4 w-4" /> Sent to Email!</> : <><Send className="h-4 w-4" /> Submit Idea</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default FeatureRequest;

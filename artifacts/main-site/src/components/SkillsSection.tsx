import { Code, Database, Globe, Server, Smartphone, Palette, Bot, Shield } from "lucide-react";
const skills = [{ icon: Code, name: "React / Next.js", c: "from-cyan-400 to-blue-500" }, { icon: Server, name: "Node.js", c: "from-green-400 to-emerald-600" }, { icon: Database, name: "MongoDB / SQL", c: "from-violet-400 to-purple-600" }, { icon: Globe, name: "HTML / CSS / JS", c: "from-orange-400 to-red-500" }, { icon: Smartphone, name: "Responsive Design", c: "from-pink-400 to-rose-500" }, { icon: Palette, name: "UI/UX Design", c: "from-amber-400 to-yellow-500" }, { icon: Bot, name: "WhatsApp Bots", c: "from-emerald-400 to-green-600" }, { icon: Shield, name: "Cyber Security", c: "from-gray-500 to-gray-700" }];
const SkillsSection = () => (
  <section className="py-20"><div className="container mx-auto px-6">
    <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">Our Tech Stack</h2>
    <p className="mx-auto mb-12 max-w-xl text-center text-gray-500">Technologies we use to build amazing products</p>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">{skills.map((s) => <div key={s.name} className="group relative rounded-2xl border border-gray-100 bg-white p-5 text-center hover-lift overflow-hidden"><div className={`absolute inset-0 bg-gradient-to-br ${s.c} opacity-0 group-hover:opacity-5 transition-opacity`}></div><div className="relative"><div className={`h-14 w-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${s.c} flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg`}><s.icon className="h-7 w-7" /></div><p className="font-semibold text-xs text-gray-700">{s.name}</p></div></div>)}</div>
  </div></section>
);
export default SkillsSection;

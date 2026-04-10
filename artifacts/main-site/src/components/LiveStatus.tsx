import { CheckCircle, Server, Globe, Bot, Shield } from "lucide-react";

const services = [
  { name: "Website", icon: Globe, status: "operational" },
  { name: "MAXX-XMD Bot", icon: Bot, status: "operational" },
  { name: "AI Assistant", icon: Server, status: "operational" },
  { name: "API Services", icon: Shield, status: "operational" },
];

const LiveStatus = () => (
  <section className="py-10 bg-emerald-50 border-y border-emerald-100">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="font-bold text-emerald-800 text-sm">All Systems Operational</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((s) => (
            <div key={s.name} className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-emerald-200">
              <s.icon className="h-4 w-4 text-emerald-600" />
              <span className="text-xs font-medium text-gray-700">{s.name}</span>
              <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default LiveStatus;

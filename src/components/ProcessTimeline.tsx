import { MessageSquare, Settings, Rocket, CheckCircle } from "lucide-react";
const steps = [{ icon: MessageSquare, title: "1. Tell Us", desc: "Message us on WhatsApp with your requirements.", color: "bg-emerald-500" }, { icon: Settings, title: "2. We Build", desc: "Our team crafts your solution with precision.", color: "bg-violet-500" }, { icon: Rocket, title: "3. Fast Delivery", desc: "Delivered in 2-3 mins for bots, 24-48hrs for sites.", color: "bg-amber-500" }, { icon: CheckCircle, title: "4. Support", desc: "24/7 support to ensure everything runs smoothly.", color: "bg-sky-500" }];
const ProcessTimeline = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-white"><div className="container mx-auto px-6">
    <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">How It Works</h2>
    <p className="mx-auto mb-16 max-w-xl text-center text-gray-500">Getting started is simple. Just 4 easy steps.</p>
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-4 gap-3 sm:gap-6 relative">
        <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-200"></div>
        {steps.map((s, i) => (
          <div key={i} className="relative text-center">
            <div className={`${s.color} h-14 w-14 sm:h-20 sm:w-20 rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center text-white shadow-lg relative z-10 hover:scale-110 transition-transform`}>
              <s.icon className="h-6 w-6 sm:h-9 sm:w-9" />
            </div>
            <h3 className="font-display text-[10px] sm:text-sm font-bold mb-1 sm:mb-2">{s.title}</h3>
            <p className="text-[9px] sm:text-xs text-gray-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div></section>
);
export default ProcessTimeline;

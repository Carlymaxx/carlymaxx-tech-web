import { Check, X, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "50 KES",
    desc: "Perfect for getting started",
    features: [
      { text: "WhatsApp Bot (Basic)", included: true },
      { text: "5 Commands", included: true },
      { text: "Group Management", included: true },
      { text: "Auto-Reply", included: true },
      { text: "Custom Branding", included: false },
      { text: "24/7 Support", included: false },
      { text: "API Integration", included: false },
    ],
    color: "border-gray-200",
    btn: "bg-gray-800 hover:bg-gray-900",
  },
  {
    name: "Pro",
    price: "200 KES",
    desc: "Most popular for businesses",
    features: [
      { text: "WhatsApp Bot (Advanced)", included: true },
      { text: "50+ Commands", included: true },
      { text: "Group Management", included: true },
      { text: "Auto-Reply + AI", included: true },
      { text: "Custom Branding", included: true },
      { text: "24/7 Support", included: true },
      { text: "API Integration", included: false },
    ],
    color: "border-emerald-500",
    btn: "bg-emerald-600 hover:bg-emerald-700",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large-scale needs",
    features: [
      { text: "WhatsApp Bot (Unlimited)", included: true },
      { text: "Unlimited Commands", included: true },
      { text: "Group Management", included: true },
      { text: "Auto-Reply + AI", included: true },
      { text: "Custom Branding", included: true },
      { text: "24/7 Priority Support", included: true },
      { text: "Full API Integration", included: true },
    ],
    color: "border-violet-500",
    btn: "bg-violet-600 hover:bg-violet-700",
  },
];

const ServiceComparison = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">Compare Plans</h2>
      <p className="mx-auto mb-12 max-w-xl text-center text-gray-500">Choose the perfect plan for your needs</p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className={`relative bg-white rounded-2xl border-2 ${plan.color} p-6 shadow-sm hover:shadow-xl transition-all ${plan.popular ? 'scale-105 shadow-lg' : ''}`}>
            {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>}
            <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
            <p className="text-xs text-gray-500 mb-3">{plan.desc}</p>
            <p className="font-display text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="space-y-2.5 mb-6">
              {plan.features.map((f) => (
                <li key={f.text} className="flex items-center gap-2 text-sm">
                  {f.included ? <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" /> : <X className="h-4 w-4 text-gray-300 flex-shrink-0" />}
                  <span className={f.included ? 'text-gray-700' : 'text-gray-400'}>{f.text}</span>
                </li>
              ))}
            </ul>
            <a href={`https://wa.me/254725979273?text=I%20want%20the%20${plan.name}%20plan`} target="_blank" rel="noopener noreferrer" className={`w-full flex items-center justify-center gap-2 ${plan.btn} text-white py-3 rounded-xl font-bold text-sm transition-colors`}>
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default ServiceComparison;

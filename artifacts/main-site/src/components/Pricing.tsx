import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    price: "$1",
    period: "/project",
    features: [
      "WhatsApp Bot Setup (Basic)",
      "Up to 3 automation commands",
      "Standard support (48hrs)",
      "Basic configuration",
      "1 month free updates",
    ],
    popular: false,
    cta: "Get Started",
    href: "https://wa.me/254725979273?text=Hey%20Maxx%20I%20want%20the%20Starter%20package",
  },
  {
    name: "Professional",
    description: "Best for growing businesses",
    price: "$4",
    period: "/project",
    features: [
      "WhatsApp Bot (Advanced)",
      "Unlimited automation commands",
      "Priority support (24hrs)",
      "Custom plugins",
      "Admin dashboard access",
      "3 months free updates",
      "Group management tools",
    ],
    popular: true,
    cta: "Get Started",
    href: "https://wa.me/254725979273?text=Hey%20Maxx%20I%20want%20the%20Professional%20package",
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "$10",
    period: "/project",
    features: [
      "Custom Bot Development",
      "Full API integrations",
      "24/7 Dedicated support",
      "White-label solution",
      "Unlimited updates",
      "Staff training",
      "Multi-platform support",
      "SLA guarantee",
    ],
    popular: false,
    cta: "Contact Us",
    href: "https://wa.me/254725979273?text=Hey%20Maxx%20I%20want%20the%20Enterprise%20package",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-2xl p-8 shadow-lg border-2 transition-transform hover:scale-105 ${
                plan.popular ? "border-primary" : "border-transparent"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Sparkles className="h-4 w-4" /> Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold">{plan.price}</div>
                <div className="text-muted-foreground">{plan.period}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <a href={plan.href} target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

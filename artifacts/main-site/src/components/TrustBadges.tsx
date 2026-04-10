import { Shield, Lock, BadgeCheck, CreditCard } from "lucide-react";
const TrustBadges = () => (
  <section className="py-10 bg-white border-y border-gray-100">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[{ icon: BadgeCheck, label: "Verified Business", color: "text-emerald-600" }, { icon: Shield, label: "100% Secure", color: "text-blue-600" }, { icon: Lock, label: "Data Protected", color: "text-violet-600" }, { icon: CreditCard, label: "Safe Payments", color: "text-amber-600" }].map((b) => (
          <div key={b.label} className="flex items-center justify-center gap-3 py-3">
            <b.icon className={`h-8 w-8 ${b.color}`} />
            <span className="font-semibold text-sm text-gray-700">{b.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 mt-6 flex-wrap opacity-60">
        {["M-Pesa", "PayPal", "Bank Transfer"].map((m) => <span key={m} className="text-xs font-medium text-gray-500 border border-gray-200 px-4 py-2 rounded-full">{m}</span>)}
      </div>
    </div>
  </section>
);
export default TrustBadges;

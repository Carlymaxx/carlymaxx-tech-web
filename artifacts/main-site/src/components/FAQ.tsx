import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I order a service?",
    answer: "Simply click the 'Order Now' button on any service card and you'll be connected to us on WhatsApp to discuss your needs.",
  },
  {
    question: "Can I get a custom package?",
    answer: "Absolutely! Reach out via WhatsApp and we'll create a tailored package that fits your exact needs and budget.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept M-Pesa, bank transfers, and PayPal. All payments are handled securely through verified channels.",
  },
  {
    question: "How long does it take to deploy a bot?",
    answer: "Most WhatsApp bots are deployed within 2-3 minutes after confirmation. Complex custom solutions may take 5-7 minutes. We're that fast!",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes! We offer 24/7 support packages to ensure your bots and systems run smoothly at all times.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, all our subscriptions can be cancelled monthly with no hidden fees or penalties.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! While we're based in Kenya, we serve clients worldwide. All services are delivered online.",
  },
  {
    question: "How do I get a Session ID for MAXX-XMD?",
    answer: "Visit pair.maxxtech.co.ke to generate your Session ID. Follow the steps and pair your WhatsApp in under 2 minutes.",
  },
  {
    question: "Is MAXXTECH AI free to use?",
    answer: "MAXXTECH AI has both free and premium tiers. The free version gives you access to basic features, while premium unlocks advanced capabilities.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, reach out to us.
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:border-emerald-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-sm pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-5 px-5" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

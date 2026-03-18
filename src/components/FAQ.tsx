import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    answer: "Most WhatsApp bots are deployed within 5-30 minutes after confirmation. Complex custom solutions may take 1-3 days.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes! We offer 24/7 support packages to ensure your bots and systems run smoothly at all times.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, all our subscriptions can be cancelled monthly with no hidden fees or penalties.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, reach out to us.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/254725979273?text=Hey%20Maxx%20I%20need%20your%20help%20here";

const WhatsAppWidget = () => (
  <a
    href={WA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:box-glow-hover animate-float"
    aria-label="Chat on WhatsApp"
    style={{ animationDuration: "3s" }}
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppWidget;

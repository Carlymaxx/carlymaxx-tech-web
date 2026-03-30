import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WHATSAPP = "https://wa.me/254725979273";

interface ChatMessage {
  id: number;
  text: string;
  isOwn: boolean;
  time: string;
}

const getTime = () => {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const autoResponses: Record<string, string[]> = {
  greeting: [
    "Hey there! 😊 Thanks for visiting Maxx Tech!",
    "Hello! Great to see you here. How's your day going?",
    "Hi! Welcome! I'm here to help with anything you need.",
  ],
  bot: [
    "Our WhatsApp bots start from just 50 KES! They're super fast to deploy too — usually within 5-10 minutes. Want me to set one up for you?",
    "Yes! We do custom WhatsApp bots for groups and businesses. They can handle moderation, auto-replies, and much more. Shall I connect you with our team?",
    "WhatsApp bot deployment is one of our most popular services! Starting at 50 KES with full setup included. Want details?",
  ],
  price: [
    "Our prices are very affordable! Bots from 50 KES, web design from $1, YouTube boosting from 260 KES. What service interests you?",
    "We have different packages depending on your needs. Starter plans from $1 and Professional from $4. Want me to break it down?",
    "Great question! Our pricing is very competitive. Check out the pricing section above or let me know what service you need and I'll give you a quote! 💰",
  ],
  web: [
    "We build modern websites with React, Next.js, and more! From landing pages to full web apps. Starting from $1. What kind of site do you need?",
    "Web development is our specialty! We've built 500+ websites. We can do e-commerce, portfolios, business sites — you name it! What's your project?",
    "Absolutely! We do custom web design and development. Fast turnaround, modern design, mobile-responsive. Want a free consultation?",
  ],
  youtube: [
    "YouTube boosting starts at 260 KES! We help grow your channel with real subscribers and views. Want to get started?",
    "We offer YouTube channel growth services — subscribers, views, and engagement. Safe and effective. Interested?",
  ],
  tiktok: [
    "TikTok boosting from 120 KES! We help you go viral with views, followers, and likes. Want to boost your TikTok?",
    "Yes! TikTok growth services available. Starting at 120 KES for views and followers. Shall I set you up?",
  ],
  thanks: [
    "You're welcome! 😊 Don't hesitate to reach out anytime. We're always here!",
    "No problem at all! Happy to help. Feel free to ask if you need anything else!",
    "Anytime! That's what we're here for. Have a great day! 🙌",
  ],
  location: [
    "We're based in Ruiru, Kenya but we serve clients worldwide! All our services are available online 24/7.",
    "Our office is in Ruiru, Kenya. But don't worry — everything is done online so we can help you from anywhere!",
  ],
  payment: [
    "We accept M-Pesa, bank transfers, and PayPal. All payments are secure and verified!",
    "Payment options include M-Pesa, bank transfer, and PayPal. Super easy and secure!",
  ],
  default: [
    "That's a great question! Let me connect you with our team for more details. You can also reach us on WhatsApp: +254 725 979 273 😊",
    "I'd love to help with that! For detailed assistance, our team is available on WhatsApp at +254 725 979 273. They respond within minutes!",
    "Interesting! Our team can definitely help with that. Reach out on WhatsApp (+254 725 979 273) for a quick response, or browse our services above!",
    "Got it! For personalized help, I recommend messaging us on WhatsApp: +254 725 979 273. We usually reply within 5 minutes! 📱",
    "That sounds like something we can help with! Our WhatsApp support is the fastest way to get help: +254 725 979 273",
  ],
};

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();

  if (/\b(hi|hello|hey|sup|yo|good morning|good afternoon|good evening|hola)\b/.test(lower)) {
    return autoResponses.greeting[Math.floor(Math.random() * autoResponses.greeting.length)];
  }
  if (/\b(bot|whatsapp bot|deploy|automation)\b/.test(lower)) {
    return autoResponses.bot[Math.floor(Math.random() * autoResponses.bot.length)];
  }
  if (/\b(price|pricing|cost|how much|cheap|affordable|rate)\b/.test(lower)) {
    return autoResponses.price[Math.floor(Math.random() * autoResponses.price.length)];
  }
  if (/\b(web|website|site|design|develop|app|landing)\b/.test(lower)) {
    return autoResponses.web[Math.floor(Math.random() * autoResponses.web.length)];
  }
  if (/\b(youtube|yt|sub|subscriber|view)\b/.test(lower)) {
    return autoResponses.youtube[Math.floor(Math.random() * autoResponses.youtube.length)];
  }
  if (/\b(tiktok|tt|viral)\b/.test(lower)) {
    return autoResponses.tiktok[Math.floor(Math.random() * autoResponses.tiktok.length)];
  }
  if (/\b(thanks|thank|thx|appreciate|cheers)\b/.test(lower)) {
    return autoResponses.thanks[Math.floor(Math.random() * autoResponses.thanks.length)];
  }
  if (/\b(where|location|based|office|address)\b/.test(lower)) {
    return autoResponses.location[Math.floor(Math.random() * autoResponses.location.length)];
  }
  if (/\b(pay|payment|mpesa|m-pesa|paypal|bank|transfer)\b/.test(lower)) {
    return autoResponses.payment[Math.floor(Math.random() * autoResponses.payment.length)];
  }

  return autoResponses.default[Math.floor(Math.random() * autoResponses.default.length)];
};

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Welcome sequence when chat first opens
  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      setUnread(0);

      const welcomeSequence = [
        { delay: 800, text: "Hi there! 👋 Welcome to Maxx Tech!" },
        { delay: 3000, text: "I'm Carly. I help with WhatsApp bots, web development, and digital services." },
        { delay: 6000, text: "What can I help you with today? Feel free to ask anything! 😊" },
      ];

      welcomeSequence.forEach(({ delay, text }) => {
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, {
              id: Date.now() + Math.random(),
              text,
              isOwn: false,
              time: getTime(),
            }]);
          }, 1000 + Math.random() * 1500);
        }, delay);
      });
    }
  }, [isOpen, hasOpened]);

  // Auto message when user hasn't opened chat
  useEffect(() => {
    if (!hasOpened) {
      const timer = setTimeout(() => {
        setUnread(1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [hasOpened]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now(),
      text: input,
      isOwn: true,
      time: getTime(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Realistic typing delay based on response length
    const response = getResponse(input);
    const typingTime = Math.min(1500 + response.length * 15, 4000);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: response,
        isOwn: false,
        time: getTime(),
      }]);
    }, typingTime);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 bg-emerald-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform animate-bounce-soft"
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <MessageCircle className="h-6 w-6" />
        {unread > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            {unread}
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 border-2 border-emerald-600 rounded-full"></span>
              </div>
              <div>
                <div className="font-bold text-sm">Maxx Tech Support</div>
                <div className="flex items-center gap-1 text-xs text-white/80">
                  <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Online now • Replies instantly
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3" style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)' }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-[80%]">
                  <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.isOwn
                      ? 'bg-emerald-600 text-white rounded-br-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  }`}>
                    {msg.text}
                  </div>
                  <div className={`text-[10px] mt-1 ${msg.isOwn ? 'text-right text-gray-400' : 'text-gray-400'}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 3 && !isTyping && (
            <div className="px-3 pb-2 flex gap-2 flex-wrap">
              {["Pricing?", "WhatsApp Bot", "Web Design", "Contact"].map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setInput(q);
                    setTimeout(() => handleSend(), 100);
                  }}
                  className="text-xs px-3 py-1.5 rounded-full border border-emerald-300 text-emerald-700 hover:bg-emerald-50 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-gray-100 flex gap-2">
            <Input
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="border-gray-200 focus-visible:ring-emerald-500"
            />
            <Button size="icon" onClick={handleSend} className="bg-emerald-600 hover:bg-emerald-700">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;

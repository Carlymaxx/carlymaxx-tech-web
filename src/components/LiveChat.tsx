import { useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! Welcome to Maxx Tech. How can I help you today?", isOwn: false }
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const newMsg = { id: Date.now(), text: input, isOwn: true };
    setMessages(prev => [...prev, newMsg]);
    setInput("");
    setIsSending(true);
    
    // Simulate response
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "Thanks for reaching out! We'll get back to you shortly. You can also message us on WhatsApp: +254 725 979 273", isOwn: false }]);
      setIsSending(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-background rounded-2xl shadow-2xl border overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold">Maxx Tech</div>
                <div className="text-xs text-white/80">Online now</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-3 bg-muted/20">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${msg.isOwn ? 'bg-primary text-white' : 'bg-muted'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isSending && (
              <div className="flex justify-start">
                <div className="bg-muted px-4 py-2 rounded-2xl">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <Input 
              placeholder="Type a message..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button size="icon" onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;

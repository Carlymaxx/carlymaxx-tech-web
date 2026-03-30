import { Phone, Mail } from "lucide-react";
const QuickContact = () => (
  <div className="fixed top-1/2 -translate-y-1/2 left-0 z-40 flex flex-col gap-2">
    <a href="tel:+254725979273" className="h-10 w-10 bg-emerald-600 text-white rounded-r-full flex items-center justify-center shadow-lg hover:w-12 transition-all hover:bg-emerald-700" title="Call us">
      <Phone className="h-4 w-4" />
    </a>
    <a href="mailto:maxxtechxmd@gmail.com" className="h-10 w-10 bg-violet-600 text-white rounded-r-full flex items-center justify-center shadow-lg hover:w-12 transition-all hover:bg-violet-700" title="Email us">
      <Mail className="h-4 w-4" />
    </a>
  </div>
);
export default QuickContact;

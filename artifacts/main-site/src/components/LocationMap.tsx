import { MapPin, Phone, Clock } from "lucide-react";
const LocationMap = () => (
  <section className="py-20"><div className="container mx-auto px-6">
    <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text">Find Us</h2>
    <p className="mx-auto mb-12 max-w-xl text-center text-gray-500">Visit our office in Ruiru, Kenya</p>
    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.2!2d36.96!3d-1.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f3f3f3f3f3f%3A0x0!2sRuiru!5e0!3m2!1sen!2ske!4v1" width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" title="Maxx Tech Location" className="w-full"></iframe></div>
      <div className="flex flex-col justify-center gap-6">
        {[{ icon: MapPin, label: "Address", value: "Ruiru, Kiambu County, Kenya" }, { icon: Phone, label: "Phone", value: "+254 725 979 273" }, { icon: Clock, label: "Hours", value: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM" }].map((i) => <div key={i.label} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50"><div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0"><i.icon className="h-6 w-6 text-emerald-600" /></div><div><p className="font-bold text-sm">{i.label}</p><p className="text-gray-500 text-sm">{i.value}</p></div></div>)}
      </div>
    </div>
  </div></section>
);
export default LocationMap;

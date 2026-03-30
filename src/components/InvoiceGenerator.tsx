import { useState } from "react";
import { FileText, Download, Plus, Trash2, Check } from "lucide-react";
import { jsPDF } from "jspdf";

interface Item { desc: string; qty: number; price: number; }

const InvoiceGenerator = () => {
  const [client, setClient] = useState("");
  const [email, setEmail] = useState("");
  const [items, setItems] = useState<Item[]>([{ desc: "WhatsApp Bot Deployment", qty: 1, price: 50 }]);
  const [downloaded, setDownloaded] = useState(false);

  const addItem = () => setItems([...items, { desc: "", qty: 1, price: 0 }]);
  const removeItem = (i: number) => setItems(items.filter((_, idx) => idx !== i));
  const updateItem = (i: number, field: keyof Item, value: string | number) => {
    const updated = [...items];
    updated[i] = { ...updated[i], [field]: value };
    setItems(updated);
  };
  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const invNum = `INV-${Date.now().toString().slice(-6)}`;

  const download = () => {
    const doc = new jsPDF();
    const green: [number, number, number] = [16, 185, 129];
    const dark: [number, number, number] = [31, 41, 55];
    const gray: [number, number, number] = [107, 114, 128];

    // Header bar
    doc.setFillColor(...green);
    doc.rect(0, 0, 210, 45, 'F');

    // Company name
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("MAXX TECH", 20, 22);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Smart Tech Solutions | Web Development | AI Automation", 20, 30);
    doc.text("Ruiru, Kiambu County, Kenya | www.maxxtech.co.ke", 20, 36);

    // Invoice info
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("TAX INVOICE", 190, 18, { align: "right" });
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(invNum, 190, 25, { align: "right" });
    doc.text(`Issue Date: ${new Date().toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}`, 190, 31, { align: "right" });
    doc.text(`Due Date: ${new Date(Date.now() + 7*24*60*60*1000).toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}`, 190, 37, { align: "right" });

    // Bill To
    doc.setTextColor(...dark);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("BILL TO:", 20, 55);
    doc.setFont("helvetica", "normal");
    doc.text(client || "Client Name", 20, 63);
    doc.setTextColor(...gray);
    doc.text(email || "client@example.com", 20, 70);

    // Project Info
    doc.setTextColor(...dark);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("PROJECT DETAILS:", 120, 55);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...gray);
    doc.text("Service Category: Digital Solutions & Automation", 120, 63);
    doc.text("Tech Stack: React, Node.js, WhatsApp API, Cloud", 120, 69);
    doc.text("Deployment: Cloudflare / Heroku / Railway", 120, 75);
    doc.text("SLA: 99.9% Uptime Guarantee", 120, 81);

    // Table header
    const tableTop = 92;
    doc.setFillColor(240, 253, 244);
    doc.rect(15, tableTop, 180, 10, 'F');
    doc.setTextColor(...green);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text("#", 18, tableTop + 7);
    doc.text("Service Description", 25, tableTop + 7);
    doc.text("SKU", 105, tableTop + 7);
    doc.text("Qty", 130, tableTop + 7, { align: "center" });
    doc.text("Unit Price", 158, tableTop + 7, { align: "right" });
    doc.text("Amount", 190, tableTop + 7, { align: "right" });

    // Table rows
    doc.setTextColor(...dark);
    doc.setFont("helvetica", "normal");
    let yPos = tableTop + 18;
    const skus = ["MX-WEB-001", "MX-BOT-002", "MX-API-003", "MX-SEC-004", "MX-AI-005", "MX-DSN-006", "MX-DEV-007", "MX-HOS-008"];
    items.forEach((item, idx) => {
      doc.setFontSize(9);
      doc.setTextColor(...gray);
      doc.text(String(idx + 1), 18, yPos);
      doc.setTextColor(...dark);
      doc.text(item.desc || "Service", 25, yPos);
      doc.setTextColor(...gray);
      doc.text(skus[idx % skus.length], 105, yPos);
      doc.setTextColor(...dark);
      doc.text(String(item.qty), 130, yPos, { align: "center" });
      doc.text(item.price.toLocaleString(), 158, yPos, { align: "right" });
      doc.text((item.qty * item.price).toLocaleString(), 190, yPos, { align: "right" });

      // Row separator
      doc.setDrawColor(229, 231, 235);
      doc.line(15, yPos + 4, 195, yPos + 4);
      yPos += 12;
    });

    // Total
    yPos += 5;
    doc.setFillColor(240, 253, 244);
    doc.roundedRect(120, yPos, 75, 20, 3, 3, 'F');
    doc.setTextColor(...gray);
    doc.setFontSize(9);
    doc.text("Total Amount", 157, yPos + 7, { align: "center" });
    doc.setTextColor(...green);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(`${total.toLocaleString()} KES`, 157, yPos + 16, { align: "center" });

    // Terms & Conditions
    yPos += 30;
    doc.setFillColor(249, 250, 251);
    doc.rect(15, yPos, 180, 35, 'F');
    doc.setTextColor(...dark);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.text("TERMS & CONDITIONS:", 20, yPos + 7);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...gray);
    doc.text("Payment Terms: Net 7 days | Currency: Kenyan Shilling (KES)", 20, yPos + 13);
    doc.text("Late Payment: 5% monthly interest on overdue amounts", 20, yPos + 18);
    doc.text("Support: 24/7 technical support included for 30 days post-delivery", 20, yPos + 23);
    doc.text("Warranty: All services covered by satisfaction guarantee", 20, yPos + 28);

    // Payment Methods
    doc.setTextColor(...dark);
    doc.setFont("helvetica", "bold");
    doc.text("PAYMENT METHODS:", 120, yPos + 7);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...gray);
    doc.text("M-Pesa: +254 725 979 273", 120, yPos + 13);
    doc.text("PayPal: maxxtechxmd@gmail.com", 120, yPos + 18);
    doc.text("Bank: Equity Bank Kenya", 120, yPos + 23);

    // Footer
    doc.setTextColor(16, 185, 129);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text("MAXX TECH — Powering Digital Innovation", 105, 275, { align: "center" });
    doc.setTextColor(...gray);
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    doc.text("www.maxxtech.co.ke | +254 725 979 273 | maxxtechxmd@gmail.com | Ruiru, Kenya", 105, 281, { align: "center" });
    doc.text("Powered by Maxx Tech Invoice System v2.0 | Generated with precision engineering", 105, 286, { align: "center" });

    // Download PDF
    doc.save(`MaxxTech_Invoice_${invNum}.pdf`);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                <FileText className="h-6 w-6" />
              </div>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-3">Invoice Generator</h2>
            <p className="text-gray-500">Create professional PDF invoices in seconds</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Client Name</label>
                <input type="text" value={client} onChange={(e) => setClient(e.target.value)} placeholder="John Doe" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Client Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
            </div>

            <div className="space-y-3 mb-4">
              {items.map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <input type="text" value={item.desc} onChange={(e) => updateItem(i, 'desc', e.target.value)} placeholder="Service description" className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  <input type="number" value={item.qty} onChange={(e) => updateItem(i, 'qty', Number(e.target.value))} className="w-16 px-3 py-2 rounded-lg border border-gray-200 text-sm text-center focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  <input type="number" value={item.price} onChange={(e) => updateItem(i, 'price', Number(e.target.value))} placeholder="KES" className="w-24 px-3 py-2 rounded-lg border border-gray-200 text-sm text-right focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  <button onClick={() => removeItem(i)} className="text-red-400 hover:text-red-600 p-1"><Trash2 className="h-4 w-4" /></button>
                </div>
              ))}
            </div>

            <button onClick={addItem} className="flex items-center gap-1 text-sm text-emerald-600 font-medium mb-6 hover:text-emerald-700">
              <Plus className="h-4 w-4" /> Add Item
            </button>

            <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
              <span className="font-bold text-lg">Total: <span className="text-emerald-600">{total.toLocaleString()} KES</span></span>
              <button onClick={download} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${downloaded ? 'bg-green-500 text-white' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}>
                {downloaded ? <><Check className="h-4 w-4" /> Downloaded!</> : <><Download className="h-4 w-4" /> Download PDF</>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceGenerator;

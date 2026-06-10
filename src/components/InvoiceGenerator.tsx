import { useState } from "react";
import { FileText, Download, Plus, Trash2, Check } from "lucide-react";

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
    const printContent = `
      <html><head><title>MaxxTech_Invoice_${invNum}</title>
      <style>
        body { font-family: Helvetica, Arial, sans-serif; color: #1f2937; margin: 0; padding: 0; }
        .header { background: #10b981; color: white; padding: 24px 20px; }
        .header h1 { margin: 0; font-size: 24px; }
        .header p { margin: 4px 0 0; font-size: 10px; opacity: 0.9; }
        .meta { display: flex; justify-content: space-between; padding: 20px; border-bottom: 1px solid #e5e7eb; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th { background: #f0fdf4; color: #10b981; font-size: 9px; padding: 8px; text-align: left; }
        td { padding: 8px; font-size: 9px; border-bottom: 1px solid #f3f4f6; }
        .total { text-align: right; padding: 20px; font-size: 18px; color: #10b981; font-weight: bold; }
        .footer { background: #f9fafb; padding: 16px; font-size: 8px; color: #6b7280; text-align: center; }
      </style></head><body>
      <div class="header">
        <h1>MAXX TECH</h1>
        <p>Smart Tech Solutions | Web Development | AI Automation</p>
        <p>Ruiru, Kiambu County, Kenya | www.maxxtech.co.ke</p>
        <p style="float:right;margin-top:-40px">TAX INVOICE<br/>${invNum}<br/>${new Date().toLocaleDateString()}</p>
      </div>
      <div class="meta">
        <div><strong>BILL TO:</strong><br/>${client || "Client Name"}<br/><span style="color:#6b7280">${email || "client@example.com"}</span></div>
        <div><strong>Due:</strong> ${new Date(Date.now() + 7*24*60*60*1000).toLocaleDateString()}</div>
      </div>
      <table>
        <thead><tr><th>#</th><th>Description</th><th>Qty</th><th>Unit Price</th><th>Amount</th></tr></thead>
        <tbody>${items.map((item, i) => `<tr><td>${i+1}</td><td>${item.desc || "Service"}</td><td>${item.qty}</td><td>${item.price.toLocaleString()} KES</td><td>${(item.qty*item.price).toLocaleString()} KES</td></tr>`).join("")}</tbody>
      </table>
      <div class="total">Total: ${total.toLocaleString()} KES</div>
      <div class="footer">www.maxxtech.co.ke | +254 725 979 273 | info@maxxtech.co.ke | Ruiru, Kenya</div>
      </body></html>
    `;
    const win = window.open("", "_blank");
    if (win) {
      win.document.write(printContent);
      win.document.close();
      win.print();
    }
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
                <input type="text" value={client} onChange={(e) => setClient(e.target.value)} placeholder="Carly Maxx" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Client Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="info@maxxtech.co.ke" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
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
                {downloaded ? <><Check className="h-4 w-4" /> Printed!</> : <><Download className="h-4 w-4" /> Download PDF</>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceGenerator;

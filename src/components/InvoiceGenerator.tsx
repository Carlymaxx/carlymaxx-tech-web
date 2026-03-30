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
    const rows = items.map(item => `
      <tr>
        <td style="padding:12px;border-bottom:1px solid #e5e7eb">${item.desc || 'Service'}</td>
        <td style="padding:12px;border-bottom:1px solid #e5e7eb;text-align:center">${item.qty}</td>
        <td style="padding:12px;border-bottom:1px solid #e5e7eb;text-align:right">${item.price.toLocaleString()} KES</td>
        <td style="padding:12px;border-bottom:1px solid #e5e7eb;text-align:right;font-weight:bold">${(item.qty * item.price).toLocaleString()} KES</td>
      </tr>`).join('');

    const html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Invoice ${invNum} - Maxx Tech</title>
<style>
  body{font-family:Arial,Helvetica,sans-serif;padding:40px;max-width:750px;margin:auto;color:#1f2937}
  .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:40px;padding-bottom:20px;border-bottom:3px solid #059669}
  .logo h1{color:#059669;font-size:28px;margin:0}
  .logo p{color:#6b7280;margin:4px 0 0;font-size:13px}
  .inv-info{text-align:right}
  .inv-info h2{color:#059669;font-size:22px;margin:0}
  .inv-info p{color:#6b7280;margin:4px 0;font-size:13px}
  .bill-to{margin-bottom:30px}
  .bill-to strong{color:#059669}
  table{width:100%;border-collapse:collapse;margin:20px 0}
  th{background:#f0fdf4;padding:12px;text-align:left;font-size:13px;color:#059669;border-bottom:2px solid #059669}
  .total-row{display:flex;justify-content:flex-end;margin-top:20px}
  .total-box{background:#f0fdf4;padding:15px 25px;border-radius:8px;text-align:right}
  .total-box .label{font-size:13px;color:#6b7280}
  .total-box .amount{font-size:24px;font-weight:bold;color:#059669}
  .footer{margin-top:50px;padding-top:20px;border-top:1px solid #e5e7eb;text-align:center;font-size:12px;color:#9ca3af}
</style></head>
<body>
  <div class="header">
    <div class="logo">
      <h1>MAXX TECH</h1>
      <p>Smart Tech Solutions by Carly Maxx</p>
      <p>Ruiru, Kenya | maxxtech.co.ke</p>
    </div>
    <div class="inv-info">
      <h2>INVOICE</h2>
      <p><strong>${invNum}</strong></p>
      <p>Date: ${new Date().toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    </div>
  </div>
  <div class="bill-to">
    <strong>Bill To:</strong><br>
    ${client || 'Client Name'}<br>
    ${email || 'client@example.com'}
  </div>
  <table>
    <thead><tr><th>Description</th><th style="text-align:center">Qty</th><th style="text-align:right">Price</th><th style="text-align:right">Total</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
  <div class="total-row">
    <div class="total-box">
      <div class="label">Total Amount</div>
      <div class="amount">${total.toLocaleString()} KES</div>
    </div>
  </div>
  <div class="footer">
    <p>Thank you for your business!</p>
    <p>Maxx Tech — WhatsApp: +254 725 979 273 | maxxtechxmd@gmail.com</p>
  </div>
</body></html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MaxxTech_Invoice_${invNum}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

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
            <p className="text-gray-500">Create professional invoices in seconds</p>
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
                {downloaded ? <><Check className="h-4 w-4" /> Downloaded!</> : <><Download className="h-4 w-4" /> Download Invoice</>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceGenerator;

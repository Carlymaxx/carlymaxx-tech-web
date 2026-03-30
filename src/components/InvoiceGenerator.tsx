import { useState, useRef } from "react";
import { FileText, Download, Plus, Trash2 } from "lucide-react";

interface Item { desc: string; qty: number; price: number; }

const InvoiceGenerator = () => {
  const [client, setClient] = useState("");
  const [email, setEmail] = useState("");
  const [items, setItems] = useState<Item[]>([{ desc: "WhatsApp Bot Deployment", qty: 1, price: 50 }]);
  const printRef = useRef<HTMLDivElement>(null);

  const addItem = () => setItems([...items, { desc: "", qty: 1, price: 0 }]);
  const removeItem = (i: number) => setItems(items.filter((_, idx) => idx !== i));
  const updateItem = (i: number, field: keyof Item, value: string | number) => {
    const updated = [...items];
    updated[i] = { ...updated[i], [field]: value };
    setItems(updated);
  };
  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  const download = () => {
    const content = printRef.current;
    if (!content) return;
    const WinPrint = window.open('', '', 'width=800,height=600');
    if (!WinPrint) return;
    WinPrint.document.write(`
      <html><head><title>Invoice - Maxx Tech</title>
      <style>body{font-family:Arial;padding:40px;max-width:700px;margin:auto}
      h1{color:#059669}table{width:100%;border-collapse:collapse;margin:20px 0}
      th,td{border:1px solid #e5e7eb;padding:10px;text-align:left;font-size:14px}
      th{background:#f0fdf4}.total{font-size:20px;font-weight:bold;color:#059669;text-align:right;margin-top:20px}
      .header{display:flex;justify-content:space-between;margin-bottom:30px}</style></head>
      <body>${content.innerHTML}</body></html>
    `);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
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
              <button onClick={download} className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors">
                <Download className="h-4 w-4" /> Download Invoice
              </button>
            </div>
          </div>

          <div ref={printRef} className="hidden">
            <div className="header">
              <div><h1>MAXX TECH</h1><p>Smart Tech Solutions</p><p>Ruiru, Kenya</p></div>
              <div style={{textAlign:'right'}}><p><strong>Invoice</strong></p><p>Date: {new Date().toLocaleDateString()}</p><p>INV-{Date.now().toString().slice(-6)}</p></div>
            </div>
            <p><strong>Bill To:</strong> {client || 'Client Name'}<br/>{email}</p>
            <table><thead><tr><th>Description</th><th>Qty</th><th>Price (KES)</th><th>Total (KES)</th></tr></thead>
              <tbody>{items.map((item, i) => <tr key={i}><td>{item.desc}</td><td>{item.qty}</td><td>{item.price.toLocaleString()}</td><td>{(item.qty * item.price).toLocaleString()}</td></tr>)}</tbody>
            </table>
            <div className="total">Total: {total.toLocaleString()} KES</div>
            <p style={{marginTop:30,fontSize:12,color:'#888'}}>Thank you for your business! — Maxx Tech | maxxtech.co.ke</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceGenerator;

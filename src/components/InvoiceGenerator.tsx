import { useState } from "react";
import { FileText, Download, Plus, Trash2, Check, ChevronDown, ChevronUp } from "lucide-react";

interface Item { desc: string; qty: number; price: number; }

const InvoiceGenerator = () => {
  const [open, setOpen] = useState(false);
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
  const invNum = `INV-MT-${Date.now().toString().slice(-6)}`;

  const downloadPDF = () => {
    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>MaxxTech Invoice ${invNum}</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color:#1f2937; background:#fff; }
    .page { max-width:700px; margin:0 auto; padding:40px 32px; }
    .header { background:linear-gradient(135deg,#10b981,#0d9488); color:#fff; padding:28px 32px; border-radius:16px 16px 0 0; display:flex; justify-content:space-between; align-items:flex-start; }
    .header-left h1 { font-size:26px; font-weight:900; letter-spacing:2px; margin-bottom:4px; }
    .header-left p { font-size:10px; opacity:0.85; line-height:1.6; }
    .header-right { text-align:right; }
    .header-right .inv-label { font-size:11px; text-transform:uppercase; letter-spacing:2px; opacity:0.7; margin-bottom:4px; }
    .header-right .inv-num { font-size:18px; font-weight:800; }
    .header-right .inv-date { font-size:10px; opacity:0.8; margin-top:2px; }
    .body { border:1px solid #e5e7eb; border-top:none; border-radius:0 0 16px 16px; overflow:hidden; }
    .meta { display:grid; grid-template-columns:1fr 1fr; gap:24px; padding:20px 32px; background:#f9fafb; border-bottom:1px solid #e5e7eb; }
    .meta-block label { font-size:9px; text-transform:uppercase; letter-spacing:1.5px; color:#6b7280; display:block; margin-bottom:4px; }
    .meta-block strong { font-size:13px; color:#111827; display:block; }
    .meta-block span { font-size:11px; color:#6b7280; }
    table { width:100%; border-collapse:collapse; }
    thead tr { background:#f0fdf4; }
    thead th { font-size:9px; text-transform:uppercase; letter-spacing:1px; color:#10b981; padding:10px 32px; text-align:left; font-weight:700; }
    thead th:last-child { text-align:right; }
    tbody td { padding:10px 32px; font-size:11px; border-bottom:1px solid #f3f4f6; color:#374151; }
    tbody td:last-child { text-align:right; font-weight:600; }
    tbody tr:last-child td { border-bottom:none; }
    .total-row { background:#f0fdf4; padding:16px 32px; display:flex; justify-content:flex-end; align-items:center; gap:16px; border-top:2px solid #10b981; }
    .total-label { font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#6b7280; }
    .total-amount { font-size:22px; font-weight:900; color:#10b981; }
    .footer { background:#f9fafb; padding:14px 32px; font-size:9px; color:#9ca3af; text-align:center; border-top:1px solid #e5e7eb; line-height:1.8; }
    .badge { display:inline-block; background:#ecfdf5; color:#10b981; font-size:8px; font-weight:700; text-transform:uppercase; letter-spacing:1px; padding:3px 8px; border-radius:20px; border:1px solid #d1fae5; margin-bottom:8px; }
    @media print {
      body { -webkit-print-color-adjust:exact; print-color-adjust:exact; }
      .page { padding:20px; }
    }
  </style>
</head>
<body>
<div class="page">
  <div class="header">
    <div class="header-left">
      <div class="badge">TAX INVOICE</div>
      <h1>MAXX TECH</h1>
      <p>Smart Tech Solutions · Web Development · AI Automation<br/>Ruiru, Kiambu County, Kenya · www.maxxtech.co.ke<br/>+254 725 979 273 · info@maxxtech.co.ke</p>
    </div>
    <div class="header-right">
      <div class="inv-label">Invoice</div>
      <div class="inv-num">${invNum}</div>
      <div class="inv-date">Issued: ${new Date().toLocaleDateString('en-KE',{day:'2-digit',month:'long',year:'numeric'})}</div>
      <div class="inv-date" style="color:#a7f3d0">Due: ${new Date(Date.now()+7*24*60*60*1000).toLocaleDateString('en-KE',{day:'2-digit',month:'long',year:'numeric'})}</div>
    </div>
  </div>
  <div class="body">
    <div class="meta">
      <div class="meta-block">
        <label>Bill To</label>
        <strong>${client || "Client Name"}</strong>
        <span>${email || "client@email.com"}</span>
      </div>
      <div class="meta-block">
        <label>Payment</label>
        <strong>M-Pesa / Bank Transfer</strong>
        <span>Due within 7 days of issue</span>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Qty</th>
          <th>Unit Price</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        ${items.map((item, i) => `
        <tr>
          <td style="color:#9ca3af">${i+1}</td>
          <td>${item.desc || "Service"}</td>
          <td>${item.qty}</td>
          <td>${item.price.toLocaleString()} KES</td>
          <td>${(item.qty*item.price).toLocaleString()} KES</td>
        </tr>`).join("")}
      </tbody>
    </table>
    <div class="total-row">
      <span class="total-label">Total Due</span>
      <span class="total-amount">${total.toLocaleString()} KES</span>
    </div>
    <div class="footer">
      Thank you for choosing Maxx Tech — Smart Tech Solutions from Kenya to the World 🌍<br/>
      www.maxxtech.co.ke &nbsp;·&nbsp; +254 725 979 273 &nbsp;·&nbsp; info@maxxtech.co.ke &nbsp;·&nbsp; Ruiru, Kiambu, Kenya
    </div>
  </div>
</div>
<script>window.onload=function(){window.print();}</script>
</body>
</html>`;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const win = window.open(url, "_blank");
    if (win) {
      win.addEventListener("load", () => {
        setTimeout(() => { URL.revokeObjectURL(url); }, 2000);
      });
    }
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section className="py-5">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Toggle Header */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full group flex items-center justify-between bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-6 py-4 rounded-2xl font-bold transition-all hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
        >
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-white/20 flex items-center justify-center">
              <FileText className="h-4 w-4" />
            </div>
            <div className="text-left">
              <div className="font-display text-sm font-bold tracking-wide">Invoice Generator</div>
              <div className="text-white/70 text-xs font-normal">Create & download a professional PDF invoice</div>
            </div>
          </div>
          {open ? <ChevronUp className="h-5 w-5 text-white/80" /> : <ChevronDown className="h-5 w-5 text-white/80" />}
        </button>

        {/* Collapsible Form */}
        {open && (
          <div className="mt-3 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 animate-in slide-in-from-top-3 duration-300">
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Client Name</label>
                <input type="text" value={client} onChange={(e) => setClient(e.target.value)} placeholder="Client Name" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Client Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="client@email.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
            </div>

            {/* Items header */}
            <div className="grid grid-cols-[1fr_56px_88px_32px] gap-2 mb-1.5 px-1">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Description</span>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider text-center">Qty</span>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider text-right">Price (KES)</span>
              <span />
            </div>

            <div className="space-y-2 mb-3">
              {items.map((item, i) => (
                <div key={i} className="grid grid-cols-[1fr_56px_88px_32px] gap-2 items-center">
                  <input type="text" value={item.desc} onChange={(e) => updateItem(i, 'desc', e.target.value)} placeholder="Service description" className="px-3 py-2 rounded-lg border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  <input type="number" value={item.qty} onChange={(e) => updateItem(i, 'qty', Number(e.target.value))} className="px-2 py-2 rounded-lg border border-gray-200 text-xs text-center focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  <input type="number" value={item.price} onChange={(e) => updateItem(i, 'price', Number(e.target.value))} placeholder="0" className="px-2 py-2 rounded-lg border border-gray-200 text-xs text-right focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  <button onClick={() => removeItem(i)} className="h-8 w-8 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <button onClick={addItem} className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold mb-5 hover:text-emerald-700 px-1">
              <Plus className="h-3.5 w-3.5" /> Add Line Item
            </button>

            <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Total Amount</div>
                <span className="font-black text-xl text-emerald-600">{total.toLocaleString()} KES</span>
              </div>
              <button
                onClick={downloadPDF}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md ${
                  downloaded
                    ? 'bg-green-500 text-white shadow-green-200'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500 shadow-emerald-200 hover:shadow-emerald-300 hover:-translate-y-0.5'
                }`}
              >
                {downloaded ? (
                  <><Check className="h-4 w-4" /> Invoice Ready!</>
                ) : (
                  <><Download className="h-4 w-4" /> Download PDF</>
                )}
              </button>
            </div>
            <p className="text-center text-[10px] text-gray-400 mt-2">
              A professional invoice PDF will open — choose <strong>Save as PDF</strong> in the print dialog to download.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InvoiceGenerator;

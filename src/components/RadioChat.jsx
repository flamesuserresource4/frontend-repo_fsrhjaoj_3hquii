import { useEffect, useState } from "react";
const API = import.meta.env.VITE_BACKEND_URL || "";

export default function RadioChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [handle, setHandle] = useState("Водила");

  const load = async () => {
    try { const data = await fetch(`${API}/api/chat`).then(r=>r.json()); setMessages(data); } catch {}
  };

  useEffect(() => {
    load();
    const t = setInterval(load, 4000);
    return () => clearInterval(t);
  }, []);

  const send = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    await fetch(`${API}/api/chat`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ handle, message: input })});
    setInput("");
    load();
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-white mb-4">Радио-чат</h2>
      <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
        <div className="flex gap-2 mb-3">
          <input value={handle} onChange={e=>setHandle(e.target.value)} placeholder="Позывной" className="px-3 py-2 rounded bg-slate-900/60 border border-slate-700 text-slate-100"/>
          <form onSubmit={send} className="flex-1 flex gap-2">
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Сказать в эфир..." className="flex-1 px-3 py-2 rounded bg-slate-900/60 border border-slate-700 text-slate-100"/>
            <button className="px-4 rounded bg-emerald-600 hover:bg-emerald-500 text-white">Отправить</button>
          </form>
        </div>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {messages.map(m => (
            <div key={m.id} className="p-2 rounded bg-slate-900/60 border border-slate-700 text-slate-200"><span className="text-amber-400">{m.handle}:</span> {m.message}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

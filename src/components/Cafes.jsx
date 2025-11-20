import { useEffect, useState } from "react";
const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Cafes() {
  const [cafes, setCafes] = useState([]);
  const [form, setForm] = useState({ title: "", highway: "", location: "", description: "" });

  useEffect(() => {
    fetch(`${API}/api/cafes`).then(r=>r.json()).then(setCafes).catch(()=>setCafes([]));
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.title) return;
    await fetch(`${API}/api/cafes`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) });
    const list = await fetch(`${API}/api/cafes`).then(r=>r.json());
    setCafes(list); setForm({ title: "", highway: "", location: "", description: "" });
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-white mb-4">Лучшие дорожные кафе</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cafes.map(c => (
            <div key={c.id} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
              <div className="text-white font-semibold">{c.title}</div>
              <div className="text-slate-300 text-sm">{c.highway || ''} {c.location? `• ${c.location}`:''}</div>
              <div className="text-slate-200 mt-2 text-sm">{c.description}</div>
            </div>
          ))}
        </div>
        <form onSubmit={submit} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
          <div className="text-white font-semibold mb-2">Добавить кафе (админ)</div>
          <input placeholder="Название" className="w-full mb-2 px-3 py-2 rounded bg-slate-900/60 border border-slate-700 text-slate-100" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/>
          <input placeholder="Трасса" className="w-full mb-2 px-3 py-2 rounded bg-slate-900/60 border border-slate-700 text-slate-100" value={form.highway} onChange={e=>setForm({...form,highway:e.target.value})}/>
          <input placeholder="Локация" className="w-full mb-2 px-3 py-2 rounded bg-slate-900/60 border border-slate-700 text-slate-100" value={form.location} onChange={e=>setForm({...form,location:e.target.value})}/>
          <textarea placeholder="Описание" className="w-full mb-2 px-3 py-2 rounded bg-slate-900/60 border border-slate-700 text-slate-100" value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/>
          <button className="w-full py-2 rounded bg-amber-600 hover:bg-amber-500 text-white font-semibold">Сохранить</button>
        </form>
      </div>
    </section>
  );
}

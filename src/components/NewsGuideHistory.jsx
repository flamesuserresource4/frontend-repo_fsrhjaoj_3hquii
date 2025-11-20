import { useEffect, useState } from "react";
const API = import.meta.env.VITE_BACKEND_URL || "";

export default function NewsGuideHistory() {
  const [news, setNews] = useState([]);
  const [guide, setGuide] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/news`).then(r=>r.json()).then(setNews).catch(()=>setNews([]));
    fetch(`${API}/api/guide`).then(r=>r.json()).then(setGuide).catch(()=>setGuide([]));
    fetch(`${API}/api/history`).then(r=>r.json()).then(setHistory).catch(()=>setHistory([]));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
          <div className="text-white font-bold mb-3">Дорожные новости</div>
          <div className="space-y-3">
            {news.map((n, i) => (
              <div key={n.id || i} className="p-3 rounded-lg bg-slate-900/60 border border-slate-700">
                <div className="text-slate-100 font-semibold">{n.title}</div>
                <div className="text-slate-300 text-sm">{n.summary}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
          <div className="text-white font-bold mb-3">Путеводитель</div>
          <div className="grid sm:grid-cols-2 gap-3">
            {guide.map((g, i) => (
              <div key={g.id || i} className="p-3 rounded-lg bg-slate-900/60 border border-slate-700">
                <div className="text-slate-100 font-semibold">{g.title}</div>
                <div className="text-slate-300 text-sm mt-1">{g.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
          <div className="text-white font-bold mb-3">История грузовиков</div>
          <div className="space-y-3">
            {history.map((h, i) => (
              <details key={h.id || i} className="p-3 rounded-lg bg-slate-900/60 border border-slate-700">
                <summary className="cursor-pointer text-slate-100 font-semibold">{h.title} {h.era? `• ${h.era}`:''}</summary>
                <div className="text-slate-300 text-sm mt-2">{h.content}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

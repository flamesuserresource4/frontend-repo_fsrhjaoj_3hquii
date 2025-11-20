import { Truck, Radio, Map, Trophy } from "lucide-react";

export default function Header({ onNav }) {
  return (
    <header className="sticky top-0 z-30 w-full bg-slate-900/80 backdrop-blur border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 ring-2 ring-orange-400/30">
            <Truck className="text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-white font-bold text-lg">Дальнобой.РФ</div>
            <div className="text-xs text-slate-300">дороги • работа • душа</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-200">
          <button onClick={() => onNav('game')} className="hover:text-white transition">Игра</button>
          <button onClick={() => onNav('cafes')} className="hover:text-white transition">Кафе</button>
          <button onClick={() => onNav('news')} className="hover:text-white transition">Новости</button>
          <button onClick={() => onNav('guide')} className="hover:text-white transition">Путеводитель</button>
          <button onClick={() => onNav('history')} className="hover:text-white transition flex items-center gap-1"><Trophy size={16}/>История</button>
          <button onClick={() => onNav('radio')} className="hover:text-white transition flex items-center gap-1"><Radio size={16}/>Радио-чат</button>
        </nav>
      </div>
    </header>
  );
}

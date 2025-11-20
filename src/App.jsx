import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Game from "./components/Game";
import Cafes from "./components/Cafes";
import NewsGuideHistory from "./components/NewsGuideHistory";
import RadioChat from "./components/RadioChat";

function App() {
  const [view, setView] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Header onNav={setView} />
      {view === 'home' && (
        <>
          <Hero />
          <Game />
          <NewsGuideHistory />
          <Cafes />
          <RadioChat />
        </>
      )}
      {view === 'game' && <Game />}
      {view === 'cafes' && <Cafes />}
      {view === 'news' && <NewsGuideHistory />}
      {view === 'guide' && <NewsGuideHistory />}
      {view === 'history' && <NewsGuideHistory />}
      {view === 'radio' && <RadioChat />}
      <footer className="py-10 text-center text-sm text-slate-400">Сделано с любовью к дороге • Дальнобой.РФ</footer>
    </div>
  );
}

export default App;

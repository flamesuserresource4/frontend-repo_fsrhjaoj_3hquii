import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Game() {
  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/quiz/questions`)
      .then(r => r.json())
      .then(setQuestions)
      .catch(() => setQuestions([]));
  }, []);

  const current = questions[step];

  const answer = async (idx) => {
    if (!current) return;
    const res = await fetch(`${API}/api/quiz/answer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question_id: current.id, answer_index: idx })
    }).then(r=>r.json());
    setResult(res.correct);
    setTimeout(() => {
      setResult(null);
      setStep(s => (s+1) % questions.length);
    }, 1200);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-white mb-4">Игра: Дорожный Миллионер</h2>
      <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
        <AnimatePresence mode="wait">
          {current && (
            <motion.div key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-slate-100"
            >
              <div className="text-lg font-semibold">{current.question}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {current.options.map((opt, i) => (
                  <button key={i}
                    onClick={() => answer(i)}
                    className={`text-left p-3 rounded-lg border transition bg-slate-900/60 hover:bg-slate-900 border-slate-700 ${result !== null ? (i===current.correct_index? 'ring-2 ring-emerald-500' : 'opacity-60') : ''}`}
                  >
                    <span className="text-slate-200">{String.fromCharCode(65+i)}. {opt}</span>
                  </button>
                ))}
              </div>
              {result !== null && (
                <div className={`mt-4 font-semibold ${result? 'text-emerald-400':'text-rose-400'}`}>
                  {result? 'Верно!':'Увы, попробуй ещё.'}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

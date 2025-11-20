import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900 to-slate-900" />
      <div className="max-w-7xl mx-auto px-4 py-24 relative">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow"
        >
          Дороги зовут. Дом ждёт. Мы вместе.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-2xl text-slate-200"
        >
          Сообщество дальнобойщиков России: игра на знания ПДД и географии, лучшие кафешки
          по трассам, новости, путеводитель и душевный радио-чат.
        </motion.p>
      </div>
    </section>
  );
}

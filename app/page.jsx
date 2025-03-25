"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [lang, setLang] = useState("en");
  const [showReel, setShowReel] = useState(false);

  const t = {
    en: {
      heroTitle: "Crafting Next-Gen Animation",
      heroSubtitle: "An AI-powered animation studio blending technology and creativity.",
      showreel: "Watch Showreel",
    },
    tr: {
      heroTitle: "Yeni Nesil Animasyonun Mimarı",
      heroSubtitle: "Yapay zekâ destekli animasyon stüdyosu, teknolojiyi yaratıcılıkla buluşturuyor.",
      showreel: "Showreel'i İzle",
    }
  };

  return (
    <main className="font-sans bg-white text-gray-900">
      <header className="flex items-center justify-between px-6 py-4 border-b shadow-sm sticky top-0 bg-white z-10">
        <div className="flex items-center gap-2">
          <img src="/anicraft_logo_2024.png" alt="anicraft logo" className="h-8" />
          <span className="text-xl font-bold">anicraft</span>
        </div>
        <nav className="flex gap-6 text-sm">
          <select className="text-sm border rounded px-2 py-1" value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="en">EN</option>
            <option value="tr">TR</option>
          </select>
        </nav>
      </header>

      <section className="relative text-center py-36 px-4 bg-gradient-to-br from-white to-gray-100 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4"
        >
          {t[lang].heroTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg mb-6 max-w-xl mx-auto"
        >
          {t[lang].heroSubtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button className="px-6 py-2 bg-black text-white rounded" onClick={() => setShowReel(true)}>
            {t[lang].showreel}
          </button>
        </motion.div>

        {showReel && (
          <div className="mt-10 max-w-3xl mx-auto aspect-video">
            <iframe
              className="w-full h-full rounded shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </section>
    </main>
  );
}

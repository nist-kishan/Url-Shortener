import UrlShortener from "../component/UrlShortener";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState("premium");

  const isPremium = mode === "premium";

  return (
    <div
      className={
        isPremium
          ? "min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden"
          : "min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900 relative overflow-hidden"
      }
    >
      {isPremium ? (
        <>
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
        </>
      ) : (
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80"
            alt="background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
      )}

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex items-center justify-center mb-8">
          <div
            className={
              isPremium
                ? "inline-flex rounded-xl border border-gray-700 bg-gray-900/40 backdrop-blur px-1 py-1"
                : "inline-flex rounded-xl border border-gray-200 bg-white/60 backdrop-blur px-1 py-1"
            }
          >
            <button
              type="button"
              onClick={() => setMode("free")}
              className={
                mode === "free"
                  ? isPremium
                    ? "px-4 py-2 rounded-lg bg-gray-800 text-white text-sm font-semibold"
                    : "px-4 py-2 rounded-lg bg-white text-gray-900 text-sm font-semibold shadow"
                  : isPremium
                    ? "px-4 py-2 rounded-lg text-gray-300 text-sm"
                    : "px-4 py-2 rounded-lg text-gray-600 text-sm"
              }
            >
              Free UI
            </button>
            <button
              type="button"
              onClick={() => setMode("premium")}
              className={
                mode === "premium"
                  ? isPremium
                    ? "px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold"
                    : "px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold"
                  : isPremium
                    ? "px-4 py-2 rounded-lg text-gray-300 text-sm"
                    : "px-4 py-2 rounded-lg text-gray-600 text-sm"
              }
            >
              Premium UI
            </button>
          </div>
        </div>

        {isPremium ? (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Premium URL Shortener
            </h1>
            <p className="text-sm sm:text-base text-gray-300">
              Faster, cleaner, and built for teams.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 text-gray-900">
              URL Shortener
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Simple link shortener for everyone.
            </p>
          </motion.div>
        )}

        <UrlShortener variant={isPremium ? "premium" : "free"} />
      </div>
    </div>
  );
}

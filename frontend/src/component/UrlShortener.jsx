import React, { useState } from "react";
import { motion } from "framer-motion";
import { useShortenUrl } from "../hooks/useUrl";
import { Loader2, Copy } from "lucide-react";

const UrlShortener = () => {
  const BASEURL=`${import.meta.env.VITE_BACKEND_URL}/api/url`;
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const { mutate, data, isPending, isError, error } = useShortenUrl();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;
    mutate(url);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${BASEURL}/${data.shortUrl}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          URL Shortener
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900/80 backdrop-blur-2xl shadow-2xl rounded-2xl p-6 sm:p-8 border border-gray-700"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="text"
              placeholder="Paste your link..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full flex-1 bg-gray-800 border border-gray-700 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            />
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-grey-900 to-blue-500 text-white rounded-xl font-semibold shadow-md disabled:opacity-60 flex items-center justify-center cursor-pointer"
              disabled={isPending}
            >
              {isPending ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                "Shorten"
              )}
            </motion.button>
          </form>

          {isError && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 mt-4 text-center text-sm sm:text-base"
            >
              {error.message}
            </motion.p>
          )}

          {data?.shortUrl && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            >
              <a
                href={`${BASEURL}/${data.shortUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-medium break-all sm:break-normal text-center sm:text-left"
              >
                shortUrl/{data.shortUrl}
              </a>
              <button
                onClick={handleCopy}
                className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm flex items-center justify-center gap-1 cursor-pointer"
              >
                <Copy size={16} />
                {copied ? "Copied!" : "Copy"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default UrlShortener;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useShortenUrl } from "../hooks/useUrl";
import { Loader2, Copy } from "lucide-react";

const UrlShortener = ({ variant = "premium" }) => {
  const BASEURL = import.meta.env.VITE_BACKEND_URL;
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
      `${BASEURL}/api/url/${data.shortUrl}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35 }}
      className={
        variant === "premium"
          ? "bg-gray-900/80 backdrop-blur-2xl shadow-2xl rounded-2xl p-6 sm:p-8 border border-gray-700 text-white"
          : "bg-white/85 backdrop-blur-md shadow-2xl rounded-2xl p-6 sm:p-8 border border-gray-200 text-gray-900"
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Paste your link..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={
            variant === "premium"
              ? "w-full flex-1 bg-gray-800 border border-gray-700 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              : "w-full flex-1 bg-white border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
          }
        />
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className={
            variant === "premium"
              ? "w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-gray-900 to-blue-500 text-white rounded-xl font-semibold shadow-md disabled:opacity-60 flex items-center justify-center cursor-pointer"
              : "w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-md disabled:opacity-60 flex items-center justify-center cursor-pointer"
          }
          disabled={isPending}
        >
          {isPending ? <Loader2 className="animate-spin" size={20} /> : "Shorten"}
        </motion.button>
      </form>

      {isError && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={
            variant === "premium"
              ? "text-red-400 mt-4 text-center text-sm sm:text-base"
              : "text-red-600 mt-4 text-center text-sm sm:text-base"
          }
        >
          {error.message}
        </motion.p>
      )}

      {data?.shortUrl && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className={
            variant === "premium"
              ? "mt-6 p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              : "mt-6 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          }
        >
          <a
            href={`${BASEURL}/api/url/${data.shortUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className={
              variant === "premium"
                ? "text-blue-400 hover:underline font-medium break-all sm:break-normal text-center sm:text-left"
                : "text-blue-700 hover:underline font-medium break-all sm:break-normal text-center sm:text-left"
            }
          >
            shortUrl/{data.shortUrl}
          </a>
          <button
            onClick={handleCopy}
            className={
              variant === "premium"
                ? "px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm flex items-center justify-center gap-1 cursor-pointer"
                : "px-3 py-1 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm flex items-center justify-center gap-1 cursor-pointer"
            }
          >
            <Copy size={16} />
            {copied ? "Copied!" : "Copy"}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default UrlShortener;

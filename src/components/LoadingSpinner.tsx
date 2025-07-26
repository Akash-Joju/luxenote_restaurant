// components/LoadingSpinner.tsx
"use client";

import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center"
    >
      <div className="w-12 h-12 border-4 border-[#3335d5] border-t-transparent rounded-full animate-spin"></div>
    </motion.div>
  );
}

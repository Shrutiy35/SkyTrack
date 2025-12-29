"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";
import { SearchBar } from "@/components/SearchBar";
import { FlightCard } from "@/components/FlightCard";
import { searchFlight, Flight } from "@/services/flightData";
import { motion, AnimatePresence } from "framer-motion";
import { CloudOff } from "lucide-react";

export default function Home() {
  const [flight, setFlight] = useState<Flight | null>(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setFlight(null);
    setError(false);
    setSearched(true);

    try {
      const result = await searchFlight(query);
      if (result) {
        setFlight(result);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center p-6 overflow-x-hidden">
      <Background />
      <Header />

      <div className="w-full flex-1 flex flex-col items-center max-w-5xl z-10 mt-4 sm:mt-8">
        <div className="text-center mb-10 space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-sky-900 tracking-tight"
          >
            Track any flight, <br />
            <span className="text-sky-500">anywhere in the world.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sky-800/60 font-medium text-sm sm:text-base"
          >
            Real-time flight status updates at your fingertips.
          </motion.p>
        </div>

        <SearchBar onSearch={handleSearch} isLoading={loading} />

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mt-12 text-center bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-rose-100"
            >
              <div className="bg-rose-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CloudOff className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-xl font-bold text-rose-900 mb-1">Flight not found</h3>
              <p className="text-rose-800/60 text-sm">We couldn't find flight data for that number.<br />Try AI302, EK501, or BA110.</p>
            </motion.div>
          )}

          {flight && (
            <FlightCard key="result" flight={flight} />
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </main>
  );
}

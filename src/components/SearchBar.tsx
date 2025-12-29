"use client";

import React, { useState } from "react";
import { Search, Plane } from "lucide-react";
import { motion } from "framer-motion";

interface SearchBarProps {
    onSearch: (flightNumber: string) => void;
    isLoading: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-lg mx-auto z-10 relative"
        >
            <form onSubmit={handleSubmit} className="relative group flex items-center">

                {/* Left Search Icon */}
                <Search className="absolute left-3 sm:left-5 text-black w-4 h-4 sm:w-5 sm:h-5" />

                {/* Input Field */}
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value.toUpperCase())}
                    placeholder="Enter Flight No. (e.g. AI302)"
                    className="w-full pl-10 sm:pl-14 pr-32 sm:pr-36 py-3 sm:py-4 rounded-full bg-white/90 backdrop-blur-xl border-2 border-white text-sky-900 placeholder-sky-900/40 shadow-xl focus:outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-200/50 transition-all font-semibold tracking-wide text-base sm:text-lg"
                />

                {/* Right Action Button */}
                <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isLoading || !query.trim()}
                    className="absolute right-1.5 sm:right-2 top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full px-4 sm:px-6 font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md flex items-center gap-1.5 sm:gap-2 cursor-pointer text-sm sm:text-base"
                >
                    {isLoading ? (
                        <>
                            <Plane className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                            <span>Tracking...</span>
                        </>
                    ) : (
                        <span>Track Flight</span>
                    )}
                </button>
            </form>
        </motion.div>
    );
};

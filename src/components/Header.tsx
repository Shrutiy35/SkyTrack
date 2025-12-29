"use client";

import { Plane } from "lucide-react";
import { motion } from "framer-motion";

export const Header = () => {
    return (
        <header className="flex items-center justify-center py-2 sm:py-4 z-10 relative">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 sm:gap-3 bg-white/30 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-white/40"
            >
                <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                    <Plane className="w-6 h-6 sm:w-8 sm:h-8 text-sky-600 fill-sky-600" />
                </motion.div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-sky-700 to-indigo-600 bg-clip-text text-transparent">
                    SkyTrack
                </h1>
            </motion.div>
        </header>
    );
};

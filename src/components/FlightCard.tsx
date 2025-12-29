"use client";

import React from "react";
import { Flight } from "@/services/flightData";
import { MapPin, Clock, Calendar, Plane, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlightCardProps {
    flight: Flight;
}

export const FlightCard = ({ flight }: FlightCardProps) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "On Time": return "bg-emerald-500/20 text-emerald-700 border-emerald-200";
            case "Delayed": return "bg-rose-500/20 text-rose-700 border-rose-200";
            case "Landed": return "bg-slate-500/20 text-slate-700 border-slate-200";
            case "In Air": return "bg-sky-500/20 text-sky-700 border-sky-200";
            default: return "bg-gray-500/20 text-gray-700 border-gray-200";
        }
    };

    return (
        <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full max-w-2xl mx-auto mt-8 mb-8 bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 sticky top-24 z-20"
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-sky-50 to-indigo-50 px-4 sm:px-5 py-3 border-b border-sky-100 flex justify-between items-center">
                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-base sm:text-lg">
                        ✈️
                    </div>
                    <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-800">{flight.airline}</h3>
                        <p className="text-sky-600 font-mono font-medium text-xs sm:text-sm">{flight.flightNumber}</p>
                    </div>
                </div>
                <div className={cn("px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold border", getStatusColor(flight.status))}>
                    {flight.status}
                </div>
            </div>

            {/* Route */}
            <div className="px-4 sm:px-5 py-4 sm:py-5">
                <div className="flex justify-between items-center relative">
                    {/* Origin */}
                    <div className="text-center z-10">
                        <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-0.5">{flight.origin.split(" ")[0]}</div>
                        <div className="text-slate-500 text-[10px] sm:text-xs font-medium">{flight.origin.split("(")[1].replace(")", "")}</div>
                        <div className="text-slate-400 text-[10px] mt-0.5 font-mono">{flight.scheduledDeparture}</div>
                    </div>

                    {/* Path Animation */}
                    <div className="flex-1 px-2 sm:px-4 relative flex flex-col items-center justify-center">
                        <div className="w-full h-0.5 bg-slate-200 absolute top-1/2 -translate-y-1/2"></div>
                        <motion.div
                            initial={{ x: "-45%" }}
                            animate={{ x: "45%" }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow-sm border border-sky-100 z-10"
                        >
                            <Plane className="w-3 h-3 sm:w-4 sm:h-4 text-sky-500 fill-sky-200 rotate-90" />
                        </motion.div>
                        <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono mt-3 tracking-wider">12H 30M</div>
                    </div>

                    {/* Destination */}
                    <div className="text-center z-10">
                        <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-0.5">{flight.destination.split(" ")[0]}</div>
                        <div className="text-slate-500 text-[10px] sm:text-xs font-medium">{flight.destination.split("(")[1].replace(")", "")}</div>
                        <div className="text-slate-400 text-[10px] mt-0.5 font-mono">{flight.scheduledArrival}</div>
                    </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                    <div className="bg-sky-50 rounded-xl p-3 border border-sky-100 data-card">
                        <div className="flex items-center gap-1.5 text-sky-700 mb-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Departure</span>
                        </div>
                        <div className="font-semibold text-sm text-slate-800">{flight.actualDeparture}</div>
                        <div className="text-[10px] text-slate-500">Actual</div>
                    </div>

                    <div className="bg-indigo-50 rounded-xl p-3 border border-indigo-100 data-card">
                        <div className="flex items-center gap-1.5 text-indigo-700 mb-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Arrival</span>
                        </div>
                        <div className="font-semibold text-sm text-slate-800">{flight.estimatedArrival}</div>
                        <div className="text-[10px] text-slate-500">Estimated</div>
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100 data-card">
                        <div className="flex items-center gap-1.5 text-emerald-700 mb-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Gate</span>
                        </div>
                        <div className="font-semibold text-sm text-slate-800">{flight.gate || "TBD"}</div>
                        <div className="text-[10px] text-slate-500">Terminal {flight.terminal || "-"}</div>
                    </div>

                    <div className="bg-violet-50 rounded-xl p-3 border border-violet-100 data-card">
                        <div className="flex items-center gap-1.5 text-violet-700 mb-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Date</span>
                        </div>
                        <div className="font-semibold text-sm text-slate-800">Dec 30</div>
                        <div className="text-[10px] text-slate-500">2025</div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

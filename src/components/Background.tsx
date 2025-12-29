"use client";

import React from "react";

export const Background = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Radiant Gradient: Sky Blue (Top) -> Soft Purple (Bottom) */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-200 to-purple-200 opacity-90" />
        </div>
    );
};

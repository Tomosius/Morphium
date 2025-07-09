// src/components/TopNav.tsx

import React from "react";


export default function TopNav() {
    return (
        <header
            className="flex justify-between items-center p-4 bg-gray-900 text-gray-100 shadow-lg whitespace-nowrap overflow-x-auto"
            role="banner"
        >
            {/* LEFT side */}
            <div className="flex flex-row items-center gap-4 min-w-0 whitespace-nowrap">
                <span className="text-xl font-bold text-white">Logo</span>
                <span className="ml-2 bg-gray-800 text-gray-100 rounded px-2 py-1 text-xs font-semibold border border-gray-700 hidden md:block">
          Data source
        </span>
            </div>
            {/* RIGHT side */}
            <div className="flex flex-row gap-3 items-center text-sm min-w-0 whitespace-nowrap">
                <button className="hover:text-gray-300">Help</button>
                <button className="hover:text-gray-300">Export</button>
                <a
                    href="/settings"
                    className="hover:text-gray-300"
                >
                    ⚙️ <span className="sr-only">Settings</span>
                </a>
            </div>
        </header>
    );
}
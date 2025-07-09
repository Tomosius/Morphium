"use client";

import React, { useState, useEffect, useRef } from "react";

export default function MobileMenuButton() {
  // State: is the menu open?
  const [open, setOpen] = useState(false);
  // Ref for the dropdown (for clicking outside)
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on Escape key
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Optional: close on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  return (
    <div className="relative md:hidden" ref={menuRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open main menu"
        className="text-xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        type="button"
      >
        ☰ <span className="sr-only">Open main menu</span>
      </button>
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="absolute left-0 mt-2 w-64 bg-white text-gray-800 rounded shadow-lg z-50 p-4"
        >
          {/* Place your nav here */}
          <nav>
            <a href="/import" className="block py-1">Import Files</a>
            <a href="/db-connect" className="block py-1">Database Connect</a>
            <a href="/db-connect" className="block py-1">Database Connect</a>
            <a href="/db-connect" className="block py-1">Database Connect</a>
            <a href="/db-connect" className="block py-1">Database Connect</a>
            <a href="/db-connect" className="block py-1">Database Connect</a>
            <a href="/db-connect" className="block py-1">Database Connect</a>
            <a href="/db-connect" className="block py-1">Database Connect</a>
            <a href="/db-connect" className="block py-1">Database Connect</a>
            <a href="/db-connect" className="block py-1">Database Connect</a>
            <a href="/db-connect" className="block py-1">Database Connect</a>

            {/* etc */}
          </nav>
        </div>
      )}
    </div>
  );
}
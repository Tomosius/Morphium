"use client";

import React, { useState, useEffect, useRef } from "react";
import { menuGroups } from "@/components/navigation/NavigationLinks";

export default function MobileMenuButton() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null); // store group title or null
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setOpenGroup(null);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  // Handle group toggle
  const handleGroupClick = (title: string) => {
    setOpenGroup((prev) => (prev === title ? null : title));
  };

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
          <nav>
            {menuGroups.map((group) => (
              <div key={group.title} className="mb-4">
                {/* Group Header */}
                <button
                  className="w-full flex items-center justify-between font-bold text-xs text-gray-500 uppercase mb-2 focus:outline-none"
                  onClick={() => handleGroupClick(group.title)}
                  aria-expanded={openGroup === group.title}
                  aria-controls={`group-${group.title}`}
                  type="button"
                >
                  <span className="flex items-center gap-2">
                    {group.icon && <span>{group.icon}</span>}
                    {group.title}
                  </span>
                  <span>
                    {openGroup === group.title ? "▾" : "▸"}
                  </span>
                </button>
                {/* Group Links: Collapse/Expand */}
                {openGroup === group.title && (
                  <div className="ml-2" id={`group-${group.title}`}>
                    {group.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block py-1 text-sm hover:underline"
                        onClick={() => setOpen(false)} // closes mobile menu on link click
                      >
                        {link.icon && <span className="mr-2">{link.icon}</span>}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
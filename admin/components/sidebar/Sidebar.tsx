"use client";

import { useState } from "react";
import SidebarItem from "./SidebarItem";
import ToggleButton from "./ToggleButton";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      
      {/* Sidebar */}
      <aside
        className={`
        bg-gray-900 text-white
        h-screen
        transition-all duration-300
        ${isOpen ? "w-64" : "w-20"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          {isOpen && (
            <h1 className="text-lg font-semibold">
              Dashboard
            </h1>
          )}

          <ToggleButton
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>

        {/* Menu */}
        <nav className="mt-6 space-y-2">
          <SidebarItem
            href="/"
            label="Home"
            icon="🏠"
            isOpen={isOpen}
          />

          <SidebarItem
            href="/users"
            label="Users"
            icon="👤"
            isOpen={isOpen}
          />

          <SidebarItem
            href="/settings"
            label="Settings"
            icon="⚙️"
            isOpen={isOpen}
          />
        </nav>
      </aside>

    </div>
  );
}
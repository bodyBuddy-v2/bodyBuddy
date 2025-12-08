import React from "react";

import { HomeMenu, TopBar } from "@/widgets";

export default function Layout({ children }: { children: React.ReactNode }) {
  const bottomNavHeight = 72;

  return (
    <div className="h-screen flex flex-col">
      <TopBar />

      <main className="flex-1 overflow-y-auto" style={{ paddingBottom: bottomNavHeight }}>
        {children}
      </main>

      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.06)]"
        style={{ height: bottomNavHeight }}
      >
        <HomeMenu />
      </div>
    </div>
  );
}

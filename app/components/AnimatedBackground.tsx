"use client";

import React from "react";

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Soft animated gradient backdrop */}
      {/* Floating food emojis for playful vibe */}
      <div className="absolute inset-0 animate-float-slow">
        <div className="absolute left-[10%] top-[20%] text-5xl opacity-30 rotate-[-8deg]">
          🥟
        </div>
        <div className="absolute left-[75%] top-[28%] text-6xl opacity-25 rotate-[12deg]">
          🍲
        </div>
        <div className="absolute left-[20%] top-[70%] text-6xl opacity-25 rotate-[6deg]">
          🥗
        </div>
        <div className="absolute left-[60%] top-[65%] text-5xl opacity-30 rotate-[-12deg]">
          🍞
        </div>
        <div className="absolute left-[35%] top-[40%] text-5xl opacity-20 rotate-[4deg]">
          🫙
        </div>
      </div>

      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0_0_0_/_0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0_0_0_/_0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
    </div>
  );
}

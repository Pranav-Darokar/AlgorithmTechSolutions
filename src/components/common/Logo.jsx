import React from 'react'

export default function Logo({ className = "w-10 h-10", size = 40 }) {
  return (
    <svg 
      viewBox="0 0 120 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      style={{ width: size, height: (size * 100) / 120 }}
    >
      <defs>
        {/* Fuchsia to Violet Gradient for brackets */}
        <linearGradient id="bracketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d946ef" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        {/* Amber to Orange Gradient for letters and steam */}
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>

      {/* Speed lines left */}
      <path d="M 12,68 H 25" stroke="#ea580c" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 15,74 H 22" stroke="#ea580c" strokeWidth="3.5" strokeLinecap="round" />

      {/* Speed lines right */}
      <path d="M 95,26 H 108" stroke="#ea580c" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 98,32 H 105" stroke="#ea580c" strokeWidth="3.5" strokeLinecap="round" />

      {/* Left Bracket `<` */}
      <path d="M 42,25 L 20,48 C 18,50 18,52 20,54 L 42,77" stroke="url(#bracketGrad)" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="25" cy="51" r="3" fill="#8b5cf6" />
      
      {/* Right Bracket `>` */}
      <path d="M 78,25 L 100,48 C 102,50 102,52 100,54 L 78,77" stroke="url(#bracketGrad)" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="95" cy="51" r="3" fill="#8b5cf6" />

      {/* Central Monogram "AT" - Realignment for clean readability */}
      {/* Letter A */}
      {/* Left Leg */}
      <path d="M 60,33 L 48,74" stroke="url(#textGrad)" strokeWidth="3.2" strokeLinecap="round" />
      {/* Right Leg */}
      <path d="M 60,33 L 72,74" stroke="url(#textGrad)" strokeWidth="3.2" strokeLinecap="round" />
      {/* Crossbar */}
      <path d="M 53,60 H 67" stroke="url(#textGrad)" strokeWidth="2.8" strokeLinecap="round" />
      {/* Left foot serif */}
      <path d="M 43,74 H 53" stroke="url(#textGrad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right foot serif */}
      <path d="M 67,74 H 77" stroke="url(#textGrad)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Letter T */}
      {/* Crossbar */}
      <path d="M 44,48 H 76" stroke="url(#textGrad)" strokeWidth="3.2" strokeLinecap="round" />
      {/* Left crossbar serif */}
      <path d="M 44,43 V 53" stroke="url(#textGrad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right crossbar serif */}
      <path d="M 76,43 V 53" stroke="url(#textGrad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Vertical Stem */}
      <path d="M 60,48 V 85" stroke="url(#textGrad)" strokeWidth="3.2" strokeLinecap="round" />
      {/* Stem bottom serif */}
      <path d="M 52,85 H 68" stroke="url(#textGrad)" strokeWidth="3" strokeLinecap="round" />

      {/* Coffee Cup Steam (top) */}
      {/* Plate */}
      <path d="M 50,29 C 55,31 65,31 70,29" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-foreground/80" />
      {/* Steam waves */}
      <path d="M 55,23 C 57,18 53,14 57,8 C 60,13 57,17 59,23" fill="url(#textGrad)" />
      <path d="M 61,24 C 63,19 59,15 63,9 C 66,14 63,18 65,24" fill="url(#textGrad)" />
    </svg>
  )
}

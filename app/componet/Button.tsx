'use client';

import { useState, useRef, ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
}

export default function GlowButton({ children }: GlowButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      className="
        relative
        p-[14px]
        flex items-center justify-center gap-[3.5px]
        rounded-full
        border border-[#FF781C]
        bg-[linear-gradient(90deg,_#FF8430_0%,_#BE4D00_100%)]
        text-white
        uppercase
        text-[12px]
        font-bold
        leading-[12px]
        mb-2
        overflow-hidden
        lg:mb-4
        lg:p-[32px]
        lg:text-[24px]
        lg:leading-[24px]
        group
        transition-all
        duration-300
        ease-out
        hover:scale-105
        hover:-translate-y-1
        active:scale-95
        active:translate-y-0
        cursor-pointer
      "
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      {/* Efeito glow que segue o mouse - com mais blur */}
      <span
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          pointer-events-none
          blur-xl
        "
        style={{
          background: `radial-gradient(circle 120px at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 70%)`,
        }}
      />
      
      {/* Borda glow - com mais blur */}
      <span
        className="
          absolute
          inset-[-4px]
          rounded-full
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          pointer-events-none
          blur-md
        "
        style={{
          background: `radial-gradient(circle 180px at var(--mouse-x) var(--mouse-y), rgba(255, 132, 48, 1), rgba(255, 132, 48, 0.5) 50%, transparent 70%)`,
          maskImage: 'linear-gradient(white, white) content-box, linear-gradient(white, white)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '4px',
        }}
      />

      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}
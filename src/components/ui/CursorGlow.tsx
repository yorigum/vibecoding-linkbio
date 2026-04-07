"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export function CursorGlow() {
  const [isHovering, setIsHovering] = useState(false);

  // We scale the mass for a heavier, swooping lag and a massive 800px orb
  const springX = useSpring(0, { stiffness: 80, damping: 40, mass: 1.5 });
  const springY = useSpring(0, { stiffness: 80, damping: 40, mass: 1.5 });

  useEffect(() => {
    // We only track the cursor natively on desktop to avoid weird mobile touch ghosting
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by 400px (half of our new 800px dimension) so the cursor hits the center perfectly
      springX.set(e.clientX - 400);
      springY.set(e.clientY - 400);
      
      if (!isHovering) setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    
    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [springX, springY, isHovering]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden hidden md:block">
      <motion.div
        className="absolute rounded-full blur-[140px] mix-blend-multiply dark:mix-blend-screen transition-opacity duration-1000"
        style={{
          width: "800px",
          height: "800px",
          x: springX,
          y: springY,
          opacity: isHovering ? 0.6 : 0,
          background: "radial-gradient(circle, var(--color-link) 0%, rgba(162,50,200,0.5) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}

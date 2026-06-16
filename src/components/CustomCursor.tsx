import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor({ isDark }: { isDark: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  // Position of the actual cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for a luxury fluid lag effect matching high-end design sites
  const springConfig = { damping: 35, stiffness: 280, mass: 0.6 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on mobile / devices with touch capabilities
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newRipple: Ripple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-3), newRipple]); // Maintain maximum 3 active ripples for premium performance
    };

    const handleMouseUp = () => setIsClicking(false);

    // Dynamic hover selector detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive-card') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (isInteractive) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive-card') ||
        target.classList.contains('cursor-pointer');

      if (isInteractive) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  // Set colors based on theme and hover states
  const mainColorHex = isDark ? 'rgba(59, 130, 246, 0.85)' : 'rgba(37, 99, 235, 0.9)'; // Blue-500
  const ringColorHex = isHovered 
    ? (isDark ? 'rgba(59, 130, 246, 0.35)' : 'rgba(37, 99, 235, 0.25)')
    : (isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(51, 65, 85, 0.08)');

  return (
    <>
      {/* 1. Click Ripple Shockwaves */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{
            position: 'fixed',
            left: ripple.x,
            top: ripple.y,
            x: '-50%',
            y: '-50%',
            width: 8,
            height: 8,
            opacity: 0.75,
            borderRadius: '50%',
            border: isDark ? '1.5px solid rgba(59, 130, 246, 0.65)' : '1.5px solid rgba(37, 99, 235, 0.6)',
            backgroundColor: isDark ? 'rgba(59, 130, 246, 0.08)' : 'rgba(37, 99, 235, 0.04)',
            pointerEvents: 'none',
            zIndex: 99998,
          }}
          animate={{
            width: 75,
            height: 75,
            opacity: 0,
          }}
          transition={{
            duration: 0.45,
            ease: [0.1, 0.8, 0.3, 1], // luxury custom easing curve
          }}
          onAnimationComplete={() => {
            setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
          }}
        />
      ))}

      {/* 2. Outer Spring-Smoothed Ring */}
      <motion.div
        style={{
          left: trailX,
          top: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 56 : 28,
          height: isHovered ? 56 : 28,
          borderColor: isHovered 
            ? (isDark ? 'rgba(59, 130, 246, 0.6)' : 'rgba(37, 99, 235, 0.4)') 
            : (isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(51, 65, 85, 0.15)'),
          backgroundColor: ringColorHex,
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{
          width: { type: 'spring', stiffness: 300, damping: 25 },
          height: { type: 'spring', stiffness: 300, damping: 25 },
          backgroundColor: { duration: 0.15 },
          scale: { type: 'spring', stiffness: 400, damping: 15 }
        }}
        className="fixed pointer-events-none z-[99999] rounded-full border backdrop-blur-[0.5px]"
      />

      {/* 3. Inner Precise Sharp Dot */}
      <motion.div
        style={{
          left: cursorX,
          top: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.5 : isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? 'rgba(16, 185, 129, 0.9)' : mainColorHex, // turns emerald-500 on hover for playful interactive spark!
        }}
        transition={{
          scale: { type: 'spring', stiffness: 450, damping: 20 }
        }}
        className="fixed pointer-events-none z-[99999] w-2 h-2 rounded-full shadow-sm"
      />
    </>
  );
}

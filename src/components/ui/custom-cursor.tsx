import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 380, mass: 0.4 };
  const glowSpringConfig = { damping: 32, stiffness: 190, mass: 0.7 };

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const glowX = useSpring(mouseX, glowSpringConfig);
  const glowY = useSpring(mouseY, glowSpringConfig);

  // Magnetic attraction listener for buttons & interactive chips
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Add trailing light blue particle on movement
      if (Math.random() > 0.4 && particlesRef.current.length < 35) {
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.4,
          size: Math.random() * 3 + 1.5,
          alpha: 0.8,
        });
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("button, a, [role='button'], .magnetic-target");
      if (interactiveEl) {
        setIsHovering(true);

        // Magnetic Pull Effect on Element
        const rect = interactiveEl.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        (interactiveEl as HTMLElement).style.transform = `translate3d(${relX * 0.2}px, ${relY * 0.2}px, 0)`;
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("button, a, [role='button'], .magnetic-target");
      if (interactiveEl) {
        (interactiveEl as HTMLElement).style.transform = "translate3d(0, 0, 0)";
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY, isVisible]);

  // Particle Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId: number;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.025;
        p.size *= 0.96;

        if (p.alpha <= 0 || p.size <= 0.2) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`; // Light blue / Cyan particle
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(56, 189, 248, 0.8)";
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Trailing Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9997] w-full h-full"
      />

      {/* Signature Light Blue Radial Glow */}
      <motion.div
        className="fixed top-0 left-0 w-80 h-80 rounded-full pointer-events-none z-[1] mix-blend-screen opacity-70 dark:opacity-85"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(59, 130, 246, 0.1) 45%, rgba(0, 0, 0, 0) 70%)",
          willChange: "transform",
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Inner Precision Light Blue Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3.5 h-3.5 bg-sky-400 rounded-full pointer-events-none z-[9999] shadow-[0_0_14px_rgba(56,189,248,1)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer Light Blue Accent Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border border-sky-400/50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        animate={{
          scale: isHovering ? 2.2 : 1,
          borderColor: isHovering ? "rgba(56, 189, 248, 0.9)" : "rgba(56, 189, 248, 0.4)",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

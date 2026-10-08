import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function ScrollProgressOrb() {
  const { scrollYProgress } = useScroll();
  const [percent, setPercent] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const p = Math.round(latest * 100);
      setPercent(p);
      if (p >= 99 && !isCompleted) {
        setIsCompleted(true);
      } else if (p < 95 && isCompleted) {
        setIsCompleted(false);
      }
    });
  }, [scrollYProgress, isCompleted]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: percent > 5 ? 1 : 0, scale: percent > 5 ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center pointer-events-auto"
    >
      <button
        onClick={scrollToTop}
        className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full glass-card bg-background/85 border border-cyan-500/40 backdrop-blur-xl flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:scale-110 active:scale-95 transition-all group overflow-hidden"
        title="Scroll to Top"
      >
        {/* Fill SVG background with blue/cyan energy */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 p-1 pointer-events-none">
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-cyan-500/20"
            strokeWidth="3"
            fill="none"
          />
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-cyan-400"
            strokeWidth="3"
            strokeDasharray="125.6"
            strokeDashoffset={125.6 * (1 - percent / 100)}
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Inner Content Icon */}
        <div className="relative z-10 flex flex-col items-center justify-center text-cyan-400 group-hover:-translate-y-0.5 transition-transform">
          <ChevronUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-[9px] font-mono font-bold leading-none text-foreground">
            {percent}%
          </span>
        </div>

        {/* 100% Celebration Pulse Ring */}
        {isCompleted && (
          <span className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-75" />
        )}
      </button>
    </motion.div>
  );
}

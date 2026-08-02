import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Zap } from "lucide-react";

export function EasterEggs() {
  const [matrixMode, setMatrixMode] = useState(false);
  const [holoScan, setHoloScan] = useState(false);
  const [pulseWave, setPulseWave] = useState(false);
  const [keyBuffer, setKeyBuffer] = useState("");

  // Konami Code Sequence
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  const [konamiIndex, setKonamiIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events when typing inside input/textarea
      const activeEl = document.activeElement;
      if (
        activeEl?.tagName === "INPUT" ||
        activeEl?.tagName === "TEXTAREA" ||
        (activeEl as HTMLElement)?.isContentEditable
      ) {
        return;
      }

      // 1. Hotkeys S & P
      if (e.key.toLowerCase() === "s" && !e.ctrlKey && !e.metaKey) {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      }
      if (e.key.toLowerCase() === "p" && !e.ctrlKey && !e.metaKey) {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }

      // 2. Typing "AI" Scanner Trigger
      const newBuf = (keyBuffer + e.key.toUpperCase()).slice(-2);
      setKeyBuffer(newBuf);
      if (newBuf === "AI") {
        setHoloScan(true);
        setTimeout(() => setHoloScan(false), 3000);
      }

      // 3. Konami Code Matching
      if (e.key === konamiCode[konamiIndex]) {
        const nextIndex = konamiIndex + 1;
        if (nextIndex === konamiCode.length) {
          setMatrixMode((prev) => !prev);
          setKonamiIndex(0);
        } else {
          setKonamiIndex(nextIndex);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    // 4. Logo 5-click Shockwave Listener
    const handleLogoClick = () => {
      setPulseWave(true);
      setTimeout(() => setPulseWave(false), 1500);
    };

    const logoEl = document.querySelector(".navbar-logo, [data-logo]");
    if (logoEl) {
      let clicks = 0;
      const onClick = () => {
        clicks++;
        if (clicks >= 5) {
          handleLogoClick();
          clicks = 0;
        }
        setTimeout(() => (clicks = 0), 2000);
      };
      logoEl.addEventListener("click", onClick);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        logoEl.removeEventListener("click", onClick);
      };
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiIndex, keyBuffer]);

  return (
    <>
      {/* 1. Cyberpunk Matrix AI Overlay Mode (Konami Code) */}
      <AnimatePresence>
        {matrixMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9990] pointer-events-none border-[12px] border-emerald-500/60 shadow-[inset_0_0_80px_rgba(16,185,129,0.4)]"
          >
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/90 border border-emerald-500/80 px-4 py-2 rounded-full font-mono text-emerald-400 text-xs flex items-center gap-2 shadow-[0_0_20px_#10b981]">
              <Terminal className="w-4 h-4 animate-spin" />
              <span>[KONAMI CODE ACTIVATED: CYBER MATRIX MODE ONLINE]</span>
              <button
                onClick={() => setMatrixMode(false)}
                className="ml-2 underline text-white hover:text-emerald-300 pointer-events-auto"
              >
                Exit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Holographic Scanner Beam (Typing "AI") */}
      <AnimatePresence>
        {holoScan && (
          <motion.div
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ duration: 2.5, ease: "linear" }}
            className="fixed inset-x-0 h-3 z-[9995] pointer-events-none bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_25px_#00f2fe]"
          >
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-cyan-950/90 border border-cyan-400/80 px-4 py-1.5 rounded-full font-mono text-cyan-300 text-xs flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 animate-bounce" />
              <span>NEURAL SCANNER IN PROGRESS...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Neural Shockwave Pulse (5-Click Logo) */}
      <AnimatePresence>
        {pulseWave && (
          <motion.div
            initial={{ scale: 0, opacity: 0.9 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="fixed top-6 left-12 w-64 h-64 rounded-full border-4 border-cyan-400 bg-cyan-500/10 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_60px_rgba(6,182,212,0.8)]"
          />
        )}
      </AnimatePresence>
    </>
  );
}

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Cpu } from "lucide-react";

const ROBOT_MESSAGES = [
  "Hello! I'm Saketh's AI Assistant 🤖",
  "Exploring cutting-edge AI & Web apps! 🚀",
  "System status: 100% Operational ✨",
  "Building the future with Neural Networks 🧠",
  "Hover or click me to interact! 💻",
  "Saketh loves AI Filmmaking & Coding 🎬",
];

export function RobotBackground() {
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [expression, setExpression] = useState<"normal" | "happy" | "blink" | "surprised">("normal");
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(true);
  const robotRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for eyes & 3D tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (robotRef.current) {
        const rect = robotRef.current.getBoundingClientRect();
        const robotCenterX = rect.left + rect.width / 2;
        const robotCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - robotCenterX;
        const dy = e.clientY - robotCenterY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const maxEyeMove = 12;
        const eyeX = (dx / (dist || 1)) * Math.min(Math.abs(dx) / 20, maxEyeMove);
        const eyeY = (dy / (dist || 1)) * Math.min(Math.abs(dy) / 20, maxEyeMove);

        setEyeOffset({ x: eyeX, y: eyeY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Periodic blinking & message rotation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setExpression("blink");
      setTimeout(() => setExpression("normal"), 250);
    }, 4500);

    const msgInterval = setInterval(() => {
      setCurrentMsgIndex((prev) => (prev + 1) % ROBOT_MESSAGES.length);
    }, 7000);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(msgInterval);
    };
  }, []);

  const handleRobotClick = () => {
    setExpression("happy");
    setCurrentMsgIndex((prev) => (prev + 1) % ROBOT_MESSAGES.length);
    setShowMessage(true);
    setTimeout(() => setExpression("normal"), 1500);
  };

  return (
    <div className="relative w-full max-w-[330px] lg:max-w-[370px] aspect-square flex items-center justify-center pointer-events-auto select-none group">
      {/* Background Holographic Glow & Aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-purple-600/20 rounded-full blur-[90px] animate-pulse -z-10" />

      {/* Floating Holographic Ring Grid */}
      <motion.div
        className="absolute w-[115%] h-[115%] border border-cyan-500/20 rounded-full pointer-events-none -z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_12px_#00f2fe]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
      </motion.div>

      <motion.div
        className="absolute w-[95%] h-[95%] border border-dashed border-primary/30 rounded-full pointer-events-none -z-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Holographic Speech Bubble */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 z-30 min-w-[240px] max-w-[320px] glass-card bg-background/85 border border-cyan-500/40 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-[0_0_25px_rgba(6,182,212,0.25)] text-center text-xs sm:text-sm font-medium text-foreground cursor-pointer"
            onClick={handleRobotClick}
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-cyan-400 font-mono font-semibold">
                <Cpu className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} />
                AI Assistant
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMessage(false);
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Close speech bubble"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-foreground/90 font-sans leading-snug">{ROBOT_MESSAGES[currentMsgIndex]}</p>
            {/* Bubble Tail */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background/85 border-r border-b border-cyan-500/40 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Orbiting Satellite Drone */}
      <motion.div
        className="absolute w-12 h-12 pointer-events-none z-20"
        animate={{
          x: [120, 150, 100, -130, -150, -100, 120],
          y: [-80, 20, 120, 80, -40, -100, -80],
          scale: [1, 1.1, 0.9, 1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 60 60" className="w-full h-full drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
          <circle cx="30" cy="30" r="14" fill="url(#droneGradient)" />
          <circle cx="30" cy="30" r="6" fill="#00f2fe" className="animate-ping" style={{ animationDuration: "3s" }} />
          <path d="M 12 30 L 2 30 M 48 30 L 58 30 M 30 12 L 30 2 M 30 48 L 30 58" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <radialGradient id="droneGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0f172a" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      {/* MAIN ROBOT BODY CONTAINER with Floating & Tilt Animation */}
      <motion.div
        ref={robotRef}
        onClick={handleRobotClick}
        className="relative w-[230px] h-[280px] sm:w-[270px] sm:h-[320px] cursor-pointer"
        animate={{
          y: [0, -16, 0],
          rotateZ: [0, 1.5, -1.5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <svg viewBox="0 0 340 400" className="w-full h-full overflow-visible drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
          <defs>
            {/* Gradients */}
            <linearGradient id="helmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="helmHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="visorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#090d16" />
              <stop offset="100%" stopColor="#030712" />
            </linearGradient>

            <linearGradient id="visorGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>

            <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#090d16" />
            </linearGradient>

            <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            <radialGradient id="thrusterGrad" cx="50%" cy="0%" r="90%">
              <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </radialGradient>

            {/* Filter Effects */}
            <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. ANTENNA & TOP SIGNAL ORB */}
          <g>
            <line x1="170" y1="50" x2="170" y2="15" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
            {/* Signal waves */}
            <circle cx="170" cy="15" r="16" fill="none" stroke="#00f2fe" strokeWidth="1.5" opacity="0.4" className="animate-ping" style={{ animationDuration: "2s" }} />
            <circle cx="170" cy="15" r="26" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.25" className="animate-ping" style={{ animationDuration: "2s", animationDelay: "0.5s" }} />
            {/* Top orb */}
            <circle cx="170" cy="15" r="8" fill="url(#coreGrad)" filter="url(#neonGlow)" />
            <circle cx="170" cy="15" r="3" fill="#ffffff" />
          </g>

          {/* 2. LEVITATING JET THRUST (UNDER BODY) */}
          <g>
            {/* Outer flame */}
            <path d="M 125 320 Q 170 395 215 320 Z" fill="url(#thrusterGrad)" filter="url(#neonGlow)" />
            {/* Inner flame core */}
            <path d="M 145 320 Q 170 375 195 320 Z" fill="#ffffff" opacity="0.8" />
            {/* Floating Thruster Spark Particles */}
            <circle cx="155" cy="350" r="2.5" fill="#00f2fe" className="animate-bounce" />
            <circle cx="170" cy="370" r="3.5" fill="#3b82f6" className="animate-ping" style={{ animationDuration: "1s" }} />
            <circle cx="185" cy="345" r="2" fill="#8b5cf6" className="animate-bounce" />
          </g>

          {/* 3. SHOULDER PADS & ARMS */}
          {/* Left Shoulder */}
          <g>
            <rect x="55" y="195" width="45" height="40" rx="14" fill="url(#helmGrad)" stroke="#475569" strokeWidth="2" />
            <circle cx="77" cy="215" r="7" fill="#00f2fe" filter="url(#neonGlow)" />
            {/* Left Arm/Hand Float */}
            <rect x="42" y="240" width="30" height="65" rx="12" fill="url(#bodyGrad)" stroke="#334155" strokeWidth="2" transform="rotate(8, 57, 240)" />
            <circle cx="53" cy="300" r="9" fill="#1e293b" stroke="#00f2fe" strokeWidth="2" />
          </g>

          {/* Right Shoulder */}
          <g>
            <rect x="240" y="195" width="45" height="40" rx="14" fill="url(#helmGrad)" stroke="#475569" strokeWidth="2" />
            <circle cx="263" cy="215" r="7" fill="#00f2fe" filter="url(#neonGlow)" />
            {/* Right Arm/Hand Float */}
            <rect x="268" y="240" width="30" height="65" rx="12" fill="url(#bodyGrad)" stroke="#334155" strokeWidth="2" transform="rotate(-8, 283, 240)" />
            <circle cx="287" cy="300" r="9" fill="#1e293b" stroke="#00f2fe" strokeWidth="2" />
          </g>

          {/* 4. MAIN TORSO / CHEST */}
          <g>
            {/* Outer Armor Chassis */}
            <path
              d="M 95 190 C 95 180 245 180 245 190 L 235 320 C 235 328 105 328 105 320 Z"
              fill="url(#bodyGrad)"
              stroke="#334155"
              strokeWidth="3"
            />
            {/* Chest Collar Highlight */}
            <path d="M 120 190 L 220 190 L 210 215 L 130 215 Z" fill="url(#helmGrad)" stroke="#475569" strokeWidth="1.5" />

            {/* ARC REACTOR CORE */}
            <circle cx="170" cy="255" r="28" fill="#090d16" stroke="#334155" strokeWidth="3" />
            <circle cx="170" cy="255" r="22" fill="none" stroke="#00f2fe" strokeWidth="2" strokeDasharray="6 4" className="animate-spin" style={{ animationDuration: "10s" }} />
            <circle cx="170" cy="255" r="16" fill="url(#coreGrad)" filter="url(#neonGlow)" />
            <circle cx="170" cy="255" r="7" fill="#ffffff" />

            {/* Cyber Circuit Lines on Chest */}
            <path d="M 115 235 L 140 235 L 148 248" fill="none" stroke="#00f2fe" strokeWidth="2" opacity="0.7" strokeLinecap="round" />
            <path d="M 225 235 L 200 235 L 192 248" fill="none" stroke="#00f2fe" strokeWidth="2" opacity="0.7" strokeLinecap="round" />
            <circle cx="115" cy="235" r="2.5" fill="#00f2fe" />
            <circle cx="225" cy="235" r="2.5" fill="#00f2fe" />
          </g>

          {/* 5. NECK JOINT */}
          <rect x="150" y="165" width="40" height="25" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          <line x1="158" y1="173" x2="182" y2="173" stroke="#00f2fe" strokeWidth="2" />
          <line x1="158" y1="181" x2="182" y2="181" stroke="#00f2fe" strokeWidth="2" />

          {/* 6. HEAD & VISOR */}
          <g>
            {/* Outer Helmet */}
            <path
              d="M 90 115 C 90 50 250 50 250 115 C 250 160 230 170 170 170 C 110 170 90 160 90 115 Z"
              fill="url(#helmGrad)"
              stroke="#475569"
              strokeWidth="3.5"
            />
            {/* Top Helmet Plate */}
            <path d="M 120 70 Q 170 52 220 70 L 210 88 Q 170 75 130 88 Z" fill="url(#helmHighlight)" opacity="0.9" />

            {/* VISOR DISPLAY SCREEN */}
            <path
              d="M 110 100 C 110 80 230 80 230 100 C 230 142 215 152 170 152 C 125 152 110 142 110 100 Z"
              fill="url(#visorGrad)"
              stroke="url(#visorGlow)"
              strokeWidth="2.5"
              filter="url(#neonGlow)"
            />

            {/* Visor Glass Reflection Highlight */}
            <path d="M 120 90 Q 170 82 220 90 C 215 95 125 95 120 90 Z" fill="#ffffff" opacity="0.25" />

            {/* DYNAMIC DIGITAL EYES inside Visor (Moves with Cursor!) */}
            <g transform={`translate(${eyeOffset.x}, ${eyeOffset.y})`}>
              {expression === "blink" ? (
                // Blinking Eyes (Horizontal Neon Slots)
                <>
                  <line x1="135" y1="118" x2="155" y2="118" stroke="#00f2fe" strokeWidth="4" strokeLinecap="round" filter="url(#neonGlow)" />
                  <line x1="185" y1="118" x2="205" y2="118" stroke="#00f2fe" strokeWidth="4" strokeLinecap="round" filter="url(#neonGlow)" />
                </>
              ) : expression === "happy" ? (
                // Happy Arc Eyes (^ ^)
                <>
                  <path d="M 135 124 Q 145 108 155 124" fill="none" stroke="#00f2fe" strokeWidth="4.5" strokeLinecap="round" filter="url(#neonGlow)" />
                  <path d="M 185 124 Q 195 108 205 124" fill="none" stroke="#00f2fe" strokeWidth="4.5" strokeLinecap="round" filter="url(#neonGlow)" />
                </>
              ) : (
                // Normal Expressive Glowing Pupil Eyes
                <>
                  {/* Left Eye Outer Glow */}
                  <circle cx="145" cy="118" r="12" fill="#00f2fe" opacity="0.3" filter="url(#neonGlow)" />
                  <circle cx="145" cy="118" r="8" fill="#00f2fe" filter="url(#neonGlow)" />
                  <circle cx="143" cy="115" r="3" fill="#ffffff" />

                  {/* Right Eye Outer Glow */}
                  <circle cx="195" cy="118" r="12" fill="#00f2fe" opacity="0.3" filter="url(#neonGlow)" />
                  <circle cx="195" cy="118" r="8" fill="#00f2fe" filter="url(#neonGlow)" />
                  <circle cx="193" cy="115" r="3" fill="#ffffff" />
                </>
              )}
            </g>

            {/* Visor Corner Data Indicators */}
            <rect x="118" y="140" width="12" height="3" fill="#3b82f6" rx="1.5" />
            <rect x="133" y="140" width="6" height="3" fill="#00f2fe" rx="1.5" />
            <rect x="200" y="140" width="20" height="3" fill="#00f2fe" rx="1.5" />
          </g>
        </svg>
      </motion.div>

      {/* Quick Action Interactive Control Pill below robot */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 border border-border/80 backdrop-blur-md text-[11px] font-mono text-muted-foreground shadow-md hover:border-primary/50 transition-all">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>CLICK ROBOT TO CHAT</span>
        <Sparkles className="w-3 h-3 text-cyan-400" />
      </div>
    </div>
  );
}

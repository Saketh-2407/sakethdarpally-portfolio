import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function CinematicVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentLoop, setCurrentLoop] = useState(1);
  const { theme } = useTheme();

  // Instant Autoplay on mount & scroll into view (0% stuck frames)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start playing video on load if under 3 plays limit
    const playVideo = () => {
      if (currentLoop <= 3) {
        video
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            video.muted = true;
            setIsMuted(true);
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          });
      }
    };

    playVideo();

    // Auto-unmute ONLY on actual user click/tap
    const handleUserClick = () => {
      if (video) {
        video.muted = false;
        setIsMuted(false);
        if (currentLoop <= 3 && video.paused) {
          video.play().catch(() => {});
        }
      }
      window.removeEventListener("pointerdown", handleUserClick);
    };

    window.addEventListener("pointerdown", handleUserClick, { once: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (currentLoop <= 3) {
              playVideo();
            }
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("pointerdown", handleUserClick);
    };
  }, []);

  // Play exactly 3 times then stop automatically
  const handleVideoEnded = () => {
    if (currentLoop < 3) {
      const nextLoop = currentLoop + 1;
      setCurrentLoop(nextLoop);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    } else {
      // Reached 3 plays: stop automatically & present manual replay option
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      // If user clicks play after 3 plays auto-stop, reset counter so they can play 3 loops again
      if (currentLoop >= 3) {
        setCurrentLoop(1);
        video.currentTime = 0;
      }
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100dvh] overflow-hidden bg-black group"
    >
      {/* Background Full-Bleed Optimized Video */}
      <video
        ref={videoRef}
        src="/portfolio-video.mp4"
        autoPlay
        muted={isMuted}
        playsInline
        preload="auto"
        onEnded={handleVideoEnded}
        className={`w-full h-full object-cover object-center sm:object-top transition-all duration-500 ${
          theme === "light" ? "contrast-[1.02] brightness-[1.15]" : "brightness-[1.12] contrast-[1.04]"
        }`}
      />

      {/* Top & Bottom Overlay Gradients for Navbar Legibility & Depth */}
      <div 
        onClick={togglePlay}
        className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/65 cursor-pointer" 
      />

      {/* Video Bottom Interactive Control Bar */}
      <div className="absolute bottom-4 sm:bottom-6 inset-x-0 px-4 sm:px-8 md:px-12 flex items-center justify-between z-20 pointer-events-auto">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={togglePlay}
            className="p-2.5 sm:p-3 rounded-full bg-black/60 backdrop-blur-md border border-cyan-500/30 text-white hover:bg-black/80 hover:scale-105 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            title={isPlaying ? "Pause" : "Play (Replay)"}
          >
            {isPlaying ? <Pause className="w-4 h-4 text-cyan-400" /> : <Play className="w-4 h-4 text-cyan-400" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-2.5 sm:p-3 rounded-full bg-black/60 backdrop-blur-md border border-cyan-500/30 text-white hover:bg-black/80 hover:scale-105 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-cyan-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>
        </div>

        {/* Status Badge */}
        <span className="text-[11px] sm:text-xs font-mono font-semibold text-cyan-400 bg-black/60 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-full border border-cyan-500/30 flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-cyan-400 animate-pulse" : "bg-slate-500"}`} />
          {isPlaying ? `PLAYING (${currentLoop}/3)` : currentLoop >= 3 ? "ENDED (REPLAY)" : "PAUSED"}
        </span>
      </div>
    </div>
  );
}

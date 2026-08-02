import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Cpu, Layers, BarChart3, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ProjectData {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  metrics?: string[];
  architecture?: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto">
        {/* Backdrop Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/80 backdrop-blur-xl"
        />

        {/* Glass Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-card bg-background/90 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.2)] z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-secondary/80 text-muted-foreground hover:text-foreground hover:scale-110 transition-all border border-border/80"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-3 pr-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold border border-cyan-500/20">
              <Cpu className="w-3.5 h-3.5" />
              INTERACTIVE PROJECT CASE STUDY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              {project.title}
            </h2>
          </div>

          {/* Description */}
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-6 space-y-2">
              <h4 className="text-xs uppercase font-mono tracking-wider text-muted-foreground flex items-center gap-1.5 font-semibold">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                Performance Metrics & Impact
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 rounded-xl bg-secondary/40 border border-border/50 text-xs font-medium text-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Stack */}
          <div className="mt-6 space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-muted-foreground flex items-center gap-1.5 font-semibold">
              <Layers className="w-4 h-4 text-primary" />
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap items-center justify-end gap-4">
            {project.githubUrl && (
              <Button variant="outline" size="lg" className="rounded-full gap-2" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="lg" className="rounded-full gap-2 shadow-lg shadow-cyan-500/20" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Live Application Demo
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

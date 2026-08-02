import { useState } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { projects } from "@/data/portfolio"
import { motion } from "framer-motion"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Cpu, Layers, Sparkles, Terminal, BarChart3, Maximize2 } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ProjectModal, type ProjectData } from "@/components/ui/project-modal"

const projectIcons = [Cpu, Sparkles, Terminal, Layers, BarChart3]
const gradientBanners = [
    "from-blue-500/20 via-indigo-500/10 to-transparent",
    "from-cyan-500/20 via-blue-500/10 to-transparent",
    "from-sky-500/20 via-indigo-500/10 to-transparent",
    "from-indigo-500/20 via-blue-500/10 to-transparent",
    "from-purple-500/20 via-blue-500/10 to-transparent",
]

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)

    return (
        <SectionWrapper id="projects" title="Featured Projects" subtitle="Scalable agentic AI platforms, LLM routing gateways, and distributed ML systems.">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
                {projects.map((project, index) => {
                    const IconComponent = projectIcons[index % projectIcons.length]
                    const bannerGradient = gradientBanners[index % gradientBanners.length]

                    const caseStudyProject: ProjectData = {
                        title: project.title,
                        description: project.description,
                        longDescription: `${project.description} Engineered with high availability, low latency throughput, and modern agentic AI design patterns.`,
                        tags: project.tech,
                        githubUrl: project.links.github,
                        liveUrl: project.links.demo !== "#" ? project.links.demo : undefined,
                        metrics: project.bullets || [],
                    }

                    return (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex cursor-pointer"
                            onClick={() => setSelectedProject(caseStudyProject)}
                        >
                            <SpotlightCard className="flex flex-col h-full border border-border/60 bg-card/40 backdrop-blur-xl hover:bg-card/75 hover:border-cyan-500/40 transition-all duration-500 group rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/15 hover:-translate-y-2 relative">
                                
                                {/* Top Banner with Icon & Links positioned at top right */}
                                <div className={`h-28 w-full bg-gradient-to-br ${bannerGradient} border-b border-border/40 relative flex items-center justify-between px-6 py-4 overflow-hidden`}>
                                    <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
                                    
                                    {/* Left Icon */}
                                    <div className="p-3 bg-background/80 backdrop-blur-md border border-white/10 rounded-xl shadow-lg group-hover:scale-110 group-hover:border-cyan-500/50 transition-all duration-300">
                                        <IconComponent className="h-6 w-6 text-primary group-hover:text-cyan-400 transition-colors" />
                                    </div>

                                    {/* Right Links */}
                                    <div className="flex items-center gap-2.5 z-10">
                                        <span className="p-2 rounded-xl bg-background/80 backdrop-blur-md border border-white/10 text-muted-foreground group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-all flex items-center gap-1 text-xs font-mono">
                                            <Maximize2 className="w-3.5 h-3.5" />
                                            <span className="hidden sm:inline">Inspect</span>
                                        </span>

                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                aria-label="GitHub Repository"
                                                className="p-2 rounded-xl bg-background/80 hover:bg-primary/20 backdrop-blur-md border border-white/10 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 shadow-md group/btn flex items-center justify-center"
                                                title="View GitHub Repository"
                                            >
                                                <Github className="h-5 w-5 group-hover/btn:scale-110 transition-transform" />
                                            </a>
                                        )}

                                        {project.links.demo && project.links.demo !== "#" && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                aria-label="Live Demo"
                                                className="p-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 backdrop-blur-md border border-primary/50 transition-all duration-300 shadow-md flex items-center gap-1.5 text-xs font-semibold px-3 group/demo"
                                                title="Open Live Demo"
                                            >
                                                <span>Live Demo</span>
                                                <ExternalLink className="h-4 w-4 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 transition-transform" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Card Header */}
                                <CardHeader className="pb-3 pt-5 px-6">
                                    <CardTitle className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-2 line-clamp-3">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                {/* Body Bullets & Tech Badges */}
                                <CardContent className="flex-grow px-6 pb-6 pt-0 flex flex-col justify-between space-y-6">
                                    {project.bullets && project.bullets.length > 0 && (
                                        <ul className="space-y-2 text-xs text-muted-foreground/90 leading-relaxed font-sans">
                                            {project.bullets.map((bullet, bIdx) => (
                                                <li key={bIdx} className="flex items-start gap-2">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-primary/80 mt-1.5 flex-shrink-0" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Technology Badges at Bottom */}
                                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                                        {project.tech.map((t) => (
                                            <Badge
                                                key={t}
                                                variant="secondary"
                                                className="bg-secondary/60 hover:bg-secondary text-[11px] font-medium py-0.5 px-2 rounded-md border border-border/40 group-hover:border-cyan-500/30 transition-colors"
                                            >
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </SpotlightCard>
                        </motion.div>
                    )
                })}
            </div>

            {/* Interactive Project Details Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </SectionWrapper>
    )
}


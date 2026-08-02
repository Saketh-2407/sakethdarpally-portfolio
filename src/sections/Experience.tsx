import { useRef } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { experience } from "@/data/portfolio"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { CardContent } from "@/components/ui/card"
import { Briefcase, MapPin, Calendar } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"

export function Experience() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })
    const scaleY = useSpring(scrollYProgress, { stiffness: 150, damping: 25 })

    return (
        <SectionWrapper id="experience" title="Experience" subtitle="My professional engineering journey & internships.">
            <div ref={containerRef} className="mx-auto max-w-5xl relative">
                
                {/* Vertical Growing Timeline Energy Line */}
                <div className="absolute left-[calc(12.5%+12px)] md:left-[calc(25%+20px)] top-4 bottom-4 w-1 bg-border/40 hidden md:block rounded-full">
                    <motion.div
                        className="w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-500 rounded-full origin-top shadow-[0_0_15px_#00f2fe]"
                        style={{ scaleY }}
                    />
                </div>

                <div className="space-y-12">
                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="flex flex-col md:flex-row gap-6 md:gap-10 relative"
                        >
                            {/* Left Column: Date Duration (25% on desktop) */}
                            <div className="md:w-[25%] flex-shrink-0 pt-1 flex items-center justify-between md:justify-start gap-3">
                                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 shadow-[0_0_12px_rgba(6,182,212,0.15)]">
                                    <Calendar className="h-3.5 w-3.5" />
                                    {job.duration}
                                </span>

                                {/* Timeline Glowing Node */}
                                <div className="hidden md:flex items-center justify-center w-7 h-7 rounded-full bg-background border-2 border-cyan-400 shadow-[0_0_15px_#00f2fe] z-10 shrink-0">
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                </div>
                            </div>

                            {/* Right Column: Role, Company, Location, Description & Tech wrapped in SpotlightCard */}
                            <SpotlightCard className="flex-grow bg-card/40 backdrop-blur-xl border border-border/60 hover:border-cyan-500/40 transition-all rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 group">
                                <CardContent className="p-6">
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:border-cyan-500/50 transition-colors">
                                            {job.logo ? (
                                                <img
                                                    src={job.logo}
                                                    alt={`${job.company} Logo`}
                                                    className="object-contain w-full h-full rounded"
                                                />
                                            ) : (
                                                <Briefcase className="h-5 w-5 text-primary group-hover:text-cyan-400 transition-colors" />
                                            )}
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <h3 className="text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">{job.role}</h3>
                                            <div className="text-sm font-medium text-muted-foreground flex flex-wrap items-center gap-2">
                                                <span className="text-foreground/90 font-semibold">{job.company}</span>
                                                {job.location && (
                                                    <span className="flex items-center gap-1 text-xs">
                                                        <span>·</span>
                                                        <MapPin className="h-3 w-3 inline text-cyan-400" />
                                                        <span>{job.location}</span>
                                                    </span>
                                                )}
                                                {job.department && (
                                                    <span className="text-xs bg-secondary/80 px-2 py-0.5 rounded text-secondary-foreground font-mono">
                                                        {job.department}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description Bullet List */}
                                    <ul className="space-y-3 text-sm text-muted-foreground/90 leading-relaxed mb-6 font-sans">
                                        {job.description.map((desc, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies Used */}
                                    {job.tech && job.tech.length > 0 && (
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                                            {job.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium bg-secondary/60 text-secondary-foreground px-2.5 py-1 rounded-md border border-border/40 group-hover:border-cyan-500/30 transition-colors"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </SpotlightCard>

                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}


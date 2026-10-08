import { ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"
import { personalDetails } from "@/data/portfolio"
import { Typewriter } from "@/components/ui/typewriter"
import { RobotBackground } from "@/components/ui/RobotBackground"
import { CinematicVideoPlayer } from "@/components/ui/cinematic-video"

export function Hero() {
    return (
        <>
            {/* 1. STARTING INTRO SHOWCASE: Full-Bleed Video Opening Banner */}
            <section id="intro-video" className="relative w-full overflow-hidden">
                <CinematicVideoPlayer />
            </section>

            {/* 2. MAIN HERO SECTION: Perfectly Aligned Bio & Floating AI Robot */}
            <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 md:py-20 overflow-hidden">
                {/* Ambient Background Glows */}
                <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/20 rounded-full blur-[140px] -z-10 pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[120px] -z-10 pointer-events-none" />

                <div className="container px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        {/* Left Column: Bio & Call to Action */}
                        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative flex items-center gap-2"
                            >
                                <span className="rounded-full bg-secondary/80 backdrop-blur-sm border border-border/80 px-4 py-1.5 text-sm font-medium text-secondary-foreground shadow-sm flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                    👋 Hello, I'm
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-foreground"
                            >
                                {personalDetails.name}
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="space-y-3 w-full"
                            >
                                <h2 className="text-2xl md:text-3xl font-semibold text-primary min-h-[44px] flex items-center justify-center lg:justify-start">
                                    <Typewriter words={personalDetails.titles} />
                                </h2>
                                <p className="max-w-[650px] text-base md:text-xl text-muted-foreground leading-relaxed">
                                    {personalDetails.tagline}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto"
                            >
                                <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
                                    <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base rounded-full group shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-300">
                                        View Projects
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </ScrollLink>

                                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base rounded-full hover:bg-secondary/80 backdrop-blur-sm transition-colors border-border/80" asChild>
                                    <a
                                        href={personalDetails.resumeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2"
                                    >
                                        Preview Resume
                                        <FileText className="h-4 w-4" />
                                    </a>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Right Column: AI Assistant Robot Floating at Top-Right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="lg:col-span-5 flex items-center justify-center pt-6 lg:pt-0"
                        >
                            <RobotBackground />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}



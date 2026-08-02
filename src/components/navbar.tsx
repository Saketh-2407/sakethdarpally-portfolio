import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, FileText } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { personalDetails } from "@/data/portfolio"

const navItems = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "AI Filmmaking", to: "ai-filmmaking" },
    { name: "Contact", to: "contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-background/90 backdrop-blur-md border-border/60 shadow-sm text-foreground"
                    : "bg-gradient-to-b from-black/80 via-black/40 to-transparent border-transparent text-white"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand Logo */}
                    <div className="flex-shrink-0 cursor-pointer flex items-center gap-2.5">
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500}
                            className="flex items-center gap-2 group"
                        >
                            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-background/20 backdrop-blur-sm border border-cyan-500/40 group-hover:border-cyan-400 transition-colors">
                                <img src="/s icon.png" alt="S Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className={cn(
                                "text-xl font-bold font-mono tracking-tight transition-colors group-hover:text-cyan-400",
                                scrolled ? "text-foreground" : "text-white drop-shadow-sm"
                            )}>
                                SAKETH
                            </span>
                        </ScrollLink>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-8 flex items-baseline space-x-5">
                            {navItems.map((item) => (
                                <ScrollLink
                                    key={item.name}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className={cn(
                                        "cursor-pointer px-2.5 py-1.5 rounded-md text-sm font-semibold transition-all duration-200",
                                        scrolled
                                            ? "text-muted-foreground hover:text-cyan-500 hover:bg-cyan-500/10"
                                            : "text-white/90 hover:text-cyan-400 hover:bg-white/10 drop-shadow-sm"
                                    )}
                                >
                                    {item.name}
                                </ScrollLink>
                            ))}
                        </div>
                    </div>

                    {/* Right Actions (Socials + Horizontal Resume Pill + Theme) */}
                    <div className="hidden md:flex items-center space-x-3">
                        <a
                            href={personalDetails.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "transition-colors p-2 rounded-full",
                                scrolled ? "text-muted-foreground hover:text-cyan-500" : "text-white/90 hover:text-cyan-400 hover:bg-white/10"
                            )}
                            aria-label="GitHub"
                        >
                            <Github size={19} />
                        </a>
                        <a
                            href={personalDetails.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "transition-colors p-2 rounded-full",
                                scrolled ? "text-muted-foreground hover:text-cyan-500" : "text-white/90 hover:text-cyan-400 hover:bg-white/10"
                            )}
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={19} />
                        </a>

                        {/* Resume CTA Button: Horizontal Inline Pill */}
                        <a
                            href={personalDetails.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/25"
                        >
                            <FileText className="h-4 w-4 flex-shrink-0" />
                            <span>Resume</span>
                        </a>

                        <ModeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden space-x-2 items-center">
                        <a
                            href={personalDetails.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-cyan-500 text-slate-950"
                        >
                            <FileText className="h-3.5 w-3.5" />
                            <span>Resume</span>
                        </a>
                        <ModeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                scrolled ? "text-foreground hover:text-cyan-500" : "text-white hover:text-cyan-400"
                            )}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
                    >
                        <div className="px-3 pt-2 pb-4 space-y-2">
                            {navItems.map((item) => (
                                <ScrollLink
                                    key={item.name}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={() => setIsOpen(false)}
                                    className="cursor-pointer text-muted-foreground hover:text-foreground hover:bg-accent block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {item.name}
                                </ScrollLink>
                            ))}
                            <div className="flex items-center justify-between px-3 py-2 mt-4 border-t border-border pt-4">
                                <div className="flex space-x-4">
                                    <a href={personalDetails.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                                        <Github size={20} />
                                    </a>
                                    <a href={personalDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                                <a
                                    href={personalDetails.resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-primary text-primary-foreground"
                                >
                                    <FileText className="h-3.5 w-3.5" />
                                    <span>Resume Drive</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

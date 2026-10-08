import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { personalDetails } from "@/data/portfolio"
import { Button } from "@/components/ui/button"

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <footer className="bg-background border-t border-border/60 py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <img src="/s icon.png" alt="Logo" className="w-5 h-5 object-contain" />
                    <span>© {new Date().getFullYear()} {personalDetails.name}. All rights reserved.</span>
                </div>

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={scrollToTop}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground rounded-full"
                >
                    Back to Top
                    <ArrowUp className="h-4 w-4" />
                </Button>

                <div className="flex space-x-5 pr-20 sm:pr-24">
                    <a
                        href={personalDetails.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-cyan-400 transition-colors p-1"
                        aria-label="GitHub"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href={personalDetails.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-cyan-400 transition-colors p-1"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a
                        href={`mailto:${personalDetails.socials.email}`}
                        className="text-muted-foreground hover:text-cyan-400 transition-colors p-1"
                        aria-label="Email"
                    >
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

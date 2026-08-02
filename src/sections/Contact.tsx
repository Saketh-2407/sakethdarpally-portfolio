import { SectionWrapper } from "@/components/section-wrapper"
import { personalDetails } from "@/data/portfolio"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, FileText, Send } from "lucide-react"

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)
        }, 1200)
    }

    return (
        <SectionWrapper id="contact" title="Get in Touch" subtitle="Let's connect for opportunities in AI Engineering & Machine Learning.">
            <div className="mx-auto max-w-4xl grid gap-10 md:grid-cols-2 items-start">
                
                {/* Contact Info Cards */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <div className="p-6 bg-card/40 backdrop-blur-md rounded-2xl border border-border/60 space-y-4 shadow-sm">
                        <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Feel free to reach out directly via email, phone, or connect with me on LinkedIn and GitHub.
                        </p>

                        <div className="space-y-3 pt-2">
                            <a
                                href={`mailto:${personalDetails.socials.email}`}
                                className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors text-sm text-foreground group"
                            >
                                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                    <Mail className="h-4 w-4 text-primary" />
                                </div>
                                <span className="font-medium truncate">{personalDetails.socials.email}</span>
                            </a>

                            <a
                                href={`tel:${personalDetails.socials.phone}`}
                                className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors text-sm text-foreground group"
                            >
                                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                    <Phone className="h-4 w-4 text-primary" />
                                </div>
                                <span className="font-medium">{personalDetails.socials.phone}</span>
                            </a>

                            <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 text-sm text-foreground">
                                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                                    <MapPin className="h-4 w-4 text-primary" />
                                </div>
                                <span className="font-medium">{personalDetails.socials.location}</span>
                            </div>
                        </div>

                        {/* Social Buttons - Horizontal Inline Layout */}
                        <div className="flex flex-row gap-3 pt-4 border-t border-border/40">
                            <a
                                href={personalDetails.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl border border-border/80 bg-background/80 hover:bg-secondary hover:text-foreground transition-all duration-200"
                            >
                                <Github className="h-4 w-4 flex-shrink-0" />
                                <span>GitHub</span>
                            </a>
                            <a
                                href={personalDetails.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl border border-border/80 bg-background/80 hover:bg-secondary hover:text-foreground transition-all duration-200"
                            >
                                <Linkedin className="h-4 w-4 flex-shrink-0" />
                                <span>LinkedIn</span>
                            </a>
                        </div>

                        {/* Resume Button - Horizontal Inline Layout */}
                        <a
                            href={personalDetails.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-md shadow-primary/20"
                        >
                            <FileText className="h-4 w-4 flex-shrink-0" />
                            <span>Preview Resume (Google Drive)</span>
                        </a>
                    </div>
                </motion.div>

                {/* Form Column */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {submitted ? (
                        <div className="text-center p-8 border border-border/60 rounded-2xl bg-card/50 backdrop-blur-md space-y-4">
                            <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                            <p className="text-muted-foreground text-sm">Thank you for reaching out. I'll get back to you shortly.</p>
                            <button
                                type="button"
                                className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border border-border bg-background hover:bg-secondary transition-colors"
                                onClick={() => setSubmitted(false)}
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 p-6 bg-card/40 backdrop-blur-md rounded-2xl border border-border/60 shadow-sm"
                        >
                            <h3 className="text-xl font-bold text-foreground mb-2">Send a Message</h3>
                            <div className="space-y-1.5">
                                <label htmlFor="name" className="text-xs font-semibold text-foreground/80">Name</label>
                                <Input id="name" required placeholder="Your name" className="bg-background/60 backdrop-blur-sm border-border/60 rounded-xl" />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-xs font-semibold text-foreground/80">Email</label>
                                <Input id="email" type="email" required placeholder="your.email@example.com" className="bg-background/60 backdrop-blur-sm border-border/60 rounded-xl" />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-xs font-semibold text-foreground/80">Message</label>
                                <Textarea id="message" required placeholder="How can I help you?" className="min-h-[120px] bg-background/60 backdrop-blur-sm border-border/60 rounded-xl" />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-md shadow-primary/20 disabled:opacity-50"
                            >
                                <Send className="h-4 w-4" />
                                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                            </button>
                        </form>
                    )}
                </motion.div>

            </div>
        </SectionWrapper>
    )
}

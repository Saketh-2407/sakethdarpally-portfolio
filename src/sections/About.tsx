import { SectionWrapper } from "@/components/section-wrapper"
import { personalDetails, education } from "@/data/portfolio"
import { motion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function About() {
    return (
        <SectionWrapper id="about" title="About Me" subtitle="AI Engineer & MEng AI Candidate at University of Cincinnati.">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 md:grid-cols-[2fr_3fr] items-start">
                    {/* Profile Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative max-w-[280px] mx-auto md:mx-0 w-full group/profile"
                    >
                        <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-950 relative border border-white/[0.1] shadow-2xl">
                            <img
                                src="/profile.png"
                                alt="Darpally Saketh Goud"
                                className="object-cover w-full h-full group-hover/profile:scale-105 transition-all duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-500" />
                            <div className="absolute bottom-3 left-3 right-3 text-center pointer-events-none">
                                <p className="text-sm font-semibold text-white tracking-wide">{personalDetails.name}</p>
                                <p className="text-xs text-white/75">{personalDetails.socials.location}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div className="prose prose-neutral dark:prose-invert text-lg text-foreground/90 leading-relaxed">
                            <p className="p-6 bg-card/40 backdrop-blur-md rounded-xl border border-border/50 text-foreground/90">
                                {personalDetails.bio}
                            </p>
                        </div>

                        {/* Education Cards */}
                        <div className="space-y-4 pt-2">
                            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                                <GraduationCap className="h-5 w-5 text-primary" />
                                Education
                            </h3>
                            {education.map((edu, index) => (
                                <SpotlightCard key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col sm:flex-row items-start gap-4">
                                            {edu.logo && (
                                                <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-xl p-1.5 flex items-center justify-center border border-white/10">
                                                    <img
                                                        src={edu.logo}
                                                        alt={`${edu.school} Logo`}
                                                        className="object-contain w-full h-full"
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-grow space-y-2 w-full">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-1">
                                                    <h4 className="font-bold text-lg text-foreground">{edu.school}</h4>
                                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary flex items-center gap-1.5 w-fit">
                                                        <Calendar className="h-3.5 w-3.5" />
                                                        {edu.duration}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                                                    <span>{edu.location}</span>
                                                </div>

                                                <p className="text-sm font-semibold text-foreground/90 pt-1">{edu.degree}</p>

                                                {edu.details && (
                                                    <p className="text-xs text-muted-foreground/90 bg-secondary/50 p-2.5 rounded-lg border border-border/40 mt-2 leading-relaxed">
                                                        {edu.details}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </SpotlightCard>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    )
}

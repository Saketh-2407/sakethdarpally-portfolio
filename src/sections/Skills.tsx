import { SectionWrapper } from "@/components/section-wrapper"
import { skills } from "@/data/portfolio"
import { motion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
    return (
        <SectionWrapper id="skills" title="Skills & Core Competencies" subtitle="Technologies, frameworks, and agentic AI tools I work with.">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <SpotlightCard className="border-border/60 bg-card/40 backdrop-blur-xl hover:bg-card/75 hover:border-cyan-500/40 transition-all duration-500 group hover:shadow-xl hover:shadow-cyan-500/10 rounded-2xl overflow-hidden">
                            <CardHeader className="flex flex-row items-center gap-3 pb-3">
                                <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-cyan-500/20 border border-primary/20 group-hover:border-cyan-500/40 transition-all duration-300 flex-shrink-0">
                                    <skill.icon className="h-5 w-5 text-primary group-hover:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <CardTitle className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{skill.category}</CardTitle>
                            </CardHeader>
                            <CardContent className="pb-5 pt-0">
                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item) => (
                                        <motion.span
                                            key={item}
                                            whileHover={{
                                                scale: 1.08,
                                                rotateZ: (Math.random() - 0.5) * 6,
                                                boxShadow: "0 0 16px rgba(56, 189, 248, 0.4)",
                                                borderColor: "rgba(56, 189, 248, 0.6)",
                                            }}
                                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                            className="magnetic-target cursor-pointer inline-flex items-center rounded-lg bg-secondary/80 px-3 py-1.5 text-xs font-mono font-semibold text-foreground border border-border/60 hover:bg-cyan-500/15 hover:text-cyan-400 transition-colors shadow-sm"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 hover:bg-cyan-400 mr-1.5 transition-colors" />
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>
                            </CardContent>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    )
}


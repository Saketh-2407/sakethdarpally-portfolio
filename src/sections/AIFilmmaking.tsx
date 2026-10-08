import { SectionWrapper } from "@/components/section-wrapper"
import { motion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Film, Sparkles, Megaphone, Video } from "lucide-react"

const aiCreativeWork = [
    {
        title: "AI Filmmaking",
        icon: Film,
        description: "Directing cinematic video sequences, AI video generation, dynamic camera movements, and generative scene synthesis using cutting-edge models like Seedance 2.0.",
        tags: ["Seedance 2.0", "Runway Gen-3", "Luma Dream Machine", "Midjourney V6", "Sora"],
    },
    {
        title: "Content Creation",
        icon: Video,
        description: "Crafting engaging digital content, multimodal storyboards, AI-assisted scripting, character voice generation, and automated post-production workflows.",
        tags: ["Seedance 2.0", "Multimodal Storyboarding", "AI Scripting", "ElevenLabs", "Visual Storytelling"],
    },
    {
        title: "UGC Ads & Visual Marketing",
        icon: Megaphone,
        description: "Creating high-converting AI-driven UGC advertisements, digital marketing hooks, synthetic avatar promotions, and dynamic product showcases for brands.",
        tags: ["Seedance 2.0", "UGC Video Ads", "Synthetic Avatars", "Brand Marketing", "Viral Hooks"],
    },
]

export function AIFilmmaking() {
    return (
        <SectionWrapper
            id="ai-filmmaking"
            title="AI Filmmaking & Creative Media"
            subtitle="Exploring generative video, digital content creation, and AI-powered UGC advertising."
        >
            <div className="mx-auto max-w-6xl space-y-8">
                
                {/* Intro Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-6 md:p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/60 relative overflow-hidden shadow-lg"
                >
                    <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                        <div className="space-y-2 max-w-3xl">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-semibold border border-blue-500/20">
                                <Sparkles className="h-3.5 w-3.5" />
                                Creative AI & Media Production
                            </span>
                            <h3 className="text-2xl font-bold text-foreground">
                                Merging AI Innovation with Visual Storytelling & Marketing
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Leveraging generative AI models such as Seedance 2.0 across AI filmmaking, digital content creation, and high-converting UGC video advertisements.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* 3 Focused Cards Grid */}
                <div className="grid gap-6 md:grid-cols-3 items-start">
                    {aiCreativeWork.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <SpotlightCard className="border border-border/60 bg-card/40 backdrop-blur-xl hover:bg-card/70 transition-all duration-300 rounded-2xl overflow-hidden group">
                                    <CardHeader className="flex flex-row items-center gap-3 pb-3">
                                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 border border-primary/20 transition-colors flex-shrink-0">
                                            <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                                        </div>
                                        <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                            {item.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                                            {item.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border border-border/40 ${
                                                        t === "Seedance 2.0"
                                                            ? "bg-blue-500/20 text-blue-400 border-blue-500/40 font-semibold"
                                                            : "bg-secondary/60 text-secondary-foreground"
                                                    }`}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </SpotlightCard>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </SectionWrapper>
    )
}

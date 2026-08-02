import { ThemeProvider } from "@/components/theme-provider"
import { Layout } from "@/components/layout"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Skills } from "@/sections/Skills"
import { Experience } from "@/sections/Experience"
import { Projects } from "@/sections/Projects"
import { AIFilmmaking } from "@/sections/AIFilmmaking"
import { Contact } from "@/sections/Contact"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { BackgroundSpotlight } from "@/components/ui/background-spotlight"
import { DynamicBackground } from "@/components/ui/dynamic-background"
import { ScrollProgressOrb } from "@/components/ui/scroll-progress-orb"
import { EasterEggs } from "@/components/ui/easter-eggs"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CustomCursor />
      <BackgroundSpotlight />
      <DynamicBackground />
      <ScrollProgressOrb />
      <EasterEggs />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AIFilmmaking />
        <Contact />
      </Layout>
    </ThemeProvider>
  )
}


export default App

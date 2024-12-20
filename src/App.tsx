import { Github, Twitter, Mail, Globe } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 p-8 md:p-16 lg:p-24 antialiased">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 md:p-12">
          <div className="space-y-2 mb-12">
            <div className="flex gap-4 text-zinc-400 mb-4">
              <a href="#" className="hover:text-zinc-100 transition-colors">in</a>
              <a href="#" className="hover:text-zinc-100 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-zinc-100 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-zinc-100 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <h1 className="text-4xl text-zinc-100 font-display font-semibold">This is Design-drift.</h1>
            <p className="text-zinc-400 font-body">an archive of Himanshoe's non-functional clone websites</p>
          </div>

          <div className="mb-12 max-w-2xl">
            <p className="text-zinc-300 font-body leading-relaxed">
              While building clone websites is a common way to practice development and design, 
              I wanted to take it a step further. This collection reimagines popular landing pages 
              through different design principles, turning the familiar into something unexpected.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-[1fr,400px] gap-12">
            {/* Design Principles Column */}
            <div>
              <h2 className="text-2xl font-display mb-8 text-zinc-100">// Design Principles i've been exploring</h2>
              <div className="space-y-6">
                <DesignPrinciple
                  icon="B"
                  principle="Brutalism"
                  description="Raw, honest, and functional design that celebrates structural elements and materials in their purest form. Characterized by bold typography, exposed elements, and unconventional layouts."
                  era="1950s-1970s"
                  bgColor="bg-orange-600"
                />
                <DesignPrinciple
                  icon="F"
                  principle="Neo-Futurism"
                  description="A forward-looking aesthetic that combines high-tech elements with sleek, dynamic forms. Features dark themes, glowing elements, and sci-fi inspired interfaces."
                  era="2020s"
                  bgColor="bg-zinc-700"
                />
                <DesignPrinciple
                  icon="M"
                  principle="Minimalism"
                  description="Less is more. Focus on essential elements, generous whitespace, and refined typography. Eliminating unnecessary elements to achieve clarity and impact."
                  era="1960s-Present"
                  bgColor="bg-blue-600"
                />
              </div>
            </div>

            {/* Projects Column */}
            <div>
              <h2 className="text-2xl font-display mb-8 text-zinc-100">// Projects</h2>
              <div className="space-y-4">
                <ProjectCard
                  title="Nike Brutalist"
                  description="A raw, bold, and unapologetically structural approach to showcase products."
                  demoUrl="https://nike-brutalist-clone.netlify.app/"
                  liveUrl="https://nike-brutalist-clone.netlify.app/"
                  githubUrl="https://nike-brutalist-clone.netlify.app/"
                />
                <ProjectCard
                  title="Apple Neo-Future"
                  description="Dark futuristic aesthetics pushing the boundaries of their design language."
                  demoUrl="https://ipad-dark-mode.netlify.app/"
                  liveUrl="https://ipad-dark-mode.netlify.app/"
                  githubUrl="https://ipad-dark-mode.netlify.app/"
                />
                <ProjectCard
                  title="Notion Minimal"
                  description="Extreme minimalist approach focusing on typography and whitespace."
                  demoUrl="https://notion-minimalist.netlify.app/"
                  liveUrl="https://notion-minimalist.netlify.app/"
                  githubUrl="https://notion-minimalist.netlify.app/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DesignPrinciple({ 
  icon, 
  principle, 
  description, 
  era, 
  bgColor 
}: { 
  icon: string
  principle: string
  description: string
  era: string
  bgColor: string
}) {
  return (
    <div className="group">
      <div className="flex items-start gap-3">
        <div className={`w-6 h-6 rounded flex items-center justify-center text-xs text-white ${bgColor}`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-display text-zinc-100">{principle}</h3>
            <span className="text-sm text-zinc-500 font-body">{era}</span>
          </div>
          <p className="text-zinc-400 font-body text-sm mt-2 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ 
  title, 
  description,
  demoUrl,
  liveUrl,
  githubUrl
}: { 
  title: string
  description: string
  demoUrl: string
  liveUrl: string
  githubUrl: string
}) {
  return (
    <div className="group">
      <div className="p-4 rounded-lg bg-zinc-900 hover:bg-zinc-800/80 transition-colors">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <a 
              href={demoUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group-hover:text-zinc-50 transition-colors"
            >
              <h3 className="font-display text-zinc-100">{title}</h3>
            </a>
            <p className="text-sm text-zinc-400 font-body">{description}</p>
          </div>
          <div className="flex gap-2">
            <a 
              href={liveUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a 
              href={githubUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
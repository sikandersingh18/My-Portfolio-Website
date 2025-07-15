/**
 * Projects section component - Showcase of portfolio projects based on resume
 * Displays project cards with links to GitHub repositories
 */
import React from 'react'
import { Github, ExternalLink, Award, Calendar } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string | null
  image: string
  duration: string
  achievements: string[]
}

const ProjectsSection: React.FC = () => {
  /**
   * Project data based on resume information
   */
  const projects: Project[] = [
    {
      title: "One District One Product",
      description: "Developed a blockchain-powered e-commerce platform prototype to empower local artisans. Created a secure, user-friendly platform to promote transparency and trust, enabling local artists to showcase and sell products directly.",
      technologies: ["HTML", "CSS", "JavaScript", "Figma", "UI/UX Design", "Blockchain"],
      githubUrl: "https://github.com/sikandersingh1823/one-district-one-product",
      liveUrl: "https://your-odop-demo.com",
      image: "https://pub-cdn.sider.ai/u/U0W8H7YOR46/web-coder/686e97dc4db2962c0bc5474f/resource/c5af49b6-9dc2-4aad-a033-297e1253c850.jpg",
      duration: "Oct 2023 - Dec 2023",
      achievements: [
        "🏆 1st place at TechKathon 2.0",
        "🏆 Winner at Ninjasprint Ideathon",
        "📊 Selected from 500+ teams"
      ]
    },
    {
      title: "Face Mask Detection System",
      description: "Built a COVID-19 Face Mask Detection system using Python and OpenCV to detect whether individuals are wearing masks, enhancing compliance with public health guidelines through real-time monitoring.",
      technologies: ["Python", "OpenCV", "NumPy", "Pandas", "Matplotlib", "Computer Vision"],
      githubUrl: "https://github.com/sikandersingh1823/face-mask-detection",
      liveUrl: "https://your-mask-detection-demo.com",
      image: "https://pub-cdn.sider.ai/u/U0W8H7YOR46/web-coder/686e97dc4db2962c0bc5474f/resource/f05bb4f9-b4e3-4474-87c3-10a2b593c863.jpg",
      duration: "Aug 2022 - Jan 2023",
      achievements: [
        "🔍 Real-time detection capability",
        "📱 Camera feed integration",
        "🎯 High accuracy detection"
      ]
    },
    {
      title: "Minesweeper Game",
      description: "Built a terminal-based Minesweeper game in C++ with mine placement algorithms and grid navigation. Features classic gameplay mechanics with optimized algorithms for mine generation and user interaction.",
      technologies: ["C++", "Algorithms", "Game Development", "Terminal UI"],
      githubUrl: "https://github.com/sikandersingh1823/minesweeper-cpp",
      liveUrl: null,
      image: "https://pub-cdn.sider.ai/u/U0W8H7YOR46/web-coder/686e97dc4db2962c0bc5474f/resource/66051a31-4270-4d6a-9901-e6640f745712.jpg",
      duration: "Aug 2024 - Nov 2024",
      achievements: [
        "🎮 Classic game mechanics",
        "⚡ Optimized algorithms",
        "🖥️ Terminal-based UI"
      ]
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies including React, TypeScript, and Tailwind CSS with responsive design and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      githubUrl: "https://github.com/sikandersingh1823/portfolio",
      liveUrl: "https://sikandersingh-portfolio.com",
      image: "https://pub-cdn.sider.ai/u/U0W8H7YOR46/web-coder/686e97dc4db2962c0bc5474f/resource/b79e8ab2-7c36-4ad8-aee0-df34df690cde.jpg",
      duration: "Current Project",
      achievements: [
        "📱 Fully responsive design",
        "⚡ Modern tech stack",
        "🎨 Smooth animations"
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50">
      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-orange-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-orange-400 text-slate-900 px-2 py-1 rounded text-sm font-medium">
                  {project.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-700 text-orange-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.achievements && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                    <div className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <p key={achIndex} className="text-gray-300 text-sm">{achievement}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/sikandersingh1823"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
            <Award className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

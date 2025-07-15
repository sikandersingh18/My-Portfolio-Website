/**
 * Skills section component - Display coding profiles and technical skills based on resume
 * Shows social media links and skill proficiency levels
 */
import React from 'react'
import { Github, Linkedin, Mail, Phone, Code, Database, Globe, Smartphone, Award, LucideIcon } from 'lucide-react'

interface Profile {
  name: string
  icon: LucideIcon
  url: string
  description: string
  color: string
}

interface Technology {
  name: string
  level: number
}

interface SkillCategory {
  category: string
  icon: LucideIcon
  technologies: Technology[]
}

const SkillsSection: React.FC = () => {
  /**
   * Social media and coding profile links
   */
  const profiles: Profile[] = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/sikandersingh18",
      description: "My code repositories and contributions",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/sikander-singh-labbu",
      description: "Professional network and experience",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:sikandersingh1823@gmail.com",
      description: "Get in touch directly",
      color: "hover:text-orange-400"
    },
    {
      name: "Phone",
      icon: Phone,
      url: "tel:+919596436403",
      description: "Call me directly",
      color: "hover:text-green-400"
    }
  ]

  /**
   * Technical skills with proficiency levels
   */
  const skills: SkillCategory[] = [
    {
      category: "Programming Languages",
      icon: Code,
      technologies: [
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 70 },
        // { name: "Python", level: 50 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: Globe,
      technologies: [
        { name: "React.js", level: 80 },
        { name: "OpenCV", level: 60 },
        { name: "Pandas", level: 70 }
      ]
    },
    {
      category: "Tools & Design",
      icon: Database,
      technologies: [
        { name: "Git & GitHub", level: 80 },
        { name: "Figma", level: 70 },
        { name: "UI/UX Design", level: 75 },
        { name: "Canva", level: 70 }
      ]
    },
    {
      category: "Core CS Concepts",
      icon: Smartphone,
      technologies: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 70 },
        { name: "OOP's", level: 85 },
        { name: "Problem Solving", level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/50">
      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-orange-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with me and explore my technical expertise and professional skills
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mt-4"></div>
        </div>

        {/* Social Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 text-center hover:border-orange-400 transition-all duration-300 group"
            >
              <profile.icon className={`w-12 h-12 mx-auto mb-4 text-gray-400 ${profile.color} transition-colors`} />
              <h3 className="text-lg font-semibold text-white mb-2">{profile.name}</h3>
              <p className="text-gray-400 text-sm">{profile.description}</p>
            </a>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-center mb-6">
                <skillCategory.icon className="w-6 h-6 text-orange-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">{skillCategory.category}</h3>
              </div>
              
              <div className="space-y-4">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <div key={techIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{tech.name}</span>
                      <span className="text-orange-400">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Advance Skills */}
        <div className="mt-8 bg-slate-900/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Advance Skills</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Teamwork', 'Problem Solving', 'Analytical Thinking', 'Curiosity to Learn',
              'Leadership', 'Communication', 'Time Management', 'Adaptability', 'Hackathons'
            ].map((skill, index) => (
              <span key={index} className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

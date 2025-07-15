/**
 * Home page component - Main portfolio landing page with navigation
 * Displays hero section, about, projects, skills, education, and contact sections
 */
import React from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import EducationSection from '../components/EducationSection'
import ContactSection from '../components/ContactSection'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </div>
  )
}

export default Home

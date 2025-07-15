/**
 * Hero section component - Main landing area with Jensen Omega inspired design
 * Features split layout with content on left and profile image on right
 */
import React, { useState, useEffect } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'

const HeroSection: React.FC = () => {
  const [displayRole, setDisplayRole] = useState('');
const [displaySubText, setDisplaySubText] = useState('');
const [isTyping, setIsTyping] = useState(true);

useEffect(() => {
  let roleIndex = 0;
  let subIndex = 0;

  const roleText = 'Software Developer';
  const subText = 'Software Developer studying at Chandigarh University';

  const typeRole = setInterval(() => {
    if (roleIndex < roleText.length) {
      setDisplayRole(roleText.slice(0, roleIndex + 1));
      roleIndex++;
    } else {
      clearInterval(typeRole);

      const delayBeforeSub = setTimeout(() => {
        const typeSub = setInterval(() => {
          if (subIndex < subText.length) {
            setDisplaySubText(subText.slice(0, subIndex + 1));
            subIndex++;
          } else {
            clearInterval(typeSub);
            setIsTyping(false);
          }
        }, 100);
      }, 700);

      return () => clearTimeout(delayBeforeSub);
    }
  }, 100);

  return () => clearInterval(typeRole);
}, []);



  /**
   * Smooth scroll to about section
   */
  const scrollToAbout = (): void => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  /**
   * Smooth scroll to contact section
   */
  const scrollToContact = (): void => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center px-4 relative overflow-hidden pt-16">

    {/* Background with geometric shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Geometric decorations */}
        <div className="absolute top-20 right-20 w-64 h-64 border-4 border-orange-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
      </div>

      <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 px-4 lg:px-8">

        {/* Left side - Content */}
        <div className="space-y-8 text-white text-left">

          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-6xl lg:text-7xl font-bold">
                Hello<span className="text-orange-400">.</span>
              </h1>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-0.5 bg-orange-400"></div>
                <p className="text-xl lg:text-2xl text-gray-300">
                  I'm <span className="text-white font-semibold">Sikander Singh</span>
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                {displayRole}
                {isTyping && displayRole.length === 'Software Developer'.length && (
                  <span className="animate-pulse text-orange-400">|</span>
                )}
              </h2>

              <div className="h-12 flex items-center">
                <p className="text-lg lg:text-xl text-gray-300">
                  {displaySubText}
                  {isTyping &&
                    displayRole.length === 'Software Developer'.length &&
                    displaySubText.length < 'Software Developer studying at Chandigarh University'.length && (
                      <span className="animate-pulse text-orange-400">|</span>
                    )}
                </p>
              </div>

              <blockquote className="text-base lg:text-lg text-gray-400 italic border-l-4 border-orange-400 pl-4 max-w-md">
                "A curious builder and problem-solver, passionate about crafting seamless, responsive user experiences through clean and scalable code."
              </blockquote>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="group px-8 py-4 bg-orange-400 hover:bg-orange-500 text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Got a project?</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="https://drive.google.com/file/d/1gfZeocZjn2IW1AmMshKFxrLy1eF0VNj2/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
            >
              My Resume
            </a>

          </div>
        </div>

        {/* Right side - Profile Image */}
        <div className="flex justify-end items-center pr-4 lg:pr-8">


          <div className="relative">
            {/* Main circular background */}
            <div className="absolute inset-0 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-xl"></div>
            
            {/* Orange circle decoration */}
            <div className="absolute top-8 right-8 w-80 h-80 border-4 border-orange-400/40 rounded-full"></div>
            
            {/* Profile image container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-orange-400 shadow-2xl">
              <img 
                src="https://pub-cdn.sider.ai/u/U0W8H7YOR46/web-coder/686e97dc4db2962c0bc5474f/resource/16d14ae8-5a60-409b-b070-4c645e0efdc1.jpg"
                alt="Sikander Singh - Software Developer"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-red-400 to-orange-400 rounded-full opacity-60 animate-bounce delay-1000"></div>
            
            {/* Floating code elements */}
            <div className="absolute top-10 -left-8 text-orange-400 text-2xl font-mono animate-pulse">&lt;/&gt;</div>
            <div className="absolute bottom-10 -right-8 text-red-400 text-xl font-mono animate-pulse">{`{}`}</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  )
}

export default HeroSection
function setDisplayRole(arg0: string) {
  throw new Error('Function not implemented.')
}


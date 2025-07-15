/**
 * Navigation component - Fixed header with smooth scrolling navigation
 * Features logo, navigation links, and responsive design
 */
import React, { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react'

interface NavigationItem {
  name: string
  href: string
}

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  /**
   * Navigation items with smooth scroll functionality
   */
  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]

  /**
   * Smooth scroll to section
   */
  const scrollToSection = (href: string): void => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">
              SIKANDER<span className="text-orange-400">.</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/sikandersingh18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sikander-singh-labbu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sikandersingh1823@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+919596436403"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="px-2 py-3 border-t border-slate-800">
            <div className="flex space-x-4">
              <a
                href="https://github.com/sikandersingh18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sikander-singh-labbu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sikandersingh1823@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+919596436403"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation

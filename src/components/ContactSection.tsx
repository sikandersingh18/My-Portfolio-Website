/**
 * Contact section component - Contact information based on resume
 * Provides ways to get in touch and connect
 */
import React from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, MessageSquare, LucideIcon } from 'lucide-react'

interface ContactInfo {
  icon: LucideIcon
  label: string
  value: string
  href: string
}

interface SocialLink {
  icon: LucideIcon
  name: string
  url: string
  color: string
}

const ContactSection: React.FC = () => {
  /**
   * Contact information from resume
   */
  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      label: "Email",
      value: "sikandersingh1823@gmail.com",
      href: "mailto:sikandersingh1823@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9596436403",
      href: "tel:+919596436403"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chandigarh, India",
      href: "https://maps.google.com/?q=Chandigarh,India"
    }
  ]

  /**
   * Social media links
   */
  const socialLinks: SocialLink[] = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/sikandersingh1823",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/sikandersingh1823",
      color: "hover:text-blue-400"
    },
    {
      icon: MessageSquare,
      name: "Portfolio",
      url: "https://sikandersingh-portfolio.com",
      color: "hover:text-orange-400"
    },
    // {
    //   icon: ExternalLink,
    //   name: "Resume",
    //   url: "#",
    //   color: "hover:text-green-400"
    // }
  ]

  /**
   * Handle form submission
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.')
  }

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/50">
      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-orange-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect and discuss opportunities, projects, or just have a friendly chat about technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-slate-900/50 border border-slate-700 rounded-lg hover:border-orange-400 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium group-hover:text-orange-400 transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key= {index}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-900/50 border border-slate-700 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:border-orange-400`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>

                  
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Current Status</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Available for opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">Open to freelance projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Looking for internships</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors"
                  placeholder="Project Discussion / Opportunity / Collaboration"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-400">
            Made with ❤️ by <span className="text-orange-400">Sikander Singh</span> • © 2024 All rights reserved
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React, TypeScript, and Tailwind CSS • Computer Science Student at Chandigarh University
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

/**
 * About section component - Detailed bio based on resume information
 * Displays personal information and background with smooth animations
 */
import React from 'react'
import { Code, Zap, Heart, Award, MapPin, Phone, Mail, Calendar } from 'lucide-react'

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800/50">
      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-orange-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives me as a developer
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <div className="space-y-6 text-gray-300">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Hi, I'm Sikander Singh</h3>
              <p className="text-lg leading-relaxed">
                A curious builder and problem-solver, I am a B.Tech Computer Science student passionate about crafting 
                seamless, responsive user experiences through clean and scalable code. With a strong foundation in C++, 
                JavaScript, React, and DSA, I have led impactful projects and earned hackathon wins.
              </p>
              
              <p className="text-lg leading-relaxed">
                I am deeply interested in the latest technologies and am currently exploring Data Structures and modern 
                design systems. I am driven to build fast, reliable, and user-focused web applications that solve 
                real-world problems with elegance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center space-x-2 bg-slate-700 px-4 py-2 rounded-lg">
                <Code className="w-5 h-5 text-orange-400" />
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-700 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>Quick Learner</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-700 px-4 py-2 rounded-lg">
                <Heart className="w-5 h-5 text-red-400" />
                <span>Team Player</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-700 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-blue-400" />
                <span>Hackathon Winner</span>
              </div>
            </div>
          </div>

          {/* Right side - Personal Info */}
          <div className="space-y-6">
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-semibold text-white mb-6">Personal Information</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <div>
                    <span className="text-sm text-gray-400">Location:</span>
                    <p className="text-white">Chandigarh, India</p>
                  </div>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <div>
                    <span className="text-sm text-gray-400">Phone:</span>
                    <p className="text-white">+91 9596436403</p>
                  </div>
                </div> */}
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <div>
                    <span className="text-sm text-gray-400">Email:</span>
                    <p className="text-white">sikandersingh1823@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-orange-400" />
                  <div>
                    <span className="text-sm text-gray-400">Study Period:</span>
                    <p className="text-white">Aug 2022 - July 2026</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Winner of TechKathon 2.0 and Ninjasprint Ideathon</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">2nd position at PandoraX Ideathon</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Swayam Top 1 Percent achiever</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">DLL-MOOCs Achievement Award 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-semibold text-white mb-4">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Web Development', 'Data Structures', 'Hackathons', 'Basketball'
                  , 'Problem Solving', 'UI/UX Design', 'Algorithms'
                ].map((interest, index) => (
                  <span key={index} className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-3 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

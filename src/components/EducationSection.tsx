/**
 * Education section component - Academic background based on resume
 * Displays educational qualifications and relevant achievements
 */
import React from 'react'
import { GraduationCap, Award, BookOpen, Calendar, Trophy, Star, LucideIcon } from 'lucide-react'

interface Education {
  degree: string
  field: string
  institution: string
  location: string
  duration: string
  status: string
  highlights: string[]
}

interface Achievement {
  title: string
  organization: string
  date: string
  description: string
  icon: LucideIcon
}

interface Activity {
  activity: string
  achievement: string
  description: string
}

interface Certification {
  title: string
  organization: string
  year: string
}

const EducationSection: React.FC = () => {
  /**
   * Education timeline data from resume
   */
  const education: Education[] = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Chandigarh University",
      location: "Chandigarh, India",
      duration: "Aug 2022 - July 2026",
      status: "Currently Pursuing",
      highlights: [
        "Specialized in Software Engineering and Web Development",
        "Active participant in hackathons and coding competitions",
        "Excellent academic performance with strong CS fundamentals",
        "Active member of programming communities"
      ]
    },
    {
      degree: "Senior Secondary (PCM)",
      field: "Physics, Chemistry, Mathematics",
      institution: "Govt. Boys High Secondary School",
      location: "India",
      duration: "March 2020 - June 2022",
      status: "Completed",
      highlights: [
        "Strong foundation in Mathematics and Physics",
        "Excellent performance in Science subjects",
        "Active participation in academic activities"
      ]
    },
    {
      degree: "Junior Secondary",
      field: "General Education",
      institution: "Army Public School, Akhnoor",
      location: "India",
      duration: "Till 2020",
      status: "Completed",
      highlights: [
        "Strong academic foundation",
        "Developed discipline and time management skills",
        "Participated in various school activities",
        "Built teamwork and leadership qualities"
      ]
    }
  ]
  
  const certifications: Certification[] = [
    {
      title: "Internet of Things: Design Concepts",
      organization: "NITTTR",
      year: "2024"
    },
    {
      title: "Computer Organization and Architecture",
      organization: "IIT Madras",
      year: "2024"
    },
    {
      title: "Cloud Computing",
      organization: "IIT Kharagpur",
      year: "2024"
    },
    {
      title: "Swayam Top 1 Percent",
      organization: "Achievement Award",
      year: "2024"
    }
  ]
  /**
   * Achievements and awards from resume
  */
  const achievements: Achievement[] = [
    {
      title: "Winner - TechKathon 2.0",
      organization: "Major Hackathon",
      date: "2023",
      description: "1st place in SIH-Module - TechKThon 2.0",
      icon: Trophy
    },
    {
      title: "Winner - Coding Ninja Ninjasprint",
      organization: "Coding Ninja",
      date: "2024",
      description: "Top performer in national coding competition",
      icon: Award
    },
    {
      title: "2nd Position - PandoraX Ideathon",
      organization: "PandoraX",
      date: "2024",
      description: "Second place in innovation and ideation competition",
      icon: Star
    },
    {
      title: "Swayam Top 1 Percent",
      organization: "Government of India",
      date: "2024",
      description: "Top 1% performer in online learning platform",
      icon: Award
    },
    {
      title: "DLL-MOOCs Achievement Award",
      organization: "MOOCs Platform",
      date: "2024",
      description: "Excellence in online learning and skill development",
      icon: BookOpen
    }
  ]

  /**
   * Extra-curricular activities from resume
  */
 const activities: Activity[] = [
   {
      activity: "Basketball",
      achievement: "Semi-finalist at inter-department level",
      description: "Showcased strong teamwork and athletic skills"
    },
    {
      activity: "Event Volunteering",
      achievement: "Active volunteer in multiple events",
      description: "Demonstrated leadership and coordination skills"
    },
    {
      activity: "Hackathon Participation",
      achievement: "Multiple hackathon wins and participations",
      description: "Consistent performer in competitive programming"
    }
  ]


  return (
    <section id="education" className="py-20 px-4 bg-slate-900/50">
      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Education & <span className="text-orange-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My academic journey and accomplishments in the field of technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-orange-400" />
              Education Timeline
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 ml-8">
                    <div className="absolute -left-4 top-6 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                      <p className="text-orange-400 font-medium">{edu.field}</p>
                      <p className="text-gray-300">{edu.institution}, {edu.location}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.duration} • {edu.status}
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div>
            {/* Certifications */}
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                      <div className="flex items-center mb-6">
                        <Award className="w-6 h-6 text-orange-400 mr-3" />
                        <h3 className="text-xl font-semibold text-white">Certifications & Courses</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="text-gray-300 font-medium">{cert.title}</h4>
                              <p className="text-gray-400 text-sm">{cert.organization} • {cert.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
              </div>
            </div>
          </div>

          {/* Achievements & Activities */}
          <div className="space-y-8">
            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-orange-400" />
                Achievements
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-orange-400 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <achievement.icon className="w-5 h-5 text-orange-400 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold text-sm">{achievement.title}</h4>
                        <p className="text-gray-400 text-xs">{achievement.organization} • {achievement.date}</p>
                        <p className="text-gray-300 text-xs mt-1">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra-curricular Activities */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Star className="w-6 h-6 mr-3 text-orange-400" />
                Activities
              </h3>
              
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold text-sm">{activity.activity}</h4>
                    <p className="text-orange-400 text-xs">{activity.achievement}</p>
                    <p className="text-gray-300 text-xs mt-1">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>



            {/* Current Focus */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Current Focus</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>• Exploring advanced Data Structures and Algorithms</p>
                <p>• Building full-stack web applications</p>
                {/* <p>• Contributing to open-source projects</p> */}
                <p>• Preparing for software engineering internships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection

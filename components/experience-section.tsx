"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    company: "Deecogs Technologies",
    role: "Software Engineer Intern",
    period: "Sept 2025 - Nov 2025",
    description: "Developed production-ready AI systems in Computer Vision, Medical AI, and Real-time Surveillance. Built end-to-end pipelines achieving 94.2% accuracy in real-world deployments, with expertise in model optimization and quantization for 35-45% faster inference.",
    projects: [
      {
        title: "Sign Language Recognition",
        description: "Created real-time system using MediaPipe keypoint extraction + Random Forest. Trained on custom gesture dataset for accurate sign prediction."
      },
      {
        title: "Medical AI with MONAI",
        description: "Built colonoscopy segmentation pipeline on Kvasir-SEG dataset (86.6% mAP@0.5). Worked with pathology models (EXAONE-Path-2.0) for tumor detection."
      },
      {
        title: "ATM Theft Detection System",
        description: "Built end-to-end surveillance pipeline: dataset collection, annotation, training, and deployment. Achieved 94.2% accuracy on real CCTV footage. Optimized with INT8 quantization for 35-45% faster inference."
      }
    ],
    technologies: ["PyTorch", "TensorFlow", "YOLOv8", "MONAI", "Computer Vision", "Medical AI", "Quantization"]
  },
  {
    company: "CISCO AICTE Virtual Internship Program",
    role: "Cybersecurity Intern",
    period: "May 2024 - Jul 2024",
    description: "Completed a comprehensive 3-month virtual internship program in Cybersecurity, gaining deep insights into network security, cyber laws, and threat modeling. Strengthened technical and problem-solving skills through hands-on experience with industry-standard tools.",
    projects: [
      {
        title: "Network Security & Threat Modeling",
        description: "Hands-on experience in network security, cyber laws, and threat modeling. Analyzed vulnerabilities and applied cyberattack mitigations to protect network infrastructure."
      },
      {
        title: "Secure Network Simulation",
        description: "Simulated secure network setup with Cisco Packet Tracer, implementing routing, switching, and network security protocols in real-world scenarios."
      }
    ],
    technologies: ["Cybersecurity", "Network Security", "Threat Modeling", "Cisco Packet Tracer", "Cyber Laws", "Vulnerability Analysis"]
  }
]

export default function ExperienceSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-20"
    >
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block mb-4"
        >
          <span className="px-4 py-2 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 
                         text-neutral-600 dark:text-neutral-400 text-sm font-medium backdrop-blur-sm
                         border border-neutral-300/20 dark:border-neutral-700/20">
            Professional journey
          </span>
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text 
                     bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 
                     dark:from-white dark:via-neutral-200 dark:to-white">
          Experience
        </h3>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6 md:space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-neutral-200/40 via-neutral-300/40 to-neutral-200/40 
                          dark:from-neutral-700/40 dark:via-neutral-600/40 dark:to-neutral-700/40 
                          rounded-2xl blur-xl opacity-50" />
            
            <div className="relative bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm
                           rounded-2xl p-6 md:p-8 border border-neutral-200/50 dark:border-neutral-700/50
                           hover:bg-white/80 dark:hover:bg-neutral-800/80 transition-all duration-300">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 
                                dark:from-neutral-700 dark:to-neutral-600 flex items-center justify-center shadow-lg">
                    <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-neutral-600 dark:text-neutral-300" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white">
                      {experience.company}
                    </h4>
                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-medium">
                      {experience.role}
                    </p>
                  </div>
                </div>
                
                <div className="md:ml-auto flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                  <span className="inline-block px-3 py-1.5 text-xs md:text-sm font-semibold 
                                 bg-neutral-700 dark:bg-neutral-600 text-white rounded-full shadow-sm">
                    {experience.period}
                  </span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                {experience.description}
              </p>
              
              {/* Projects */}
              <div className="space-y-4 mb-6">
                {experience.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-neutral-500 dark:bg-neutral-400 mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <h5 className="font-semibold text-neutral-900 dark:text-white text-sm md:text-base mb-1">
                        {project.title}
                      </h5>
                      <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200/50 dark:border-neutral-700/30">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs md:text-sm rounded-full 
                             bg-gradient-to-r from-neutral-100 to-neutral-200 
                             dark:from-neutral-700 dark:to-neutral-600
                             text-neutral-700 dark:text-neutral-300 font-medium
                             border border-neutral-300/20 dark:border-neutral-600/20
                             hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

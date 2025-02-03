"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    name: "Game Development",
    skills: ["Unity", "Unreal Engine", "Game Maker Studio", "C#", "Lua"],
  },
  {
    name: "UI/UX Design",
    skills: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"],
  },
  {
    name: "3D Modeling & Animation",
    skills: ["Blender", "Maya", "ZBrush", "3ds Max", "Cinema 4D"],
  },
  {
    name: "Web Development",
    skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    name: "Backend Development",
    skills: ["Spring Boot", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
  },
  {
    name: "Version Control & Collaboration",
    skills: ["Git", "GitHub", "GitLab", "Jira", "Trello"],
  },
]

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold mb-8 text-center">Skills & Tools</h1>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
          My diverse skill set spans game development, UI/UX design, web development, and more. Here's an overview of
          the technologies and tools I work with:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">{category.name}</h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-secondary text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}


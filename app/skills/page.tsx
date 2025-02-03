"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

const skillCategories = [
  {
    name: "Game Development",
    skills: [
      { name: "Unity", image: "/unity.jpg" },
      { name: "Core Engine", image: "/core-engine.jpeg" },
      { name: "Game Maker", image: "/gamemaker.svg" },
    ],
  },
  {
    name: "UI/UX Design",
    skills: [
      { name: "Figma", image: "/figma.png" },
    ],
  },
]

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  // To avoid hydration issues, make sure this component only renders on the client side
  useEffect(() => {
    setMounted(true)
  }, [])

  // Only render the skills component after the client has mounted
  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold mb-8 text-center">Skills & Tools</h1>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
          My diverse skill set spans game development and UI/UX design. Here's an overview of the technologies and tools I work with:
        </p>
        <div className="flex flex-col gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-center text-primary">{category.name}</h2>
              <div className="flex flex-wrap gap-6 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-center">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={80}
                      height={80}
                      className="rounded-full shadow-lg"
                    />
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{skill.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

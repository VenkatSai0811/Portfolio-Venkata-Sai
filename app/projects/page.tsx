"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Echoes of the Past",
    description:
      "A mystery 3D escape room game developed in Unity 3D. Players are transported to a haunted mansion where they must solve puzzles and uncover the secrets of the past to escape. The game features realistic 3D environments, immersive sound design, and challenging puzzles that test players' problem-solving skills.",
    image: "/eop.jpg?height=200&width=300",
    tags: ["Unity 3D", "C#", "3D Modeling", "Game Design"],
    link: "https://github.com/yourusername/echoes-of-past",
  },
  {
    title: "UI Web Design with Figma",
    description:
      "A comprehensive web design project created using Figma. This project showcases a modern, responsive website design for a fictional tech startup. It includes a complete set of UI components, responsive layouts for desktop and mobile, and interactive prototypes demonstrating user flows and animations.",
    image: "/NFTs.jpg?height=200&width=300",
    tags: ["Figma", "UI/UX", "Web Design", "Prototyping"],
    link: "https://www.figma.com/proto/SEjTpE03Ye0ylrciVNBLoI/Nft--website?node-id=1-2&t=AF8JaGMXG3eZuwtb-1",
  },
  {
    title: "Make My Trip Mobile App Clone",
    description:
      "A Figma-based clone of the popular Make My Trip mobile application. This project demonstrates the ability to reverse-engineer and recreate complex mobile interfaces. It includes a full set of screens for flight, hotel, and holiday package bookings, along with user profiles and booking management interfaces.",
    image: "/mmt.jpg?height=200&width=300",
    tags: ["Figma", "Mobile Design", "UI/UX", "App Design"],
    link: "https://www.figma.com/proto/su7gHDxPQ1tVLS22e8Ebsy/MakeMyTrip?node-id=0-1&t=cvmp2U4ZCuePQLmG-1",
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="h-48 w-full object-cover md:w-48"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-primary font-semibold">{project.title}</div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-foreground text-sm px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-full text-white font-semibold rgb-gradient hover:shadow-lg transition-all duration-300"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}


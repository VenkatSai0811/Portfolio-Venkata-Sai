"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Venkatasai"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-xl mb-6">
              Hi, I'm Venkatasai, a passionate UI/UX designer and game developer with a strong background in full-stack
              development. I love creating immersive digital experiences that blend creativity with functionality.
            </p>
            <p className="text-xl mb-6">
              My expertise spans across various technologies, including React.js for frontend development, Spring Boot
              and Hibernate for robust backend solutions, and Unity 3D for game development. I'm also proficient in
              using design tools like Figma to create intuitive and visually appealing user interfaces.
            </p>
            <p className="text-xl mb-6">
              Whether it's crafting a seamless user experience, developing a complex web application, or bringing a game
              concept to life, I'm always excited to take on new challenges and push the boundaries of what's possible
              in the digital realm.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">My Journey</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p>Bachelor of Technology in Computer Science and Engineering</p>
              <p>K L University, 2019 - 2023</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
              <p>UI/UX Designer & Full-stack Developer</p>
              <p>XYZ Tech Solutions, 2023 - Present</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Achievements</h3>
              <ul className="list-disc list-inside">
                <li>Winner of National Level Hackathon, 2022</li>
                <li>Published a research paper on "AI in Game Development", 2023</li>
                <li>Developed 3 successful indie games with over 100k downloads</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}


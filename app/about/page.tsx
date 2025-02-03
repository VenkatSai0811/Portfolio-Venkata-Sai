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
        <h1 className="text-4xl font-bold mb-8 text-center text-gradient-to-r from-green-400 to-blue-500">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/3"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/me.jpg?height=400&width=400"
              alt="Venkatasai"
              width={400}
              height={400}
              className="rounded-full shadow-lg transform hover:scale-105 transition-all"
            />
          </motion.div>
          <div className="md:w-2/3">
            <p className="text-xl mb-4">
              Hello! I'm Venkatasai, a UI/UX Designer and Game Developer with a strong passion for creating digital experiences that blend creativity with functionality. I focus on designing seamless, user-friendly interfaces and building engaging, interactive worlds in games.
            </p>
            <p className="text-xl mb-4">
              In UI/UX design, I prioritize the user experience by crafting interfaces that are both intuitive and visually appealing. I believe in the power of design to simplify complex interactions and deliver clear, efficient user journeys.
            </p>
            <p className="text-xl mb-4">
              As a game developer, I create immersive experiences that captivate players through compelling mechanics, character design, and storytelling. I take pride in bringing ideas to life, ensuring each project offers a memorable experience.
            </p>
            <p className="text-xl mb-4">
              My approach is simple: combine creativity with purpose. Every project is an opportunity to innovate, solve problems, and deliver designs and games that leave a lasting impact.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center text-gradient-to-r from-yellow-400 to-pink-500">
            My Expertise
          </h2>
          <div className="space-y-6">
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p>
                Designing user-centered interfaces that are intuitive and enhance the user experience. Focusing on seamless interactions and clear visual hierarchy.
              </p>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">Game Development</h3>
              <p>
                Crafting immersive gaming experiences with a focus on engaging mechanics, interactive storytelling, and captivating environments.
              </p>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-2">Creative Process</h3>
              <p>
                An iterative approach to design and development—constantly refining concepts, collaborating with others, and solving complex problems.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

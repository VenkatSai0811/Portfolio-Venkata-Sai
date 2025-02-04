"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Send } from "lucide-react"
import { useState } from "react"
import { sendEmail } from "./actions/send-email"
import Typewriter from "typewriter-effect"

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string }>({})
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  // Reordered: NFT project is first
  const projects = [
    {
      title: "UI Web Design with Figma",
      description: "A comprehensive web design project created using Figma.",
      mediaType: "image",
      media: "/NFTs.jpg",
      tags: ["Figma", "UI/UX", "Web Design"],
      link: "https://www.figma.com/proto/SEjTpE03Ye0ylrciVNBLoI/Nft--website?node-id=1-2&t=AF8JaGMXG3eZuwtb-1",
    },
    {
      title: "Echoes of the Past",
      description: "A mystery 3D escape room game developed in Unity 3D.",
      mediaType: "video",
      media: "/echoes.mp4",
      tags: ["Unity 3D", "C#", "3D Modeling"],
      link: "https://github.com/yourgithubusername/echoes-of-the-past",
    },
    {
      title: "Make My Trip Mobile App Clone",
      description: "A Figma-based clone of the popular Make My Trip mobile application.",
      mediaType: "image",
      media: "/mmt.jpg",
      tags: ["Figma", "Mobile Design", "UI/UX"],
      link: "https://www.figma.com/proto/su7gHDxPQ1tVLS22e8Ebsy/MakeMyTrip?node-id=0-1&t=cvmp2U4ZCuePQLmG-1",
    },
  ]

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const handlePreviousProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center w-full bg-gradient-to-b from-blue-400 to-blue-600 dark:from-gray-900 dark:to-gray-800">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center space-y-8 px-4">
          <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
              <Typewriter options={{ strings: ["I'm Venkata Sai"], autoStart: true, loop: true, delay: 75 }} />
            </h1>
          </motion.div>
          <p className="text-2xl sm:text-3xl mb-8 text-gray-100 dark:text-gray-300">UI/UX Designer & Game Developer</p>
          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Link href="#projects" className="group bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg flex items-center gap-2">
              View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#contact" className="group bg-white dark:bg-gray-800 text-blue-600 dark:text-yellow-400 font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg flex items-center gap-2">
              Contact Me <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 w-full  bg-gradient-bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 flex justify-center">
            <Image 
  src="/me.jpg" 
  alt="Venkatasai" 
  width={300} 
  height={300} 
  className="rounded-full object-cover shadow-lg border-4 border-gray-300 dark:border-gray-700" 
/>

            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">I'm Venkatasai, a UI/UX Designer and Game Developer with a strong passion for creating digital experiences that blend creativity with functionality. I focus on designing seamless, user-friendly interfaces and building engaging, interactive worlds in games.

In UI/UX design, I prioritize the user experience by crafting interfaces that are both intuitive and visually appealing. I believe in the power of design to simplify complex interactions and deliver clear, efficient user journeys.</p>
              <Link href="/about" className="inline-block bg-gradient-to-r from-green-400 to-purple-500 text-white font-bold py-2 px-4 rounded-full">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      
    
{/* Skills & Tools Section */}
<section id="skills" className="py-20 w-full bg-gradient-bg-gray-50 dark:bg-gray-900">
  <div className="container mx-auto px-4">
    <motion.h2 
      className="text-4xl font-bold mb-8 text-center text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      Skills & Tools
    </motion.h2>
    
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
      }}
    >
      {[
        { name: "Unity", src: "/unity.jpg" },
        { name: "Figma", src: "/figma.png" },
        { name: "Core Engine", src: "/core-engine.jpeg" },
        { name: "GameMaker", src: "/gamemaker.svg" }
      ].map((skill, index) => (
        <motion.div 
          key={index} 
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <Image src={skill.src} alt={skill.name} width={80} height={80} className="rounded-full shadow-lg" />
          <p className="text-xl mt-4 text-center text-white">{skill.name}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-20 w-full bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
          <div className="relative flex flex-col items-center">
            {projects[currentProjectIndex].mediaType === "video" ? (
              <motion.video key={projects[currentProjectIndex].media} src={projects[currentProjectIndex].media} className="w-2/3 h-auto" controls />
            ) : (
              <motion.img key={projects[currentProjectIndex].media} src={projects[currentProjectIndex].media} className="w-2/3 h-auto" alt={projects[currentProjectIndex].title} />
            )}
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">{projects[currentProjectIndex].description}</p>
            <a href={projects[currentProjectIndex].link} target="_blank" className="mt-4 bg-gradient-to-r from-green-400 to-purple-500 text-white font-bold py-2 px-4 rounded-full">
              View Project
            </a>
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
              <button onClick={handlePreviousProject} className="bg-black text-white p-4 rounded-full">&#8592;</button>
              <button onClick={handleNextProject} className="bg-black text-white p-4 rounded-full">&#8594;</button>
            </div>
          </div>
        </div>
      </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 w-full bg-gradient-to-b from-blue-400 to-blue-600 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form id="contact-form" className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input type="text" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input type="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea name="message" rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"></textarea>
              </div>
              <div>
                <button type="submit" disabled={isSubmitting} className="w-full flex justify-center items-center gap-2 py-2 px-4 rounded-md bg-gradient-to-r from-yellow-400 to-pink-500 text-white">
                  {isSubmitting ? (
                    <>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                        <Send className="w-4 h-4" />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              {submitStatus.message && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-md ${submitStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

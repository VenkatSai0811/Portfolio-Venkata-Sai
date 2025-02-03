"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"  // Make sure this import is here
import { ArrowRight, Send, Download } from "lucide-react"
import { useState } from "react"
import { sendEmail } from "./actions/send-email"

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const projects = [
    {
      title: "Echoes of the Past",
      description: "A mystery 3D escape room game developed in Unity 3D.",
      mediaType: "video",
      media: "/echoes.mp4",
      tags: ["Unity 3D", "C#", "3D Modeling"],
      link: "https://github.com/yourgithubusername/echoes-of-the-past", // GitHub link
    },
    {
      title: "Make My Trip Mobile App Clone",
      description: "A Figma-based clone of the popular Make My Trip mobile application.",
      mediaType: "image",
      media: "/mmt.jpg?height=200&width=300",
      tags: ["Figma", "Mobile Design", "UI/UX"],
      link: "https://www.figma.com/proto/su7gHDxPQ1tVLS22e8Ebsy/MakeMyTrip?node-id=0-1&t=cvmp2U4ZCuePQLmG-1", // Figma prototype link
    },
    {
      title: "UI Web Design with Figma",
      description: "A comprehensive web design project created using Figma.",
      mediaType: "image",
      media: "/NFTs.jpg?height=200&width=300",
      tags: ["Figma", "UI/UX", "Web Design"],
      link: "https://www.figma.com/proto/SEjTpE03Ye0ylrciVNBLoI/Nft--website?node-id=1-2&t=AF8JaGMXG3eZuwtb-1", // Figma prototype link
    },
  ]

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const handlePreviousProject = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    )
  }

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitStatus({})
    try {
      const result = await sendEmail(formData)
      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Thank you for your message! I will get back to you soon.",
        })
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form.reset()
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error)
      setSubmitStatus({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center w-full bg-gradient-to-b from-blue-400 to-blue-600 dark:from-gray-900 dark:to-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 px-4"
        >
          <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
              I'm Venkatasai
            </h1>
          </motion.div>
          <p className="text-2xl sm:text-3xl mb-8 text-gray-100 dark:text-gray-300">
            UI/UX Designer & Game Developer
          </p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="#projects"
              className="group bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg hover:shadow-yellow-300/50 flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="group bg-white dark:bg-gray-800 text-blue-600 dark:text-yellow-400 font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg border border-blue-600 dark:border-yellow-400 flex items-center gap-2"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 w-full bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient-to-r from-green-400 to-purple-500">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/me.jpg?height=100&width=400"
                alt="Venkatasai"
                width={400}
                height={400}
                className="rounded-full shadow-lg transform hover:scale-110 transition-transform"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                Hi, I'm Venkatasai, a passionate UI/UX designer and game developer with a strong background in full-stack development.
                I love creating immersive digital experiences that blend creativity with functionality.
              </p>
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                My expertise spans across various technologies and Unity 3D for game development. I'm also proficient in using design tools like Figma
                to create intuitive and visually appealing user interfaces.
              </p>
              <Link
                href="/about"
                className="inline-block bg-gradient-to-r from-green-400 to-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-gradient-to-r from-green-500 to-purple-600 transition-colors"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="py-20 w-full bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient-to-r from-yellow-400 to-pink-500">Skills & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Image src="/unity.jpg" alt="Unity" width={80} height={80} className="rounded-full shadow-lg" />
              <p className="text-xl mt-4 text-center text-gray-700 dark:text-gray-300">Unity</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/figma.png" alt="Figma" width={80} height={80} className="rounded-full shadow-lg" />
              <p className="text-xl mt-4 text-center text-gray-700 dark:text-gray-300">Figma</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/core-engine.jpeg" alt="Core Engine" width={80} height={80} className="rounded-full shadow-lg" />
              <p className="text-xl mt-4 text-center text-gray-700 dark:text-gray-300">Core Engine</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/gamemaker.svg" alt="GameMaker" width={80} height={80} className="rounded-full shadow-lg" />
              <p className="text-xl mt-4 text-center text-gray-700 dark:text-gray-300">GameMaker</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 w-full bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient-to-r from-yellow-400 to-pink-500">My Projects</h2>
          {/* Project Media */}
          <div className="relative">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Conditional Rendering: Video or Image */}
              {projects[currentProjectIndex].mediaType === "video" ? (
                <motion.video
                  className="w-2/3 h-auto"
                  key={projects[currentProjectIndex].media}
                  src={projects[currentProjectIndex].media}
                  controls
                />
              ) : (
                <motion.img
                  className="w-2/3 h-auto"
                  key={projects[currentProjectIndex].media}
                  src={projects[currentProjectIndex].media}
                  alt={projects[currentProjectIndex].title}
                />
              )}
            </motion.div>

            {/* Project Description */}
            <div className="text-center mt-4">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {projects[currentProjectIndex].description}
              </p>

              {/* Project Link Button */}
              <div className="mt-4">
                {projects[currentProjectIndex].mediaType === "video" ? (
                  <a
                    href={projects[currentProjectIndex].link}
                    target="_blank"
                    className="inline-block bg-gradient-to-r from-green-400 to-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-gradient-to-r from-green-500 to-purple-600 transition-colors"
                  >
                    View on GitHub
                  </a>
                ) : (
                  <a
                    href={projects[currentProjectIndex].link}
                    target="_blank"
                    className="inline-block bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-gradient-to-r from-yellow-500 to-pink-600 transition-colors"
                  >
                    View Figma Prototype
                  </a>
                )}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center">
              <button
                onClick={handlePreviousProject}
                className="bg-black text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all"
              >
                &#8592;
              </button>
              <button
                onClick={handleNextProject}
                className="bg-black text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all"
              >
                &#8594;
              </button>
            </div>
          </div>

          {/* Link to view all projects */}
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-block bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-gradient-to-r from-yellow-500 to-pink-600 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 w-full bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient-to-r from-yellow-400 to-pink-500">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form
              id="contact-form"
              action={handleSubmit}
              className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
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
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-md ${
                    submitStatus.success
                      ? "bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                      : "bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200"
                  }`}
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

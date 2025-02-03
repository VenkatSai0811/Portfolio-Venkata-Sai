"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Send, Download } from "lucide-react"
import { useState } from "react"
import { sendEmail } from "./actions/send-email"

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

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
      <section className="min-h-screen flex items-center justify-center w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 px-4"
        >
          <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Welcome, I'm Venkatasai
            </h1>
          </motion.div>
          <p className="text-2xl sm:text-3xl mb-8 text-gray-600 dark:text-gray-300">UI/UX Designer & Game Developer</p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="#projects"
              className="group bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="group bg-white dark:bg-gray-800 text-primary dark:text-secondary font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg border border-primary dark:border-secondary flex items-center gap-2"
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
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Venkatasai"
                width={400}
                height={400}
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                Hi, I'm Venkatasai, a passionate UI/UX designer and game developer with a strong background in
                full-stack development. I love creating immersive digital experiences that blend creativity with
                functionality.
              </p>
              <p className="text-lg mb-4">
                My expertise spans across various technologies, including React.js for frontend development, Spring Boot
                and Hibernate for robust backend solutions, and Unity 3D for game development. I'm also proficient in
                using design tools like Figma to create intuitive and visually appealing user interfaces.
              </p>
              <Link
                href="/about"
                className="inline-block bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-primary/90 transition-colors"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 w-full bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Echoes of the Past",
                description: "A mystery 3D escape room game developed in Unity 3D.",
                image: "/placeholder.svg?height=200&width=300",
                tags: ["Unity 3D", "C#", "3D Modeling"],
                link: "/projects/echoes-of-past",
              },
              {
                title: "UI Web Design with Figma",
                description: "A comprehensive web design project created using Figma.",
                image: "/placeholder.svg?height=200&width=300",
                tags: ["Figma", "UI/UX", "Web Design"],
                link: "/projects/ui-web-design",
              },
              {
                title: "Make My Trip Mobile App Clone",
                description: "A Figma-based clone of the popular Make My Trip mobile application.",
                image: "/placeholder.svg?height=200&width=300",
                tags: ["Figma", "Mobile Design", "UI/UX"],
                link: "/projects/make-my-trip-clone",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-foreground text-sm px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-block bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    View Project
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-block bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-primary/90 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 w-full bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Skills & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg p-6"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">{category.name}</h3>
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
          <div className="text-center mt-8">
            <Link
              href="/skills"
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-6 rounded-full hover:shadow-lg transition-all duration-200"
            >
              View All Skills
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 w-full bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
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

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                  <p className="mb-2">Email: venkatasai@example.com</p>
                  <p className="mb-2">Phone: +1 (123) 456-7890</p>
                  <p>Location: Hyderabad, India</p>
                </div>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


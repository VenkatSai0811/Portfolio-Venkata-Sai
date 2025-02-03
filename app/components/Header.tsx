"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 bg-background/70 backdrop-blur-3xl z-10 border-b border-muted transition-all ease-in-out duration-500 py-6">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ffcc] to-[#ff00ff] hover:from-[#ff0077] hover:to-[#00ccff] transition-all transform hover:scale-110 ease-in-out duration-300"
          >
            Venkata Sai
          </Link>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-xl hover:text-[#ff00ff] transition-colors transform hover:scale-110 ease-in-out duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-xl hover:text-[#00ffcc] transition-colors transform hover:scale-110 ease-in-out duration-300"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-xl hover:text-[#ff0077] transition-colors transform hover:scale-110 ease-in-out duration-300"
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className="text-xl hover:text-[#ffcc00] transition-colors transform hover:scale-110 ease-in-out duration-300"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="text-xl hover:text-[#00ccff] transition-colors transform hover:scale-110 ease-in-out duration-300"
              >
                Contact
              </Link>
            </nav>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 rounded-full hover:bg-[#1c1c1c] transition-colors ml-4 transform hover:scale-110 ease-in-out duration-300"
            >
              {theme === "dark" ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-blue-400" />}
            </button>
            <button
              className="md:hidden ml-4 transform hover:scale-110 ease-in-out duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} className="text-[#ff00ff]" /> : <Menu size={28} className="text-[#00ffcc]" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-background px-6 py-4 transition-all duration-500 ease-in-out">
          <Link
            href="/"
            className="block py-3 text-lg hover:text-[#ff00ff] transition-colors transform hover:scale-110 ease-in-out duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-3 text-lg hover:text-[#00ffcc] transition-colors transform hover:scale-110 ease-in-out duration-300"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block py-3 text-lg hover:text-[#ff0077] transition-colors transform hover:scale-110 ease-in-out duration-300"
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className="block py-3 text-lg hover:text-[#ffcc00] transition-colors transform hover:scale-110 ease-in-out duration-300"
          >
            Skills
          </Link>
          <Link
            href="/contact"
            className="block py-3 text-lg hover:text-[#00ccff] transition-colors transform hover:scale-110 ease-in-out duration-300"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header

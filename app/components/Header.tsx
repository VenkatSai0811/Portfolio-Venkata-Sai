"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 bg-background/80 backdrop-blur-md z-10 border-b border-muted">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Venkatasai
          </Link>
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/skills" className="hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted transition-colors ml-4"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="md:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-background px-4 py-2">
          <Link href="/" className="block py-2 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="block py-2 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/projects" className="block py-2 hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/skills" className="block py-2 hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="/contact" className="block py-2 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header


import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              Venkatasai
            </Link>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/VenkatSai0811"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/venkat0811"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Venkatasai. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer


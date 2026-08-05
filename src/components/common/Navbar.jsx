import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import logoImg from '@/assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Mentors', path: '/mentors' },
    { name: 'Placements', path: '/placements' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-card border-b py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logoImg}
            alt="Algorithm Tech Solutions Logo"
            className="w-11 h-11 object-contain rounded-lg group-hover:scale-105 transition-transform duration-200"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-sm md:text-base tracking-tight text-foreground">
              ALGORITHM <span className="text-primary font-bold">TECH</span>
            </span>
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.22em] text-muted-foreground uppercase mt-0.5">
              Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-primary transition-colors relative py-1 ${
                  isActive ? 'text-primary' : 'text-foreground/80'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleDarkMode}
            className="rounded-full w-9 h-9 p-0 flex items-center justify-center"
          >
            {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
          </Button>
          <Link to="/contact">
            <Button variant="gradient" size="sm">Enroll Now</Button>
          </Link>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleDarkMode}
            className="rounded-full w-9 h-9 p-0 flex items-center justify-center"
          >
            {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-md"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </Container>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-b shadow-lg overflow-hidden"
          >
            <Container className="py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-semibold py-2 px-3 rounded-lg hover:bg-muted hover:text-primary transition-colors ${
                      isActive ? 'bg-primary/10 text-primary' : 'text-foreground'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-2 border-t flex flex-col gap-2">
                <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full">
                  <Button variant="gradient" className="w-full">Enroll Now</Button>
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

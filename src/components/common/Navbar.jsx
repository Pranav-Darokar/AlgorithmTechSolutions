import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import logoImg from '@/assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      // Only go dark if user explicitly chose dark before
      return savedTheme === 'dark'
    }
    return false // default: light mode
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

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
    setIsDarkMode(prev => !prev)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Mentors', path: '/mentors' },
    { name: 'Placements', path: '/placements' },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <header
      className={`transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800/80 py-2.5 shadow-xs'
          : 'bg-white dark:bg-[#0F172A] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logoImg}
            alt="AlgorithmTech Logo"
            className="w-10 h-10 object-contain rounded-full group-hover:scale-105 transition-transform duration-200"
          />
          <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-[#0F172A] dark:text-white">
            Algorithm<span className="text-blue-600 dark:text-cyan-400">Tech</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors relative py-1 ${
                  isActive
                    ? 'text-blue-600 dark:text-cyan-400 font-bold'
                    : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 dark:bg-cyan-400 rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle theme"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
          </button>
          <Link to="/register">
            <button className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-white font-bold rounded-xl px-5 py-2 text-sm shadow-md transition-all hover:scale-[1.02] cursor-pointer">
              Register
            </button>
          </Link>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleDarkMode}
            className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-[#1E293B] border-b border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-semibold py-2 px-3 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors ${
                      isActive ? 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 font-bold' : 'text-slate-800 dark:text-slate-200'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <Link to="/register" onClick={() => setIsOpen(false)} className="w-full block">
                  <button className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-white font-bold rounded-xl py-2.5 text-base text-center shadow-md transition-all">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


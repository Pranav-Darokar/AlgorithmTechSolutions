import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import logoIconImg from '@/assets/logo_icon.png'

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
          ? 'bg-white/90 dark:bg-[#0B132B]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 py-2.5 shadow-sm'
          : 'bg-white dark:bg-[#0B132B] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logoIconImg}
            alt="Algorithm Tech Solutions Emblem"
            className="h-10 sm:h-12 md:h-13 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-xl sm:text-2xl md:text-[26px] tracking-tight text-[#0F172A] dark:text-white transition-colors">
              AlgorithmTech
            </span>
            <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold tracking-[0.24em] text-[#00A3FF] dark:text-[#38BDF8] uppercase mt-0.5">
              SOLUTIONS
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
                `text-sm font-bold transition-colors relative py-1 ${
                  isActive ? 'text-[#19426C] dark:text-amber-400' : 'text-[#334155] dark:text-slate-200 hover:text-[#19426C] dark:hover:text-amber-400'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#DF8600] rounded-full"
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
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#334155] dark:text-slate-200 hover:text-[#F59E0B] transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={19} className="text-amber-400" /> : <Moon size={19} />}
          </button>
          <Link to="/contact">
            <button className="bg-white dark:bg-slate-900 border border-[#CBD5E1] dark:border-slate-700 text-[#0F172A] dark:text-white font-bold rounded-full px-6 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all hover:scale-[1.02]">
              Register
            </button>
          </Link>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleDarkMode}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#334155] dark:text-slate-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={19} className="text-amber-400" /> : <Moon size={19} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg text-[#334155] dark:text-slate-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="lg:hidden bg-white dark:bg-[#141F36] border-b border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-semibold py-2 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-[#19426C] transition-colors ${
                      isActive ? 'bg-blue-50 dark:bg-blue-900/40 text-[#19426C] dark:text-amber-400 font-bold' : 'text-[#1E293B] dark:text-slate-200'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full block">
                  <button className="w-full bg-white dark:bg-slate-900 border border-[#CBD5E1] dark:border-slate-700 text-[#0F172A] dark:text-white font-bold rounded-full py-3 text-center hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all">
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


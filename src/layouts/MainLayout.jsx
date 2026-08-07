import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import TopBar from '@/components/common/TopBar'

export default function MainLayout({ children }) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300 bg-grid-glow relative">
      {/* Sticky header wrapper: TopBar + Navbar both fixed at top on scroll */}
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Floating WhatsApp CTA */}
      <motion.a
        href="https://wa.me/918436963334?text=Hi%2C%20I'm%20interested%20in%20IT%20Training%20courses%20at%20Algorithm%20Tech."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-lg shadow-emerald-500/20 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 duration-200"
        whileHover={{ y: -3 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16,2A14,14,0,0,0,4.76,23.77L3,29l5.39-1.74A14,14,0,1,0,16,2Zm0,26a12,12,0,0,1-6.22-1.74l-.44-.26-4.57,1.47,1.48-4.45-.29-.46A12,12,0,1,1,16,28Z" fill="#fff"/>
          <path d="M21.12,18.37c-.3-.15-1.76-.87-2-.95s-.47-.15-.67.15-.77.95-.94,1.14-.35.22-.64.08a8,8,0,0,1-2.37-1.46,8.9,8.9,0,0,1-1.64-2c-.17-.3,0-.46.13-.61s.3-.35.44-.52a1.81,1.81,0,0,0,.3-.5.55.55,0,0,0,0-.53c-.08-.15-.67-1.62-.92-2.22s-.49-.5-.67-.51h-.57a1.1,1.1,0,0,0-.8.38,3.38,3.38,0,0,0-1.05,2.52,5.87,5.87,0,0,0,1.23,3.12c.15.2,2.13,3.37,5.19,4.58a17.44,17.44,0,0,0,1.73.64,4.17,4.17,0,0,0,1.91.12,3.1,3.1,0,0,0,2-1.43,2.48,2.48,0,0,0,.17-1.43C21.62,18.59,21.42,18.52,21.12,18.37Z" fill="#fff"/>
        </svg>
      </motion.a>
    </div>
  )
}

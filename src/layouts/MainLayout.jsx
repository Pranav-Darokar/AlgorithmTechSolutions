import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

export default function MainLayout({ children }) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300 bg-grid-glow relative">
      <Navbar />
      
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
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.385 5.39.002 12.007 0c3.203.001 6.212 1.25 8.473 3.517 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.618-5.39 12-12.007 12-1.993-.001-3.955-.5-5.741-1.455L0 24zm6.59-4.846c1.785 1.059 3.58 1.583 5.413 1.585 5.405-.003 9.803-4.383 9.806-9.761.002-2.605-1.011-5.056-2.855-6.897C17.127 2.19 14.685.992 12.007 1c-5.412 0-9.81 4.38-9.813 9.76-.001 1.947.52 3.848 1.507 5.535l-.994 3.633 3.738-.974z" />
          <path d="M15.776 13.064c-.282-.14-.167-.665-.845-1.02-.678-.354-.648-.44-.816-.628-.168-.188-.602-.752-.845-.99-.243-.238-.456-.2-.628-.016-.172.184-.734.848-.902 1.036-.168.188-.337.21-.62.07-.282-.14-1.192-.44-2.27-1.402-.838-.748-1.404-1.67-1.568-1.954-.163-.283-.018-.436.123-.576.127-.127.282-.328.423-.492.14-.164.188-.28.282-.47.094-.187.047-.353-.024-.492-.07-.14-.628-1.515-.86-2.078-.227-.547-.456-.473-.628-.48-.168-.008-.363-.01-.557-.01-.194 0-.51.072-.776.36-.266.287-1.016.994-1.016 2.424s1.04 2.806 1.185 3.002c.143.196 2.046 3.125 4.957 4.38.692.298 1.233.477 1.655.61.697.22 1.33.19 1.83.115.558-.084 1.716-.7 1.96-1.374.244-.673.244-1.25.17-1.372-.073-.122-.27-.193-.553-.334z" />
        </svg>
      </motion.a>
    </div>
  )
}

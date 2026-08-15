import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import logoImg from '@/assets/logo.png'
import { courses } from '@/data/courses'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Placements', path: '/placements' },
    { name: 'Contact', path: '/contact' },
  ]

  const courseLinks = courses.map(course => ({
    name: course.name,
    path: `/courses/${course.id}`
  }))

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-8">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* About Column */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={logoImg}
              alt="Algorithm Tech Solutions Logo"
              className="w-10 h-10 object-contain rounded-full"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                AlgorithmTech
              </span>
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#38BDF8] uppercase mt-0.5">
                SOLUTIONS
              </span>
            </div>
          </Link>
          <p className="text-sm text-white/90 leading-relaxed">
            Empowering next-gen IT professionals and corporate workforces through high-end hands-on training, expert mentors, and direct placement support.
          </p>
          {/* Social Icons (Inline SVGs to prevent Lucide brand icon version mismatches) */}
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-lg border border-slate-800 flex items-center justify-center text-white/90 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-lg border border-slate-800 flex items-center justify-center text-white/90 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200" aria-label="Twitter X">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-lg border border-slate-800 flex items-center justify-center text-white/90 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-lg border border-slate-800 flex items-center justify-center text-white/90 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200" aria-label="YouTube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-base tracking-tight text-white">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-sm text-white/90 hover:text-sky-400 transition-colors duration-150">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses Column */}
        <div className="space-y-4 lg:col-span-2">
          <h4 className="font-display font-bold text-base tracking-tight text-white">Our Courses</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
            {courseLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-sm text-white/90 hover:text-sky-400 transition-colors duration-150 line-clamp-1" title={link.name}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter Column */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-base tracking-tight text-white">Contact Info</h4>
          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-start gap-2.5">
              <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
              <a
                href="https://www.google.com/maps/place/18%C2%B029'06.1%22N+73%C2%B048'57.2%22E/@18.485034,73.8133044,17z/data=!3m1!4b1!4m4!3m3!8m2!3d18.485034!4d73.8158793?hl=en&entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors duration-150"
              >
                AlgorithmTech Corporate Training Institute, Near Cummins Engineering College, Karve Nagar, Lane 1, Opposite Pentagon Tower, Pune
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-primary shrink-0" />
              <span className="text-sm">+91 76662 24323, +91 84369 63334</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-primary shrink-0" />
              <span>admissions@algorithmtech.in</span>
            </li>
          </ul>


        </div>

      </Container>
      
      {/* Copyright Subfooter */}
      <Container className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
        <p>&copy; {currentYear} Algorithm Tech Solutions. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </Container>
    </footer>
  )
}

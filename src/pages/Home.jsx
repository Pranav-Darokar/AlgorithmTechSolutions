import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Users, Settings, FileCode, Briefcase, MessagesSquare,
  FileSpreadsheet, Clock, CreditCard, Compass, GraduationCap,
  ArrowRight, Sparkles, CheckCircle2, ChevronRight, Phone,
  Cpu, Cloud, Terminal, Code2, Database, Layers, Server, ShieldCheck
} from 'lucide-react'

// Import components
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import SectionTitle from '@/components/common/SectionTitle'
import CourseCard from '@/components/common/CourseCard'
import MentorCard from '@/components/common/MentorCard'
import TestimonialCard from '@/components/common/TestimonialCard'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion'

// Import data
import { courses } from '@/data/courses'
import { mentors } from '@/data/mentors'
import { placementStats, hiringPartners } from '@/data/placements'
import { testimonials } from '@/data/testimonials'
import { faqs } from '@/data/faq'

// Import Hero Image asset
import heroBgImg from '@/assets/hero_bg.png'
import logoImg from '@/assets/logo.png'
import heroWorkingWomanImg from '@/assets/hero_working_woman_transparent.png'

export default function Home() {
  // Why Choose Us features definition
  const features = [
    { title: "Industry Expert Mentors", desc: "Learn directly from active corporate professionals with 8+ years experience.", icon: Users },
    { title: "Practical Hands-on Training", desc: "Focus on sandbox exercises and laboratory assignments over pure theory.", icon: Settings },
    { title: "Live Projects", desc: "Build industry-relevant final projects that simulate commercial environments.", icon: FileCode },
    { title: "Placement Assistance", desc: "Dedicated placement cell organizing active recruitment drives.", icon: Briefcase },
    { title: "Mock Interviews", desc: "Polishing technical and soft skills through simulated interview setups.", icon: MessagesSquare },
    { title: "Resume Building", desc: "Create high-converting resumes, portfolios, and LinkedIn profiles.", icon: FileSpreadsheet }
  ]

  // Framer Motion variant configs
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5 }
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.1 }
  }

  const techBadges = [
    { name: 'AI & Prompt Eng', icon: Sparkles, color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
    { name: 'AWS Cloud & DevOps', icon: Cloud, color: 'text-sky-500 bg-sky-500/10 border-sky-500/20' },
    { name: 'Data Annotation', icon: Database, color: 'text-blue-600 bg-blue-600/10 border-blue-600/20' },
    { name: 'Full-Stack Dev', icon: Code2, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' },
    { name: 'QA Automation', icon: ShieldCheck, color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20' },
    { name: 'LabVIEW Industrial', icon: Cpu, color: 'text-orange-500 bg-orange-500/10 border-orange-500/20' }
  ]

  return (
    <div className="space-y-24 pb-20">

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F0F9FF] dark:bg-[#0B132B] pt-6 pb-16 lg:py-20 min-h-[680px] flex items-center transition-colors">
        {/* Soft Ice Blue vector wave background curves (bottom right) */}
        <div className="absolute bottom-0 right-0 w-full max-w-4xl h-80 pointer-events-none opacity-90 dark:opacity-40 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none" preserveAspectRatio="none">
            <path d="M400 400C600 350 750 200 1000 250V400H400Z" fill="#E0F2FE" fillOpacity="0.9" />
            <path d="M200 400C450 320 650 150 1000 180V400H200Z" fill="#BAE6FD" fillOpacity="0.7" />
            <path d="M0 400C300 360 550 240 1000 290V400H0Z" fill="#7DD3FC" fillOpacity="0.4" />
            <path d="M600 400C750 310 880 260 1000 280V400H600Z" fill="#0284C7" fillOpacity="0.1" />
          </svg>
        </div>

        {/* Matrix grid of dots (top right accent) */}
        <div className="absolute top-8 right-12 hidden lg:block pointer-events-none opacity-30">
          <svg width="140" height="120" viewBox="0 0 140 120" fill="none">
            <pattern id="dot-matrix" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="2" fill="#0284C7" />
            </pattern>
            <rect width="140" height="120" fill="url(#dot-matrix)" />
          </svg>
        </div>

        {/* Floating Technology Badges */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-4 left-2 sm:left-6 lg:left-12 z-20 flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-blue-200 dark:border-blue-800/80 shadow-lg shadow-blue-500/10 backdrop-blur-md"
        >
          <span className="text-sm sm:text-base">🤖</span>
          <span className="text-[11px] sm:text-xs font-extrabold text-blue-900 dark:text-blue-200">Generative AI</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-6 right-2 sm:right-6 lg:right-12 z-20 flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-purple-200 dark:border-purple-800/80 shadow-lg shadow-purple-500/10 backdrop-blur-md"
        >
          <span className="text-sm sm:text-base">🧪</span>
          <span className="text-[11px] sm:text-xs font-extrabold text-purple-900 dark:text-purple-200">Software Testing</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-2 lg:left-8 z-20 items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-emerald-200 dark:border-emerald-800/80 shadow-lg shadow-emerald-500/10 backdrop-blur-md"
        >
          <span className="text-base">🏷️</span>
          <span className="text-xs font-extrabold text-emerald-900 dark:text-emerald-200">Data Annotation</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
          className="hidden sm:flex absolute top-1/2 -translate-y-1/2 right-2 lg:right-8 z-20 items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-amber-200 dark:border-amber-800/80 shadow-lg shadow-amber-500/10 backdrop-blur-md"
        >
          <span className="text-base">📱</span>
          <span className="text-xs font-extrabold text-amber-900 dark:text-amber-200">App Development</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden md:flex absolute bottom-6 left-12 lg:left-24 z-20 items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-cyan-200 dark:border-cyan-800/80 shadow-lg shadow-cyan-500/10 backdrop-blur-md"
        >
          <span className="text-base">🔬</span>
          <span className="text-xs font-extrabold text-cyan-900 dark:text-cyan-200">LabVIEW Training</span>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center py-8 sm:py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex flex-col items-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-sky-200 dark:border-slate-700 text-[#0F172A] dark:text-white text-xs font-semibold shadow-xs">
              <span className="text-[#F59E0B]">✨</span> Corporate Training Institute
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A] dark:text-white leading-[1.12]">
              Transform Your Career with <br className="hidden sm:block" />
              <span>Industry-Focused </span>
              <span className="text-[#F59E0B]">
                IT Training
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#475569] dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal mx-auto">
              Gain practical skills through expert-led training, hands-on laboratory modules, live projects, and direct placement support.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link to="/contact">
                <button className="bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A] hover:bg-[#1E293B] dark:hover:bg-slate-100 font-bold rounded-2xl px-8 py-3.5 shadow-lg shadow-slate-900/20 flex items-center gap-2.5 transition-all hover:scale-[1.02] text-sm md:text-base">
                  Enroll Now <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/courses">
                <button className="bg-white dark:bg-slate-900 border border-[#CBD5E1] dark:border-slate-700 text-[#0F172A] dark:text-white font-bold rounded-2xl px-8 py-3.5 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all text-sm md:text-base">
                  Book Free Demo
                </button>
              </Link>
            </div>

            {/* Bottom Stats Card */}
            <div className="bg-white/95 dark:bg-[#141F36]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-sky-100 dark:border-slate-800 shadow-xl shadow-sky-900/5 p-4 sm:p-6 flex items-center justify-center gap-4 sm:gap-10 max-w-2xl w-full mt-6">
              {/* Stat 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0F172A]/10 dark:bg-white/10 flex items-center justify-center text-[#0F172A] dark:text-white shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-black text-[#0F172A] dark:text-white">100%</div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#475569] dark:text-slate-300">Placement Support</div>
                </div>
              </div>

              <div className="h-9 w-px bg-slate-200 dark:bg-slate-700" />

              {/* Stat 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0F172A]/10 dark:bg-white/10 flex items-center justify-center text-[#0F172A] dark:text-white shrink-0">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-black text-[#0F172A] dark:text-white">15+</div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#475569] dark:text-slate-300">Live Projects</div>
                </div>
              </div>

              <div className="h-9 w-px bg-slate-200 dark:bg-slate-700" />

              {/* Stat 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0F172A]/10 dark:bg-white/10 flex items-center justify-center text-[#0F172A] dark:text-white shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-black text-[#0F172A] dark:text-white">500+</div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#475569] dark:text-slate-300">Alumni Network</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* 2. ABOUT INSTITUTE SECTION */}
      <section className="py-8">
        <Container>
          <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Image block */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-secondary rounded-2xl filter blur-xl opacity-30 -z-10" />
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600&h=450"
                alt="Students learning in institute lab"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Content Block */}
            <div className="lg:col-span-7 space-y-6">
              <SectionTitle
                badge="About Algorithm Tech Solutions"
                title="Pioneering Corporate Training in Next-Gen IT Fields"
                align="left"
              />
              <p className="text-base text-muted-foreground leading-relaxed">
                Algorithm Tech Solutions was founded with a clear vision: to bridge the gap between academic education and modern enterprise requirements. We offer specialized syllabus in high-value subfields of Software Engineering and AI Operations.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <h4 className="font-bold flex items-center gap-2 text-primary">
                    <CheckCircle2 size={16} className="text-secondary shrink-0" /> Our Mission
                  </h4>
                  <p className="text-sm text-muted-foreground">To equip students with verified practical skills that translate directly into industrial job performance.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold flex items-center gap-2 text-primary">
                    <CheckCircle2 size={16} className="text-secondary shrink-0" /> Our Vision
                  </h4>
                  <p className="text-sm text-muted-foreground">To build India's premier corporate training node trusted by top-tier IT companies and engineers.</p>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/about">
                  <Button variant="outline" className="gap-2">
                    Read Full Story <ChevronRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>

          </motion.div>
        </Container>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="py-8 bg-card/30 border-y py-16">
        <Container className="space-y-12">
          <SectionTitle
            badge="Why Us?"
            title="Syllabus Built for Placement Success"
            subtitle="Explore our advantages built to transition learners into working industry candidates."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feat) => {
              const Icon = feat.icon
              return (
                <motion.div
                  key={feat.title}
                  variants={fadeInUp}
                >
                  <Card interactive={true} className="h-full bg-card/60 backdrop-blur-sm border border-border/50">
                    <CardContent className="p-6 space-y-4">
                      <div className="bg-primary/10 text-primary w-11 h-11 rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                        <Icon size={20} className="stroke-[2]" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-display font-bold text-base tracking-tight">{feat.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </section>

      {/* 4. AVAILABLE COURSES PREVIEW */}
      <section className="py-8">
        <Container className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionTitle
              badge="IT Training Programs"
              title="Explore Our Professional Courses"
              subtitle="Industry-verified syllabi tailored for high-demand IT specializations."
              align="left"
              className="mx-0"
            />
            <Link to="/courses">
              <Button variant="outline" className="gap-2 self-start md:self-end">
                View All Courses <ChevronRight size={16} />
              </Button>
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {courses.slice(0, 3).map((course) => (
              <motion.div
                key={course.id}
                variants={fadeInUp}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 5. PLACEMENT HIGHLIGHTS */}
      <section className="py-16 bg-gradient-to-b from-primary/5 via-transparent to-transparent border-y">
        <Container className="space-y-16">

          {/* Animated Counter Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {placementStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-xl border border-border/40"
              >
                <h3 className="text-3xl md:text-4xl font-extrabold text-primary font-display tracking-tight leading-none mb-1">
                  {stat.value}
                </h3>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Hiring Partners */}
          <div className="space-y-8">
            <h4 className="text-center font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground/80">
              Our Certified Students are Hired by
            </h4>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center opacity-70">
              {hiringPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-card px-6 py-4.5 border rounded-lg hover:opacity-100 hover:border-primary/40 hover:shadow-sm transition-all duration-200 text-center w-full font-display font-bold text-sm tracking-widest text-muted-foreground"
                >
                  {partner.name}
                </div>
              ))}
            </div>
          </div>

        </Container>
      </section>

      {/* 6. MENTORS PREVIEW */}
      <section className="py-8">
        <Container className="space-y-12">
          <SectionTitle
            badge="Expert Faculty"
            title="Learn from Corporate Trainers"
            subtitle="Classes led by senior industry professionals bringing their real-world experience."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {mentors.slice(0, 4).map((mentor) => (
              <motion.div
                key={mentor.id}
                variants={fadeInUp}
              >
                <MentorCard mentor={mentor} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center pt-4">
            <Link to="/mentors">
              <Button variant="outline" className="gap-2">
                Meet All Mentors <ChevronRight size={16} />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* 7. STUDENT TESTIMONIALS */}
      <section className="py-8 bg-card/20 border-y py-16">
        <Container className="space-y-12">
          <SectionTitle
            badge="Success Reviews"
            title="What Our Alumni Say"
            subtitle="Read how graduates from various backgrounds achieved their career pivots with us."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.slice(0, 3).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>



      {/* 9. FAQ ACCORDION SECTION */}
      <section className="py-8">
        <Container className="max-w-4xl space-y-12">
          <SectionTitle
            badge="Frequently Asked Questions"
            title="Have Questions? We Have Answers"
            subtitle="Find quick info about class timings, offline labs, placements, and syllabus details."
          />

          <Accordion type="single" defaultValue="faq-0">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>

      {/* 10. CONTACT CALL-TO-ACTION (CTA) */}
      <section className="py-8">
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary to-accent py-16 px-6 md:px-12 text-center text-white space-y-6 shadow-xl shadow-primary/20">
            {/* Background Blob shape */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.15),transparent)] pointer-events-none" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20">
              Limited Seats Available for Next Batch
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold max-w-3xl mx-auto tracking-tight leading-tight font-display">
              Ready to Accelerate Your Career in Information Technology?
            </h2>

            <p className="text-white/80 max-w-xl mx-auto text-base md:text-lg">
              Book a free counseling slot with our technical guides to pick the perfect course syllabus.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Link to="/contact">
                <Button variant="outline" className="bg-white text-primary border-transparent hover:bg-white/90 shadow-md">
                  Enroll Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" className="text-white border border-white/25 hover:bg-white/10">
                  Contact Counselor
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </div>
  )
}

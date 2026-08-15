import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion'
import {
  Users, Settings, FileCode, Briefcase, MessagesSquare,
  FileSpreadsheet, Clock, CreditCard, Compass, GraduationCap,
  ArrowRight, Sparkles, CheckCircle2, ChevronRight, Phone, Check, User, Star,
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
import SEO from '@/components/common/SEO'

// Import data
import { courses } from '@/data/courses'
import { mentors } from '@/data/mentors'
import { hiringPartners } from '@/data/placements'
import { testimonials } from '@/data/testimonials'

import CampusGallery from '@/components/common/CampusGallery'
import SuccessStoriesMarquee from '@/components/common/SuccessStoriesMarquee'
import bannerImg from '@/assets/campus/banner.png'
import awsPartnerImg from '@/assets/partners/aws.png'
import oraclePartnerImg from '@/assets/partners/oracle.png'
import nvidiaPartnerImg from '@/assets/partners/nvidia.jpg'
import bharatPgPartnerImg from '@/assets/partners/bharat_pg.jpg'
import linkedinPartnerImg from '@/assets/partners/linkedin.png'

import userBg1 from '@/assets/bg_slides/presentation_bg.jpg'
import userBg2 from '@/assets/bg_slides/slide1.jpg'
import userBg3 from '@/assets/bg_slides/user_slide1.jpg'

// Animated Counter Component
function CountUp({ end, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, { duration: duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, end, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Home() {
  const [currentBg, setCurrentBg] = useState(0);
  const bgImages = [userBg1, userBg2, userBg3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
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
    <div className="space-y-12 md:space-y-16 pb-12">
      <SEO
        title="Best IT Training Institute in Pune"
        description="AlgorithmTech offers premium offline and online IT training courses in AI, Prompt Engineering, App Development, Data Analytics, and more. 100% placement assistance in Pune."
        keywords="AlgorithmTech, IT Training Pune, AI courses, Data Science courses, Best coding institute, Software Testing courses Pune"
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden flex items-center pb-12 md:pb-16 lg:pb-20 pt-4 md:pt-6 lg:pt-8 min-h-[500px] bg-slate-900">

        {/* Sliding Background Images */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentBg}
              src={bgImages[currentBg]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover object-top"
              alt="Hero Background"
            />
          </AnimatePresence>
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-neutral-950/60 z-10" />
        </div>



        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex items-center h-full pt-2 md:pt-4 pb-12 md:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[760px] mx-auto w-full flex flex-col items-center text-center gap-6 md:gap-7"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-sm">
              <GraduationCap className="w-4 h-4 text-white" />
              Corporate IT Training Institute <span className="opacity-60 mx-1">•</span> <span className="text-amber-400 font-bold tracking-wide">Since 2019</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] text-center">
              Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Job-Ready Tech Skills</span><br className="hidden sm:block" /> With Industry Mentors
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-[600px] font-normal">
              Gain practical experience in Software Developement and Testing, Application Development, Artificial Intelligence and Industry Tools through expert-led training, live projects and dedicated placement assistance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
              <Link to="/courses" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-amber-500 text-neutral-950 hover:bg-amber-400 font-bold rounded-xl px-8 py-3.5 shadow-lg flex items-center justify-center transition-all text-sm md:text-base">
                  Explore Courses
                </button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl px-8 py-3.5 hover:bg-white/20 shadow-sm transition-all text-sm md:text-base flex items-center justify-center">
                  Book Free Counselling
                </button>
              </Link>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-4">
              {[
                'Practical Hands-on Training',
                'Live Industry Projects',
                'Placement Assistance'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-white font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* In-Hero Statistics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 mt-1 border-t border-white/20 w-full max-w-[620px] mx-auto">
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
                  <CountUp end={3500} suffix="+" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-white/70 uppercase tracking-wider">Students Trained</div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
                  <CountUp end={2900} suffix="+" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-white/70 uppercase tracking-wider">Students Placed</div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
                  <CountUp end={93} suffix="%" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-white/70 uppercase tracking-wider">Placement Rate</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Expert Card (Hidden on Mobile) */}
        <div className="hidden md:flex absolute bottom-10 right-10 z-30 items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-[1.25rem] px-5 py-3.5 shadow-xl">
          <div className="relative flex items-center justify-center w-10 h-10">
            <User className="w-8 h-8 text-amber-400" strokeWidth={1.5} />
            <Star className="w-4 h-4 text-amber-400 absolute -bottom-1 -right-1 fill-transparent stroke-amber-400" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-white font-medium text-sm leading-snug">Learn From</div>
            <div className="text-white font-medium text-sm leading-snug">Industry Experts</div>
          </div>
        </div>
      </section>


      {/* 4. AVAILABLE COURSES PREVIEW */}
      <section className="py-6 md:py-8">
        <Container className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionTitle
              badge="IT Training Programs"
              title="Explore Our Professional Courses"
              subtitle="Industry-verified syllabi tailored for high-demand IT specializations."
              align="left"
              className="mx-0"
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {courses.map((course) => (
              <motion.div
                key={course.id}
                variants={fadeInUp}
              >
                <CourseCard course={course} compact={true} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 4.5 & 5. PLACED STUDENTS & HIRING PARTNERS */}
      <section className="py-10 md:py-14 bg-slate-50/50 dark:bg-transparent border-y">
        <Container className="space-y-12 md:space-y-16">

          {/* Placed Students Success */}
          <div className="space-y-8">
            <SectionTitle
              badge="Our Alumni"
              title="Our Placement Success Stories"
              subtitle="Meet our students who turned their skills into careers with high packages."
              align="center"
            />
            <SuccessStoriesMarquee singleRow={true} />
          </div>

          {/* Hiring Partners */}
          <div className="space-y-8">
            <h4 className="text-center font-display font-bold text-xl md:text-2xl uppercase tracking-wide text-slate-900 dark:text-slate-100">
              Our Certified Students are Hired by
            </h4>
            <div className="relative flex overflow-hidden group gap-6 w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
              <div className="flex animate-marquee shrink-0 gap-6 min-w-full items-center justify-around">
                {hiringPartners.map((partner, idx) => (
                  <div
                    key={`${partner.name}-${idx}`}
                    className="bg-white px-6 py-6 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex items-center justify-center w-[240px] h-28 shrink-0 group/card"
                    title={partner.name}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={`max-w-full object-contain transition-all duration-300 group-hover/card:scale-110 drop-shadow-sm ${["Cognizant", "Siemens", "Capgemini"].includes(partner.name)
                          ? "max-h-24 scale-125"
                          : "max-h-16"
                        }`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="flex animate-marquee shrink-0 gap-6 min-w-full items-center justify-around" aria-hidden="true">
                {hiringPartners.map((partner, idx) => (
                  <div
                    key={`${partner.name}-dup-${idx}`}
                    className="bg-white px-6 py-6 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex items-center justify-center w-[240px] h-28 shrink-0 group/card"
                    title={partner.name}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={`max-w-full object-contain transition-all duration-300 group-hover/card:scale-110 drop-shadow-sm ${["Cognizant", "Siemens", "Capgemini"].includes(partner.name)
                          ? "max-h-24 scale-125"
                          : "max-h-16"
                        }`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </Container>
      </section>

      {/* 5.5 CAMPUS & LIFE GALLERY */}
      <CampusGallery mode="marquee" />

      {/* 6. MENTORS PREVIEW */}
      <section className="py-6 md:py-8">
        <Container className="space-y-8">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {mentors.map((mentor) => (
              <motion.div
                key={mentor.id}
                variants={fadeInUp}
              >
                <MentorCard mentor={mentor} />
              </motion.div>
            ))}
          </motion.div>


        </Container>
      </section>

      {/* 6.5. TECHNOLOGY PARTNERS SECTION */}
      <section className="py-8 md:py-10 bg-slate-50/80 dark:bg-[#111827]/60 border-y border-slate-200/80 dark:border-slate-800/80">
        <Container className="space-y-6 md:space-y-8">
          <SectionTitle
            badge="Industry Alliances"
            title="Technology Partners"
            subtitle="Collaborating with global tech pioneers to deliver enterprise-grade syllabus and infrastructure."
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto items-center">

            {/* 1. AWS */}
            <div className="bg-white dark:bg-[#1E293B] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-center shadow-xs hover:shadow-lg hover:border-amber-400/60 transition-all duration-300 group h-24 sm:h-28">
              <img
                src={awsPartnerImg}
                alt="AWS Official Logo"
                className="max-h-12 sm:max-h-14 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </div>

            {/* 2. Oracle */}
            <div className="bg-white dark:bg-[#1E293B] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-center shadow-xs hover:shadow-lg hover:border-red-400/60 transition-all duration-300 group h-24 sm:h-28">
              <img
                src={oraclePartnerImg}
                alt="Oracle Official Logo"
                className="max-h-12 sm:max-h-14 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </div>

            {/* 3. NVIDIA */}
            <div className="bg-white dark:bg-[#1E293B] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-center shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group h-24 sm:h-28">
              <img
                src={nvidiaPartnerImg}
                alt="NVIDIA Official Logo"
                className="max-h-14 sm:max-h-16 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </div>

            {/* 4. Bharat PGs */}
            <div className="bg-white dark:bg-[#1E293B] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-3 sm:p-4 flex items-center justify-center shadow-xs hover:shadow-lg hover:border-amber-400/60 transition-all duration-300 group h-24 sm:h-28">
              <img
                src={bharatPgPartnerImg}
                alt="Bharat PG Onboard & Search Logo"
                className="max-h-18 sm:max-h-20 w-auto object-contain rounded-xl group-hover:scale-105 transition-transform"
              />
            </div>

            {/* 5. LinkedIn */}
            <div className="bg-white dark:bg-[#1E293B] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-3 sm:p-4 flex items-center justify-center shadow-xs hover:shadow-lg hover:border-blue-500/60 transition-all duration-300 group h-24 sm:h-28 col-span-2 md:col-span-1">
              <img
                src={linkedinPartnerImg}
                alt="LinkedIn Official Logo"
                className="max-h-12 sm:max-h-14 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </div>

          </div>
        </Container>
      </section>

      {/* 7. STUDENT TESTIMONIALS */}
      <section className="py-6 md:py-8 bg-card/20 border-y">
        <Container className="space-y-8">
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





    </div>
  )
}

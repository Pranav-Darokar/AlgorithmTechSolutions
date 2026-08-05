import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Users, Settings, FileCode, Briefcase, MessagesSquare,
  FileSpreadsheet, Clock, CreditCard, Compass, GraduationCap,
  ArrowRight, Sparkles, CheckCircle2, ChevronRight
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
import heroStudentImg from '@/assets/hero_girl.png'
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

  return (
    <div className="space-y-24 pb-20">

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 md:pt-16 pb-20">
        <Container>

          {/* Text Content — centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              <Sparkles size={12} className="text-secondary animate-pulse" />
              Corporate Training Excellence
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Transform Your Career with <span className="gradient-text-primary">Industry-Focused IT Training</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Gain practical skills through expert-led training, hands-on laboratory modules, live projects, and direct placement support.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 justify-center">
              <Link to="/contact">
                <Button variant="gradient" size="lg" className="gap-2">
                  Enroll Now <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Book Free Demo</Button>
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/60 max-w-md mx-auto">
              <div>
                <h4 className="text-xl font-bold text-primary">100%</h4>
                <p className="text-xs text-muted-foreground">Placement Support</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary">15+</h4>
                <p className="text-xs text-muted-foreground">Live Projects</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary">500+</h4>
                <p className="text-xs text-muted-foreground">Alumni Network</p>
              </div>
            </div>
          </motion.div>

        </Container>
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

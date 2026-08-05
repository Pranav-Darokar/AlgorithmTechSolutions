import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Trophy, Users, ShieldAlert, Cpu, Laptop, GraduationCap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import SectionTitle from '@/components/common/SectionTitle'

export default function About() {
  const coreValues = [
    { title: "Practical First", desc: "We prioritize lab sessions and coding exercises over long lecture blocks.", icon: Laptop },
    { title: "Student Centric", desc: "Small batch sizes ensure personalized guidance and direct profile mentorship.", icon: Users },
    { title: "Industry Aligned", desc: "Curriculums designed and regularly modified to match current IT trends.", icon: Cpu },
    { title: "Constant Innovation", desc: "Continuous improvement in automation testing, AI tools, and training methods.", icon: Trophy }
  ]

  const methodology = [
    { step: "01", title: "Conceptual Foundations", desc: "Instructors cover core topics with visual diagrams and basic syntax." },
    { step: "02", title: "Hands-on Lab Practice", desc: "Students immediately practice concepts in virtual tool environments." },
    { step: "03", title: "Commercial Projects", desc: "Apply learnings to build large portfolios demonstrating production capacity." },
    { step: "04", title: "Portfolio Prep & Drives", desc: "CV polishing, mock reviews, and interviews leading to partner placements." }
  ]

  return (
    <div className="py-16 space-y-24">
      
      {/* Introduction Hero */}
      <section>
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-display">
              Empowering Careers with <span className="gradient-text-primary">Skills That Matter</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Founded in Karve Nagar, Pune, Algorithm Tech Solutions is dedicated to training next-gen software engineers, automation testers, and AI operations professionals. We replace high-level academic theory with low-level hands-on project work.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Whether you are an aspiring software tester looking to master Selenium automation, a developer wanting to deploy mobile products, or a non-tech learner stepping into AI operations via Data Annotation, we supply the pathways to get you hired.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-secondary rounded-2xl filter blur-xl opacity-30 -z-10" />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600&h=450"
              alt="IT Training classroom lab"
              className="w-full object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-card/30 border-y py-16">
        <Container className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card/60 backdrop-blur-sm border-border/60">
            <CardContent className="p-8 space-y-4">
              <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center border border-primary/20">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-bold font-display">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To create a frictionless, hands-on learning environment where students master highly relevant skill sets. We aim to equip every candidate with the capability to manage enterprise projects successfully on day one of their corporate career.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/60 backdrop-blur-sm border-border/60">
            <CardContent className="p-8 space-y-4">
              <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-xl flex items-center justify-center border border-secondary/20">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold font-display">Our Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To become the most trusted tech node for corporate upskilling and career transitions. We envision a community of alumni working across global IT firms, carrying forwards our practical-first engineering standards.
              </p>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Core Values */}
      <section>
        <Container className="space-y-12">
          <SectionTitle
            badge="Our Foundation"
            title="Values That Guide Us"
            subtitle="How we teach, review, and support candidates throughout their IT journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon
              return (
                <Card key={val.title} className="bg-card/40 backdrop-blur-sm border border-border/50">
                  <CardContent className="p-6 space-y-4">
                    <div className="bg-primary/15 text-primary w-11 h-11 rounded-lg flex items-center justify-center border border-primary/20">
                      <Icon size={20} className="stroke-[2]" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-base font-display">{val.title}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Learning Methodology */}
      <section className="bg-card/30 border-y py-16">
        <Container className="space-y-12">
          <SectionTitle
            badge="The Process"
            title="Our Learning Methodology"
            subtitle="A systematic, step-by-step model designed to build robust coding and automation skills."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m) => (
              <div key={m.step} className="relative p-6 bg-card border border-border/50 rounded-xl space-y-4">
                <span className="absolute right-4 top-2 text-4xl font-extrabold text-primary/10 font-display">
                  {m.step}
                </span>
                <h4 className="font-bold font-display text-base pt-2 pr-8">{m.title}</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

    </div>
  )
}

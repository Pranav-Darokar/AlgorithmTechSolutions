import React from 'react'
import { motion } from 'framer-motion'
import { Award, ShieldCheck, Mail, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import SectionTitle from '@/components/common/SectionTitle'
import MentorCard from '@/components/common/MentorCard'
import { mentors } from '@/data/mentors'

export default function Mentors() {
  return (
    <div className="py-16 space-y-24">
      
      {/* Intro Header */}
      <Container>
        <SectionTitle
          badge="Expert Faculty"
          title="Meet Our Corporate Instructors"
          subtitle="Learn directly from developers, certified engineers, and automation experts who understand actual corporate expectations."
        />
      </Container>

      {/* Mentor Cards Grid */}
      <section>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {mentors.map((mentor) => (
              <div key={mentor.id}>
                <MentorCard mentor={mentor} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Corporate Trainer Banner CTA */}
      <section>
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-card border py-16 px-6 md:px-12 text-center space-y-6 shadow-xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/5 filter blur-3xl -z-10" />
            
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              Join Our Faculty
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold max-w-3xl mx-auto tracking-tight leading-tight font-display">
              Are You an Industry Expert Passionate About Teaching?
            </h2>
            
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              We are constantly looking for senior software developers, automation QA leads, and AI researchers to guide our students. Share your industrial experiences and build the next workforce generation.
            </p>

            <div className="pt-2">
              <Link to="/contact">
                <Button variant="gradient" size="lg" className="gap-2">
                  Apply as Trainer <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </div>
  )
}

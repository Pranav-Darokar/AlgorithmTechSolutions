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


    </div>
  )
}

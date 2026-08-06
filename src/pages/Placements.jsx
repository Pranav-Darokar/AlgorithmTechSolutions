import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Award, ClipboardCheck, Sparkles, Smile } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import SectionTitle from '@/components/common/SectionTitle'
import { placementStats, hiringPartners, successStories, placementProcess } from '@/data/placements'

export default function Placements() {
  return (
    <div className="py-16 space-y-24">
      
      {/* Introduction Header */}
      <Container>
        <SectionTitle
          badge="Careers Node"
          title="Our Track Record Speaks for Itself"
          subtitle="We train students in core high-demand IT scripts, review portfolios, practice mock interviews, and schedule direct placements with top recruiters."
        />
      </Container>

      {/* Stats Counter Section */}
      <section className="bg-card/40 border-y py-12 backdrop-blur-sm">
        <Container className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {placementStats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-background/50 border rounded-xl"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-primary font-display tracking-tight mb-1">
                {stat.value}
              </h3>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Placement Process Pipeline */}
      <section>
        <Container className="space-y-12">
          <SectionTitle
            badge="The Route to IT Jobs"
            title="Our Step-by-Step Placement Process"
            subtitle="How we prepare and support students from foundation concepts to client-facing interviews."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementProcess.map((item) => (
              <div 
                key={item.step} 
                className="relative p-6 bg-card border border-border/50 rounded-xl space-y-4 shadow-sm"
              >
                <div className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm">
                  {item.step}
                </div>
                <h4 className="font-bold font-display text-base pt-1">{item.title}</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Success Stories Grid */}
      <section className="bg-card/20 border-y py-16">
        <Container className="space-y-12">
          <SectionTitle
            badge="Success Stories"
            title="Learners Who Made the Leap"
            subtitle="Browse how students successfully transitioned from core colleges or non-tech jobs into corporate positions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.id} className="bg-card/60 backdrop-blur-sm border border-border/60 flex flex-col h-full">
                <CardContent className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  
                  {/* Testimonial Quote */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        {story.course}
                      </span>
                      <span className="text-xs font-semibold text-[#DF8600] dark:text-amber-400">
                        Package: {story.package}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      "{story.quote}"
                    </p>
                  </div>

                  {/* Student Details and Company */}
                  <div className="flex items-center gap-3 pt-4 border-t mt-4">
                    <img
                      src={story.photo}
                      alt={story.name}
                      className="w-11 h-11 rounded-full object-cover object-center border-2 border-primary/20 shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <h5 className="font-display font-bold text-sm tracking-tight text-foreground">{story.name}</h5>
                      <p className="text-xs text-muted-foreground">Placed at <span className="font-semibold text-foreground/80">{story.company}</span></p>
                    </div>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Hiring Partners Grid */}
      <section>
        <Container className="space-y-12">
          <SectionTitle
            badge="Hiring Network"
            title="Our Graduates Work in Top Companies"
            subtitle="We are partnered with major service and product corporations scheduling monthly recruitment campaigns."
          />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 justify-items-center">
            {hiringPartners.map((partner) => (
              <div 
                key={partner.name}
                className="bg-card/60 px-6 py-5 border rounded-xl flex items-center justify-center font-display font-extrabold text-lg text-muted-foreground/80 w-full text-center hover:border-primary hover:text-primary transition-all duration-200"
              >
                {partner.name}
              </div>
            ))}
          </div>
        </Container>
      </section>

    </div>
  )
}

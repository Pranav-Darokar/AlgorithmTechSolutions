import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Award, ClipboardCheck, Sparkles, Smile, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import SectionTitle from '@/components/common/SectionTitle'
import SEO from '@/components/common/SEO'
import SuccessStoriesMarquee from '@/components/common/SuccessStoriesMarquee'
import CountUpAnimation from '@/components/common/CountUpAnimation'
import { placementStats, hiringPartners, placementProcess } from '@/data/placements'

export default function Placements() {
  return (
    <div className="pb-16 pt-0 space-y-16 overflow-hidden relative">
      <SEO 
        title="Placements & Success Stories" 
        description="See our top performing students placed in top MNCs with high packages. AlgorithmTech provides 100% placement support."
      />

      {/* Success Stories Grid */}
      <section className="bg-slate-50/50 dark:bg-transparent pb-12 pt-0">
        <Container className="space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto mb-6 mt-4">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-foreground">
              Our Placement Success Stories
            </h2>
            <p className="text-muted-foreground text-base">
              Meet our students who turned their skills into careers.
            </p>
          </div>

          <SuccessStoriesMarquee />
        </Container>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-card/40 border-y py-12 backdrop-blur-sm">
        <Container className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {placementStats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-background/50 border rounded-xl"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-primary font-display tracking-tight mb-1">
                <CountUpAnimation value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </h3>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
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

          <div className="relative flex overflow-hidden group gap-6 w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-4">
            <div className="flex animate-marquee shrink-0 gap-6 min-w-full items-center justify-around">
              {hiringPartners.map((partner, idx) => (
                <div 
                  key={`${partner.name}-${idx}`}
                  className="bg-white px-8 py-8 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center w-[280px] h-32 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 shrink-0 group/card"
                  title={partner.name}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-20 max-w-full object-contain transition-all duration-300 group-hover/card:scale-110 drop-shadow-sm" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="flex animate-marquee shrink-0 gap-6 min-w-full items-center justify-around" aria-hidden="true">
              {hiringPartners.map((partner, idx) => (
                <div 
                  key={`${partner.name}-dup-${idx}`}
                  className="bg-white px-8 py-8 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center w-[280px] h-32 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 shrink-0 group/card"
                  title={partner.name}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-20 max-w-full object-contain transition-all duration-300 group-hover/card:scale-110 drop-shadow-sm" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
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

    </div>
  )
}

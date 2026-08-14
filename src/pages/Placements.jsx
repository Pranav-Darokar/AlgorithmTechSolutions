import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Award, ClipboardCheck, Sparkles, Smile, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import SectionTitle from '@/components/common/SectionTitle'
import SEO from '@/components/common/SEO'
import { placementStats, hiringPartners, successStories, placementProcess } from '@/data/placements'

export default function Placements() {
  const halfIndex = Math.ceil(successStories.length / 2);
  const row1Stories = successStories.slice(0, halfIndex);
  const row2Stories = successStories.slice(halfIndex);

  const getDisplayStories = (stories) => {
    if (stories.length === 0) return [];
    if (stories.length < 5) return [...stories, ...stories, ...stories, ...stories, ...stories];
    return stories;
  };

  const displayRow1 = getDisplayStories(row1Stories);
  const displayRow2 = getDisplayStories(row2Stories);

  // Helper for rendering a card
  const renderCard = (story) => (
    <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[16px] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
      {/* Square Photo */}
      <div className="aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
        <img
          src={story.photo}
          alt={story.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Details */}
      <CardContent className="p-5 flex flex-col items-center text-center flex-grow">
        <div className="flex-grow w-full flex flex-col items-center justify-start space-y-3">
          <div className="space-y-1 w-full">
            <h5 className="font-display font-bold text-[17px] text-slate-900 dark:text-slate-100 leading-tight">
              {story.name}
            </h5>
            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {story.city ? story.city : story.company}
            </div>
          </div>
          <div className="w-full pb-2">
            <span className="inline-block text-[11px] font-semibold px-2.5 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800/50">
              {story.course}
            </span>
          </div>
        </div>
        <div className="w-full pt-4 mt-auto border-t border-slate-100 dark:border-slate-800">
          <div className="text-base font-extrabold text-[#DF8600] dark:text-amber-500">
            {story.package}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="py-16 space-y-20 overflow-hidden relative">
      <SEO 
        title="Placements & Success Stories" 
        description="See our top performing students placed in top MNCs with high packages. AlgorithmTech provides 100% placement support."
      />

      {/* Success Stories Grid */}
      <section className="bg-slate-50/50 dark:bg-transparent pb-16 pt-12">
        <Container className="space-y-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-foreground">
              Our Placement Success Stories
            </h2>
            <p className="text-muted-foreground text-lg">
              Meet our students who turned their skills into careers.
            </p>
          </div>

          <div className="relative flex flex-col gap-6 overflow-hidden group w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-4">
            {successStories.length === 0 ? (
              <div className="w-full text-center text-muted-foreground py-10">No students found.</div>
            ) : (
              <>
                {/* Row 1 (Normal Scroll) */}
                {displayRow1.length > 0 && (
                  <div className="flex gap-6 w-full">
                    {[0, 1].map((arrIndex) => (
                      <div key={`r1-${arrIndex}`} className={`flex animate-marquee shrink-0 gap-6 min-w-full items-stretch ${arrIndex === 1 ? 'hidden sm:flex' : ''}`} aria-hidden={arrIndex === 1}>
                        {displayRow1.map((story, i) => (
                          <div key={`${story.id}-r1-${arrIndex}-${i}`} className="w-[220px] md:w-[250px] shrink-0">
                            {renderCard(story)}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* Row 2 (Reverse Scroll Seamless) */}
                {displayRow2.length > 0 && (
                  <div className="flex animate-marquee-reverse-seamless shrink-0 gap-6 items-stretch w-max">
                    {[0, 1].map((arrIndex) => (
                      <React.Fragment key={`r2-frag-${arrIndex}`}>
                        {displayRow2.map((story, i) => (
                          <div key={`${story.id}-r2-${arrIndex}-${i}`} className="w-[220px] md:w-[250px] shrink-0">
                            {renderCard(story)}
                          </div>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
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

    </div>
  )
}

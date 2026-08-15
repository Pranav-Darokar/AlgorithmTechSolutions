import React from 'react'
import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function CourseCard({ course, compact = false }) {
  const {
    id,
    name,
    iconName,
    image,
    shortDescription,
    duration,
    learningMode,
    skillLevel,
    certificateIncluded,
    placementAssistance,
  } = course

  const IconComponent = Icons[iconName] || Icons.BookOpen

  return (
    <Card interactive={true} className="flex flex-col h-full bg-card/60 backdrop-blur-sm border border-border/60 overflow-hidden group">
      {/* Course Banner Image */}
      {image && (
        <div className={`relative ${compact ? 'h-24' : 'h-44'} w-full overflow-hidden bg-slate-900`}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          
          <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-primary p-2 rounded-xl border border-white/20 shadow-xs">
            <IconComponent size={20} className="stroke-[2]" />
          </div>

          <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 justify-end">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-white/10 shadow-xs">
              {duration}
            </span>
          </div>
        </div>
      )}

      <CardHeader className={`relative ${compact ? 'p-4 pb-2' : 'pb-3'}`}>
        {!image && (
          <div className="flex justify-between items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-xl border border-primary/20">
              <IconComponent size={24} className="stroke-[2]" />
            </div>
            <div className="flex flex-wrap gap-1.5 justify-end">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-secondary/15 text-secondary border border-secondary/20">
                {duration}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-muted text-muted-foreground border">
                {skillLevel}
              </span>
            </div>
          </div>
        )}
        <CardTitle className={`${image ? 'mt-1' : 'mt-4'} ${compact ? 'text-lg leading-tight' : 'text-xl'} font-bold font-display`}>{name}</CardTitle>
        <CardDescription className="text-xs text-muted-foreground mt-1 flex items-center justify-between">
          <span>Mode: {learningMode}</span>
          {image && (
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-muted text-muted-foreground border">
              {skillLevel}
            </span>
          )}
        </CardDescription>
      </CardHeader>
      
      <CardContent className={`flex-grow ${compact ? 'p-4 pt-0 pb-3' : 'pb-4'}`}>
        <p className={`text-muted-foreground ${compact ? 'text-[13px] leading-snug line-clamp-2' : 'text-sm leading-relaxed'}`}>
          {shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {certificateIncluded && (
            <span className="inline-flex items-center gap-1 text-[11px] text-[#DF8600] dark:text-amber-400 font-medium">
              <Icons.CheckCircle size={12} className="stroke-[2.5]" /> Certificate
            </span>
          )}
          {placementAssistance && (
            <span className="inline-flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 font-medium">
              <Icons.CheckCircle size={12} className="stroke-[2.5]" /> Placements
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className={`grid grid-cols-2 gap-3 border-t ${compact ? 'p-4 pt-3' : 'pt-4'}`}>
        <Link to={`/courses/${id}`} className="w-full">
          <Button variant="outline" size="sm" className={`w-full ${compact ? 'text-[11px] h-8' : 'text-xs h-9'}`}>
            Learn More
          </Button>
        </Link>
        <Link to="/contact" className="w-full">
          <Button variant="gradient" size="sm" className={`w-full ${compact ? 'text-[11px] h-8' : 'text-xs h-9'}`}>
            Enroll Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

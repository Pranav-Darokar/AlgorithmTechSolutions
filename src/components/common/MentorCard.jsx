import React from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { GraduationCap, Briefcase, Award } from 'lucide-react'

export default function MentorCard({ mentor }) {
  const { name, photo, qualification, experience, specialization, skills, bio } = mentor

  return (
    <Card interactive={true} className="flex flex-col h-full bg-card/60 backdrop-blur-sm overflow-hidden border border-border/60">
      <div className="relative h-56 w-full overflow-hidden bg-muted">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
          <div className="text-white space-y-0.5">
            <h4 className="text-lg font-bold font-display tracking-tight leading-tight">{name}</h4>
            <span className="inline-flex items-center gap-1 text-[11px] text-secondary font-medium">
              <Award size={12} className="stroke-[2.5]" /> {specialization}
            </span>
          </div>
        </div>
      </div>

      <CardContent className="flex-grow p-5 space-y-3">
        <div className="grid grid-cols-2 gap-2 text-xs border-b pb-3 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <GraduationCap size={14} className="text-primary shrink-0" />
            <span className="truncate" title={qualification}>{qualification}</span>
          </div>
          <div className="flex items-center gap-1.5 justify-end">
            <Briefcase size={13} className="text-primary shrink-0" />
            <span>{experience} Exp</span>
          </div>
        </div>
        
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {bio}
        </p>

        <div className="flex flex-wrap gap-1 pt-1">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-[10px] font-medium px-2 py-0.5 rounded bg-muted border text-foreground/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

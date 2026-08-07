import React from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { GraduationCap, Briefcase, Award } from 'lucide-react'

export default function MentorCard({ mentor }) {
  const { name, photo, qualification, experience, specialization, skills, bio } = mentor

  const initials = name
    ? name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    : 'AT'

  return (
    <Card interactive={true} className="flex flex-col h-full bg-card/60 backdrop-blur-sm overflow-hidden border border-border/60">
      <div className="relative h-56 w-full overflow-hidden bg-slate-900 flex items-center justify-center">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-950 flex flex-col items-center justify-center p-6 text-center group-hover:scale-105 transition-transform">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-black text-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 mb-2">
              {initials}
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400">
              Corporate Mentor
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-5">
          <div className="text-white space-y-0.5 w-full">
            <h4 className="text-lg font-bold font-display tracking-tight leading-tight">{name}</h4>
            <span className="inline-flex items-center gap-1 text-[11px] text-cyan-400 font-semibold">
              <Award size={12} className="stroke-[2.5]" /> {specialization}
            </span>
          </div>
        </div>
      </div>

      <CardContent className="flex-grow p-5 space-y-3">
        <div className="flex items-center justify-between gap-1 text-[11px] border-b pb-3 text-muted-foreground font-medium">
          <div className="flex items-center gap-1.5 min-w-0">
            <GraduationCap size={13} className="text-primary shrink-0" />
            <span className="whitespace-nowrap overflow-hidden text-ellipsis" title={qualification}>{qualification}</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <Briefcase size={12} className="text-primary shrink-0" />
            <span>{experience}</span>
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

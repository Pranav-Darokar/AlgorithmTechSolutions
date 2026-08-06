import React from 'react'
import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function CourseCard({ course }) {
  const {
    id,
    name,
    iconName,
    shortDescription,
    duration,
    learningMode,
    skillLevel,
    certificateIncluded,
    placementAssistance,
  } = course

  const IconComponent = Icons[iconName] || Icons.BookOpen

  return (
    <Card interactive={true} className="flex flex-col h-full bg-card/60 backdrop-blur-sm border border-border/60">
      <CardHeader className="relative pb-3">
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
        <CardTitle className="mt-4 text-xl font-bold">{name}</CardTitle>
        <CardDescription className="text-xs text-muted-foreground mt-1">
          Mode: {learningMode}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow pb-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
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

      <CardFooter className="grid grid-cols-2 gap-3 border-t pt-4">
        <Link to={`/courses/${id}`} className="w-full">
          <Button variant="outline" size="sm" className="w-full text-xs h-9">
            Learn More
          </Button>
        </Link>
        <Link to="/contact" className="w-full">
          <Button variant="gradient" size="sm" className="w-full text-xs h-9">
            Enroll Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

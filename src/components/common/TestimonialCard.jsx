import React from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Star, Quote } from 'lucide-react'

export default function TestimonialCard({ testimonial }) {
  const { name, course, photo, rating, review } = testimonial

  return (
    <Card className="bg-card/60 backdrop-blur-sm relative border border-border/60">
      <CardContent className="p-6 space-y-4">
        <Quote className="absolute right-6 top-6 text-primary/10 w-12 h-12 pointer-events-none" />

        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}
            />
          ))}
        </div>

        <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed pt-1">
          "{review}"
        </p>

        <div className="flex items-center gap-3 pt-2">
          <img
            src={photo}
            alt={name}
            className="w-11 h-11 rounded-full object-cover object-center border-2 border-primary/20 shrink-0"
            loading="lazy"
          />
          <div>
            <h5 className="font-display font-bold text-sm tracking-tight text-foreground">{name}</h5>
            <p className="text-xs text-muted-foreground">Student, {course}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

import React from 'react'
import { cn } from '@/lib/utils'

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "space-y-3 max-w-3xl",
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
      {...props}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
          {badge}
        </span>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

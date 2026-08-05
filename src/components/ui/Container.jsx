import React from 'react'
import { cn } from '@/lib/utils'

const Container = ({
  children,
  className,
  size = 'lg',
  as: Component = 'div',
  ...props
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <Component
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export { Container }

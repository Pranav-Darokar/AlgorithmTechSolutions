import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const Button = forwardRef(({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  type = 'button',
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-display font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer'
  
  const variants = {
    primary: 'bg-[#0F172A] hover:bg-[#1E293B] text-white dark:bg-white dark:text-[#0F172A] dark:hover:bg-slate-100 font-bold rounded-2xl shadow-lg shadow-slate-900/20',
    secondary: 'bg-[#F59E0B] text-white hover:bg-[#D97706] shadow-md shadow-amber-500/20',
    gradient: 'bg-[#0F172A] hover:bg-[#1E293B] text-white dark:bg-white dark:text-[#0F172A] dark:hover:bg-slate-100 font-bold rounded-2xl shadow-lg shadow-slate-900/20',
    outline: 'border border-border bg-background hover:bg-muted text-foreground font-semibold rounded-2xl',
    ghost: 'hover:bg-muted text-foreground',
  }

  const sizes = {
    sm: 'h-9 px-3 text-sm rounded-md',
    md: 'h-11 px-5 text-base',
    lg: 'h-12 px-7 text-lg rounded-xl',
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : null}
      {children}
    </motion.button>
  )
})

Button.displayName = 'Button'

export { Button }

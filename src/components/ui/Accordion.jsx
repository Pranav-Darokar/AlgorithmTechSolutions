import React, { createContext, useContext, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const AccordionContext = createContext(null)

export function Accordion({ children, className, type = 'single', defaultValue }) {
  const [value, setValue] = useState(defaultValue)

  const toggleItem = (itemValue) => {
    if (type === 'single') {
      setValue(value === itemValue ? undefined : itemValue)
    } else {
      setValue(
        Array.isArray(value)
          ? value.includes(itemValue)
            ? value.filter((v) => v !== itemValue)
            : [...value, itemValue]
          : [itemValue]
      )
    }
  }

  return (
    <AccordionContext.Provider value={{ value, toggleItem }}>
      <div className={cn("space-y-4", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({ children, value: itemValue, className }) {
  const context = useContext(AccordionContext)
  const isExpanded = Array.isArray(context.value)
    ? context.value.includes(itemValue)
    : context.value === itemValue

  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-200",
        isExpanded && "border-primary bg-primary/5 shadow-md",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value: itemValue, isExpanded })
        }
        return child;
      })}
    </div>
  )
}

export function AccordionTrigger({ children, value: itemValue, isExpanded, className }) {
  const context = useContext(AccordionContext)

  return (
    <button
      type="button"
      onClick={() => context.toggleItem(itemValue)}
      className={cn(
        "flex w-full items-center justify-between p-5 font-display font-semibold text-base md:text-lg text-left transition-all duration-200 focus-visible:outline-none cursor-pointer",
        className
      )}
    >
      {children}
      <motion.div
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className="shrink-0 text-muted-foreground ml-4"
      >
        <ChevronDown size={18} />
      </motion.div>
    </button>
  )
}

export function AccordionContent({ children, isExpanded, className }) {
  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <div className={cn("px-5 pb-5 pt-0 text-sm md:text-base text-muted-foreground leading-relaxed", className)}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

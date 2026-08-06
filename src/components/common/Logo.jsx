import React from 'react'
import logoIcon from '@/assets/logo_icon.png'

export default function Logo({ className = "w-10 h-10 object-contain", size }) {
  return (
    <img 
      src={logoIcon} 
      alt="AlgorithmTech Logo" 
      className={className}
      style={size ? { width: size, height: size } : undefined}
    />
  )
}

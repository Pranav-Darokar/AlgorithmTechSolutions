import React, { useEffect, useState, useRef } from 'react';
import { useInView, useSpring } from 'framer-motion';

export default function CountUpAnimation({ value, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);
  
  const springValue = useSpring(0, {
    duration: 2000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
      
      const interval = setInterval(() => {
        springValue.set(0);
        setTimeout(() => {
          springValue.set(value);
        }, 150); // Small pause before recounting
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [springValue]);

  const formattedValue = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(displayValue);

  return (
    <span ref={ref}>
      {formattedValue}{suffix}
    </span>
  );
}

import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [counts, setCounts] = useState({
    systems: 0,
    accuracy: 0,
    clients: 0,
    efficiency: 0
  })

  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true)
      
      const duration = 1500
      const steps = 60
      const interval = duration / steps
      
      let currentStep = 0
      
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        
        setCounts({
          systems: Math.floor(500 * progress),
          accuracy: Math.floor(999 * progress),
          clients: Math.floor(120 * progress),
          efficiency: Math.floor(35 * progress)
        })
        
        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, interval)
      
      return () => clearInterval(timer)
    }
  }, [isInView, hasStarted])

  const stats = [
    {
      value: counts.systems,
      display: `${counts.systems}+`,
      label: "systems installed"
    },
    {
      value: counts.accuracy,
      display: counts.accuracy >= 999 ? "99.9%" : `${counts.accuracy}%`,
      label: "precision accuracy"
    },
    {
      value: counts.clients,
      display: `${counts.clients}+`,
      label: "global clients"
    },
    {
      value: counts.efficiency,
      display: `${counts.efficiency}%`,
      label: "efficiency increase"
    }
  ]

  return (
    <section ref={ref} className="bg-black py-16 md:py-20 px-4 md:px-6">
      {/* Top Border */}
      <div className="h-px bg-white/10 mb-12 md:mb-20" />
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`text-center ${index < stats.length - 1 ? 'border-r border-white/10' : ''} ${index < stats.length - 2 ? 'md:border-r md:border-white/10' : ''}`}
          >
            {/* Large Number */}
            <div 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/80"
              style={{ fontFamily: 'Instrument Serif, serif' }}
            >
              {stat.display}
            </div>
            
            {/* Label */}
            <div className="text-white/40 text-xs md:text-sm tracking-widest uppercase mt-2">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection

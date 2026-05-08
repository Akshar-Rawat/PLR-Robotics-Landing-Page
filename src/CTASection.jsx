import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-black py-16 md:py-24 lg:py-40 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Top Border */}
        <div className="h-px bg-white/10 mb-12 md:mb-20 max-w-6xl mx-auto" />
        
        {/* Label */}
        <div className="text-white/40 text-xs tracking-widest uppercase mb-8">
          Get started
        </div>
        
        {/* Heading */}
        <motion.h2
          initial={{ scale: 0.95, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight mb-6 md:mb-8"
          style={{ fontFamily: 'Instrument Serif, serif' }}
        >
          Transform your manufacturing <em className="italic text-white/40">future.</em>
        </motion.h2>
        
        {/* Subtext */}
        <p className="text-white/40 text-sm md:text-base mb-8 md:mb-12 max-w-lg md:max-w-xl mx-auto px-4">
          Join 120+ industrial leaders who have already automated their operations with our systems.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <button className="liquid-glass rounded-full px-6 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors w-full sm:w-auto">
            Schedule Consultation
          </button>
          <button className="liquid-glass rounded-full px-6 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors w-full sm:w-auto">
            Explore Robotics
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTASection

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-black py-28 md:py-40 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Top Border */}
        <div className="h-px bg-white/10 mb-20 max-w-6xl mx-auto" />
        
        {/* Label */}
        <div className="text-white/40 text-xs tracking-widest uppercase mb-8">
          Get started
        </div>
        
        {/* Heading */}
        <motion.h2
          initial={{ scale: 0.95, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl text-white tracking-tight mb-8"
          style={{ fontFamily: 'Instrument Serif, serif' }}
        >
          Transform your manufacturing <em className="italic text-white/40">future.</em>
        </motion.h2>
        
        {/* Subtext */}
        <p className="text-white/40 text-base mb-12 max-w-xl mx-auto">
          Join 120+ industrial leaders who have already automated their operations with our systems.
        </p>
        
        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
            Schedule Consultation
          </button>
          <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
            Explore Robotics
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTASection

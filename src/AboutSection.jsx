import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-black pt-20 md:pt-32 lg:pt-44 pb-8 md:pb-10 lg:pb-14 px-4 md:px-6 overflow-hidden relative">
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-sm tracking-widest uppercase mb-8"
        >
          About PLR Robotics
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-white leading-[1.1] tracking-tight"
          style={{ fontFamily: 'Instrument Serif, serif' }}
        >
          <span className="text-white">Engineering then </span>
          <em className="italic text-white/60">precision</em>
          <span className="text-white"> for</span>
          <br className="hidden md:block" />
          <em className="italic text-white/60">industries that then innovate, scale, and lead.</em>
        </motion.h2>
      </div>
    </section>
  )
}

export default AboutSection

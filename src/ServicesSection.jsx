import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      tag: "Automation",
      title: "Cobot Integration",
      description: "Advanced collaborative robot systems designed to work safely alongside humans, enhancing productivity while maintaining operational flexibility.",
      videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
    },
    {
      tag: "Precision",
      title: "Smart Manufacturing",
      description: "AI-powered manufacturing systems that deliver unmatched precision, speed, and reliability for industrial automation and quality control.",
      videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
    }
  ]

  return (
    <section ref={ref} className="bg-black py-16 md:py-24 lg:py-40 px-4 md:px-6 overflow-hidden relative">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 md:mb-12 lg:mb-16 gap-2"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl text-white tracking-tight">Robotics Solutions</h2>
          <div className="text-white/40 text-xs sm:text-sm">Automation systems</div>
        </motion.div>

        {/* Two-card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * index }}
              className="liquid-glass robotics-glow rounded-3xl overflow-hidden group"
            >
              {/* Video area */}
              <div className="aspect-video relative overflow-hidden">
                <video
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={service.videoUrl}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Card body */}
              <div className="p-4 md:p-6 lg:p-8">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-white/40 text-xs tracking-widest uppercase">{service.tag}</div>
                  <div className="liquid-glass rounded-full p-2">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </div>
                <h3 className="text-white text-lg md:text-xl lg:text-2xl mb-3 tracking-tight">{service.title}</h3>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
